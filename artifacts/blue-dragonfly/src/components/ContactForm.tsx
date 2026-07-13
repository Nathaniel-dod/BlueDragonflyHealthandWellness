import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  consumeSubmissionSlot,
  sanitizeLine,
  sanitizeText,
} from "@/lib/formSecurity";

/**
 * Schema-based validation (OWASP: server-independent input validation).
 * - Explicit length limits on every field to prevent oversized payloads.
 * - Phone restricted to a safe character set.
 * - `.strict()` rejects any unexpected fields.
 */
const formSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name is required")
      .max(100, "Name must be 100 characters or fewer"),
    email: z
      .string()
      .trim()
      .email("Valid email is required")
      .max(254, "Email must be 254 characters or fewer"),
    phone: z
      .string()
      .trim()
      .max(30, "Phone number must be 30 characters or fewer")
      .regex(/^[0-9()+\-.\s]*$/, "Phone number contains invalid characters")
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(2000, "Message must be 2000 characters or fewer"),
  })
  .strict();

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  // Honeypot field: invisible to humans; bots that fill it are silently dropped.
  const honeypotRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    // Spam bot check: if the hidden honeypot field was filled, pretend
    // success without sending anything (don't tip the bot off).
    if (honeypotRef.current?.value) {
      form.reset();
      toast({ title: "Message sent", description: "We'll get back to you as soon as possible." });
      return;
    }

    // Client-side rate limiting: cooldown + hourly cap, graceful messaging.
    // Attempt-based: the slot is consumed even if the request later fails.
    const rateCheck = consumeSubmissionSlot("contact");
    if (!rateCheck.allowed) {
      toast({
        title: "Please slow down",
        description: rateCheck.reason,
        variant: "default",
      });
      return;
    }

    setIsSubmitting(true);

    // Access key is a Web3Forms *publishable* key (designed to be public,
    // like a form ID) supplied via environment variable — never hard-coded.
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast({
        title: "Setup in progress",
        description: "Our form is being set up — please call or email us in the meantime.",
        variant: "default",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Build the payload explicitly — only validated, sanitized fields are
      // forwarded. No spreading of raw input objects.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New contact from bluedragonflywellness website",
          name: sanitizeLine(data.name),
          email: sanitizeLine(data.email),
          phone: data.phone ? sanitizeLine(data.phone) : "",
          message: sanitizeText(data.message),
          // Web3Forms honeypot semantics: empty value = human submission.
          botcheck: "",
        }),
      });

      // Graceful handling of upstream rate limiting (HTTP 429).
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
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl shadow-brand-royal/5 border border-white/40 max-w-2xl mx-auto w-full">
      <h3 className="text-2xl font-serif text-brand-royal mb-6">Send us a message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot: hidden from real users (and screen readers); bots auto-fill it */}
          <input
            ref={honeypotRef}
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" maxLength={100} {...field} className="bg-brand-warm/30 border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" maxLength={254} {...field} className="bg-brand-warm/30 border-border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 123-4567" maxLength={30} {...field} className="bg-brand-warm/30 border-border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How can we help you?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about what you're looking for..." 
                    className="min-h-[120px] bg-brand-warm/30 border-border" 
                    maxLength={2000}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-brand-royal hover:bg-brand-dragonfly text-white h-12 text-lg rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
