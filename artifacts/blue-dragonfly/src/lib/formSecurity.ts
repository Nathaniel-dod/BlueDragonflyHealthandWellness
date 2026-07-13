/**
 * Client-side form security helpers (OWASP-aligned).
 *
 * This is a static site with no backend of its own: forms submit directly to
 * Web3Forms, which applies its own server-side rate limiting and spam
 * filtering. These helpers add defense-in-depth on the client:
 *
 * 1. Submission rate limiting (cooldown + hourly cap) to stop rapid-fire
 *    abuse from the UI and reduce load on the upstream service.
 * 2. Input sanitization: trims whitespace and strips control characters
 *    that have no place in human-entered text (defends against header/log
 *    injection style payloads being relayed through email).
 *
 * NOTE: Client-side checks are a usability and abuse-reduction layer, not a
 * trust boundary. The upstream service (Web3Forms) and the CDN (Cloudflare)
 * remain the authoritative enforcement points.
 */

// Minimum seconds between submissions from this browser tab/session.
const COOLDOWN_SECONDS = 30;
// Maximum submissions per rolling hour from this browser (per form).
const MAX_PER_HOUR = 5;

interface RateLimitResult {
  allowed: boolean;
  /** Human-friendly reason shown to the user when blocked. */
  reason?: string;
}

/**
 * Atomically checks AND records a submission attempt for the given form key.
 * Rate limiting is attempt-based: every attempt consumes a slot regardless
 * of whether the upstream request later succeeds or fails, so failed or
 * rejected requests cannot be retried in an unthrottled loop.
 *
 * Uses localStorage so limits survive page reloads; failure to access
 * storage (private browsing, etc.) fails open — the upstream service
 * still enforces its own limits.
 */
export function consumeSubmissionSlot(formKey: string): RateLimitResult {
  const storageKey = `form_submissions_${formKey}`;
  const now = Date.now();

  try {
    const raw = window.localStorage.getItem(storageKey);
    const timestamps: number[] = raw ? JSON.parse(raw) : [];

    // Keep only entries from the last hour (rolling window).
    const recent = timestamps.filter(
      (t) => typeof t === "number" && now - t < 60 * 60 * 1000,
    );

    const last = recent[recent.length - 1];
    if (last && now - last < COOLDOWN_SECONDS * 1000) {
      const wait = Math.ceil((COOLDOWN_SECONDS * 1000 - (now - last)) / 1000);
      return {
        allowed: false,
        reason: `Please wait ${wait} seconds before submitting again.`,
      };
    }

    if (recent.length >= MAX_PER_HOUR) {
      return {
        allowed: false,
        reason:
          "You've reached the submission limit for now. Please try again later or contact us directly.",
      };
    }

    // Record this attempt immediately (check + record together so the
    // policy cannot drift from the call sites).
    recent.push(now);
    window.localStorage.setItem(storageKey, JSON.stringify(recent));

    return { allowed: true };
  } catch {
    // Storage unavailable — fail open; Web3Forms enforces limits server-side.
    return { allowed: true };
  }
}

/**
 * Sanitizes free-text input before relaying it to the email service:
 * - strips ASCII control characters (except newline/tab in multiline text)
 * - collapses excessive consecutive newlines
 * - trims leading/trailing whitespace
 */
export function sanitizeText(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

/** Sanitizes single-line input: also removes newlines and tabs entirely. */
export function sanitizeLine(value: string): string {
  return sanitizeText(value).replace(/[\n\r\t]+/g, " ").trim();
}
