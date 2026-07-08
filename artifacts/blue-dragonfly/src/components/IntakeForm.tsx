import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

const formSchema = z.object({
  healthGoals: z.string().min(5, "Please share a bit about your health goals"),
  conditions: z.string().optional(),
  energyLevel: z.string().min(1, "Please select an energy level"),
  sleepQuality: z.string().min(1, "Please select a sleep quality level"),
  painLevel: z.string().min(1, "Please select a pain level"),
  consultationFormat: z.enum(["in-person", "online"]),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required for consultations"),
});

type FormValues = z.infer<typeof formSchema>;

export function IntakeForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      healthGoals: "",
      conditions: "",
      energyLevel: "",
      sleepQuality: "",
      painLevel: "",
      consultationFormat: "online",
      name: "",
      email: "",
      phone: "",
    },
  });

  const nextStep = async (fieldsToValidate: (keyof FormValues)[]) => {
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      toast({
        title: "Setup in progress",
        description: "Our intake form is being set up — please call or email us in the meantime.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formattedAnswers = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Format Preference: ${data.consultationFormat}

Health Goals:
${data.healthGoals}

Conditions/Concerns:
${data.conditions || "None provided"}

Daily Status:
Energy Level: ${data.energyLevel}
Sleep Quality: ${data.sleepQuality}
Pain Level: ${data.painLevel}
      `.trim();

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Perfect Day intake submission",
          message: formattedAnswers,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error sending your intake form. Please try again or contact us directly.",
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
        <h3 className="text-3xl font-serif text-brand-royal mb-4">You're on your way</h3>
        <p className="text-gray-700 mb-8 font-light">
          Thank you for sharing your health journey with us. Cheryl will review your intake details, and we'll reach out shortly to schedule your Perfect Day Consultation.
        </p>
        <Button onClick={() => window.location.href = "/"} className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full h-12 px-8">
          Return to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl shadow-brand-royal/5 border border-white/40 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-brand-dragonfly">Step {step} of 3</span>
          <span className="text-sm text-gray-400">
            {step === 1 ? "Your Vision" : step === 2 ? "Daily Reality" : "Details"}
          </span>
        </div>
        <div className="w-full bg-brand-warm rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-brand-sky to-brand-dragonfly h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          
          {/* STEP 1 */}
          <div className={step === 1 ? "block" : "hidden space-y-6"}>
            <h3 className="text-2xl font-serif text-brand-royal mb-6">Let's start with your vision</h3>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="healthGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">What are your primary health goals right now?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="E.g., I want to have more energy to play with my grandkids..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Any current conditions, concerns, or past surgeries? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share any relevant history..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="button" onClick={() => nextStep(["healthGoals"])} className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full px-6">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* STEP 2 */}
          <div className={step === 2 ? "block" : "hidden space-y-6"}>
            <h3 className="text-2xl font-serif text-brand-royal mb-6">Your Daily Reality</h3>
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="energyLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">How is your energy level generally?</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["Low (exhausted)", "Moderate (gets me by)", "High (vibrant)"].map((opt) => (
                          <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={`energy-${opt}`} />
                            <label htmlFor={`energy-${opt}`} className="text-sm font-medium cursor-pointer">{opt}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="sleepQuality"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">How is your sleep quality?</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["Poor (restless)", "Fair (wake up tired)", "Good (restful)"].map((opt) => (
                          <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={`sleep-${opt}`} />
                            <label htmlFor={`sleep-${opt}`} className="text-sm font-medium cursor-pointer">{opt}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="painLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base">Are you experiencing daily pain?</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["Significant/Chronic", "Occasional/Mild", "Rarely/None"].map((opt) => (
                          <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={`pain-${opt}`} />
                            <label htmlFor={`pain-${opt}`} className="text-sm font-medium cursor-pointer">{opt}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep} className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button type="button" onClick={() => nextStep(["energyLevel", "sleepQuality", "painLevel"])} className="bg-brand-royal hover:bg-brand-dragonfly text-white rounded-full px-6">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={step === 3 ? "block" : "hidden space-y-6"}>
            <h3 className="text-2xl font-serif text-brand-royal mb-6">Final Details</h3>
            
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="consultationFormat"
                render={({ field }) => (
                  <FormItem className="space-y-3 bg-brand-warm/30 p-4 rounded-xl border border-border">
                    <FormLabel className="text-base font-semibold">How would you prefer to connect?</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="online" id="format-online" />
                          <label htmlFor="format-online" className="cursor-pointer">
                            <div className="font-medium">Online / Phone</div>
                            <div className="text-sm text-gray-500">Skype, FaceTime, WhatsApp, or Phone</div>
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="in-person" id="format-in-person" />
                          <label htmlFor="format-in-person" className="cursor-pointer">
                            <div className="font-medium">In-Person</div>
                            <div className="text-sm text-gray-500">At our Calgary Clinic</div>
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep} className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button type="submit" disabled={isSubmitting} className="bg-brand-gold hover:bg-yellow-500 text-brand-royal font-bold rounded-full px-8">
                {isSubmitting ? "Submitting..." : "Complete & Send"}
              </Button>
            </div>
          </div>
          
        </form>
      </Form>
    </div>
  );
}
