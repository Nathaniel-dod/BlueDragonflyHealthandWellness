import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import { consumeSubmissionSlot, sanitizeLine, sanitizeText } from "@/lib/formSecurity";
import {
  CONSULT_STEPS,
  MATRIX_NONE,
  buildConsultDefaults,
  buildConsultSchema,
  requiredFieldsForStep,
  type ConsultValues,
  type FieldDef,
} from "./consultConfig";

const DRAFT_KEY = "consult_intake_draft";

const FIELD_DEFS: Record<string, FieldDef> = Object.fromEntries(
  CONSULT_STEPS.flatMap((s) => s.fields.map((f) => [f.name, f])),
);

/**
 * Loads a saved draft from localStorage, keeping only known fields and
 * validating choice fields against their configured options so tampered
 * or stale storage can never introduce invalid state.
 */
function loadDraft(defaults: ConsultValues): ConsultValues {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return defaults;
    const merged: ConsultValues = { ...defaults };
    for (const key of Object.keys(defaults)) {
      const def = FIELD_DEFS[key];
      const value = (parsed as Record<string, unknown>)[key];
      if (!def) continue;

      if (def.type === "checks") {
        if (Array.isArray(value)) {
          merged[key] = value.filter(
            (v): v is string => typeof v === "string" && def.options!.includes(v),
          );
        }
      } else if (def.type === "radio" || def.type === "matrix") {
        if (typeof value === "string" && (value === "" || def.options!.includes(value))) {
          merged[key] = value;
        }
      } else if (typeof value === "string") {
        merged[key] = value.slice(0, def.maxLength ?? 1000);
      }
    }
    return merged;
  } catch {
    return defaults;
  }
}

function clearDraft() {
  try {
    window.localStorage.removeItem(DRAFT_KEY);
  } catch {
    // Non-fatal.
  }
}

/** Formats all answers into one organized plain-text email body. */
function formatAnswers(data: ConsultValues): string {
  const sections: string[] = [];

  for (const step of CONSULT_STEPS) {
    const lines: string[] = [];

    for (const f of step.fields) {
      const value = data[f.name];

      if (f.type === "matrix") {
        if (typeof value === "string" && value && value !== MATRIX_NONE) {
          lines.push(`${f.label}: ${value}`);
        }
        continue;
      }
      if (f.type === "checks") {
        if (Array.isArray(value) && value.length > 0) {
          lines.push(`${f.label}:\n  - ${value.map((v) => sanitizeLine(v)).join("\n  - ")}`);
        }
        continue;
      }
      if (typeof value === "string" && value.trim()) {
        if (f.type === "textarea") {
          lines.push(`${f.label}:\n${sanitizeText(value)}`);
        } else {
          lines.push(`${f.label}: ${sanitizeLine(value)}`);
        }
      }
    }

    if (step.title === "Pelvic Area Symptoms" && lines.length === 0) {
      lines.push("None flagged");
    }

    if (lines.length > 0) {
      sections.push(`===== ${step.title.toUpperCase()} =====\n\n${lines.join("\n\n")}`);
    }
  }

  return sections.join("\n\n\n");
}

function FieldControl({ field }: { field: FieldDef }) {
  return (
    <FormField
      name={field.name}
      render={({ field: rhf }) => (
        <FormItem>
          <FormLabel className="text-brand-royal font-medium">
            {field.label}
            {field.required && <span className="text-brand-gold ml-1">*</span>}
          </FormLabel>
          {field.hint && <p className="text-sm text-gray-500 -mt-1">{field.hint}</p>}
          <FormControl>
            {field.type === "textarea" ? (
              <Textarea
                {...rhf}
                value={(rhf.value as string) ?? ""}
                rows={field.rows ?? 3}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                className="bg-white"
              />
            ) : field.type === "radio" ? (
              <RadioGroup
                value={(rhf.value as string) ?? ""}
                onValueChange={rhf.onChange}
                className="flex flex-wrap gap-x-6 gap-y-3 pt-1"
              >
                {field.options!.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-gray-700">
                    <RadioGroupItem value={opt} />
                    <span>{opt}</span>
                  </label>
                ))}
              </RadioGroup>
            ) : field.type === "checks" ? (
              <div className="space-y-2 pt-1">
                {field.options!.map((opt) => {
                  const selected = Array.isArray(rhf.value) && (rhf.value as string[]).includes(opt);
                  return (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer text-gray-700">
                      <Checkbox
                        checked={selected}
                        onCheckedChange={(checked) => {
                          const current = Array.isArray(rhf.value) ? (rhf.value as string[]) : [];
                          rhf.onChange(
                            checked ? [...current, opt] : current.filter((v) => v !== opt),
                          );
                        }}
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>
            ) : (
              <Input
                {...rhf}
                value={(rhf.value as string) ?? ""}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                inputMode={field.numeric ? "numeric" : undefined}
                type={field.kind === "email" ? "email" : field.kind === "phone" ? "tel" : "text"}
                className="bg-white"
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function MatrixRow({ field }: { field: FieldDef }) {
  return (
    <FormField
      name={field.name}
      render={({ field: rhf }) => (
        <FormItem className="border-b border-brand-warm last:border-b-0 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <FormLabel className="text-gray-700 font-normal sm:w-1/3">{field.label}</FormLabel>
            <FormControl>
              <RadioGroup
                value={(rhf.value as string) ?? MATRIX_NONE}
                onValueChange={rhf.onChange}
                className="flex flex-wrap gap-x-4 gap-y-2"
              >
                {field.options!.map((opt) => (
                  <label key={opt} className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-600">
                    <RadioGroupItem value={opt} className="h-4 w-4" />
                    <span>{opt === MATRIX_NONE ? "Not an issue" : opt}</span>
                  </label>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function ConsultForm() {
  const schema = useMemo(() => buildConsultSchema(), []);
  const defaults = useMemo(() => loadDraft(buildConsultDefaults()), []);

  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const honeypotRef = useRef<HTMLInputElement>(null);

  const form = useForm<ConsultValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });

  // Auto-save draft (debounced) so a page refresh never loses progress.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const subscription = form.watch((values) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        try {
          window.localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
        } catch {
          // Storage unavailable — silently skip autosave.
        }
      }, 500);
    });
    return () => {
      subscription.unsubscribe();
      if (timer) clearTimeout(timer);
    };
  }, [form]);

  const totalSteps = CONSULT_STEPS.length;
  const current = CONSULT_STEPS[step];

  const nextStep = async () => {
    const required = requiredFieldsForStep(step);
    const valid = required.length === 0 ? true : await form.trigger(required);
    if (valid) {
      setStep((s) => Math.min(totalSteps - 1, s + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(0, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  async function onSubmit(data: ConsultValues) {
    // Honeypot: bots that fill the hidden field get a fake success.
    if (honeypotRef.current?.value) {
      setIsSuccess(true);
      return;
    }

    // Attempt-based client rate limiting (cooldown + hourly cap).
    const rateCheck = consumeSubmissionSlot("consult");
    if (!rateCheck.allowed) {
      toast({ title: "Please slow down", description: rateCheck.reason });
      return;
    }

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast({
        title: "Setup in progress",
        description: "This form is being set up — please contact us directly in the meantime.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Consultation intake — ${sanitizeLine(String(data.fullName ?? ""))}`,
          name: sanitizeLine(String(data.fullName ?? "")),
          email: sanitizeLine(String(data.email ?? "")),
          message: formatAnswers(data),
          // Web3Forms honeypot semantics: empty value = human submission.
          botcheck: "",
        }),
      });

      if (response.status === 429) {
        toast({
          title: "Too many requests",
          description: "Please wait a moment and try again.",
          variant: "destructive",
        });
        return;
      }

      const result = await response.json();
      if (result.success) {
        clearDraft();
        setIsSuccess(true);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch {
      toast({
        title: "Submission failed",
        description:
          "There was an error sending your form. Your answers are still saved on this device — please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl shadow-brand-royal/5 border border-white/40 text-center max-w-2xl mx-auto animate-in zoom-in duration-500">
        <div className="w-16 h-16 bg-brand-sky/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-dragonfly">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-serif text-brand-royal mb-4">Thank you</h3>
        <p className="text-gray-700 mb-8 font-light">
          Your consultation form has been received. Cheryl will review everything carefully before
          your appointment. We look forward to seeing you.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl shadow-brand-royal/5 border border-white/40 max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-brand-dragonfly">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-sm text-gray-400">{current.title}</span>
        </div>
        <div className="w-full bg-brand-warm rounded-full h-2">
          <div
            className="bg-gradient-to-r from-brand-sky to-brand-dragonfly h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-400">
            Your answers save automatically on this device as you type.
          </p>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Erase all saved answers and start over?")) {
                clearDraft();
                form.reset(buildConsultDefaults());
                setStep(0);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-xs text-gray-400 underline hover:text-brand-dragonfly transition-colors shrink-0 ml-4"
          >
            Start over
          </button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Honeypot: hidden from real users; bots auto-fill it */}
          <input
            ref={honeypotRef}
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute w-0 h-0 opacity-0 pointer-events-none"
          />

          <div className="mb-4">
            <h2 className="text-2xl font-serif text-brand-royal">{current.title}</h2>
            {current.intro && <p className="text-gray-600 mt-2 font-light">{current.intro}</p>}
          </div>

          {CONSULT_STEPS.map((s, idx) => (
            <div key={s.title} className={idx === step ? "block" : "hidden"}>
              {s.fields[0]?.type === "matrix" ? (
                <div className="rounded-2xl border border-brand-warm bg-white/70 px-4">
                  {s.fields.map((f) => (
                    <MatrixRow key={f.name} field={f} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {s.fields.map((f) => (
                    <FieldControl key={f.name} field={f} />
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between mt-10">
            {step > 0 ? (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="rounded-full h-12 px-6 border-brand-royal text-brand-royal"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            ) : (
              <span />
            )}

            {step < totalSteps - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full h-12 px-8"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full h-12 px-8"
              >
                {isSubmitting ? "Sending..." : "Submit Consultation Form"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
