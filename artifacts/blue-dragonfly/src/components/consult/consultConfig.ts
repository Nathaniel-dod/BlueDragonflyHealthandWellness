import { z } from "zod";

/**
 * Data-driven configuration for the full consultation intake form.
 * Mirrors the clinic's "Consult Form 2023-2024" PDF, organized into
 * wizard steps. The Zod schema, default values, and the formatted
 * email body are all generated from this single source of truth.
 */

export type FieldType = "text" | "textarea" | "radio" | "checks" | "matrix";

export interface FieldDef {
  name: string;
  label: string;
  hint?: string;
  type: FieldType;
  options?: readonly string[];
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  rows?: number;
  numeric?: boolean;
  kind?: "email" | "phone";
}

export interface StepDef {
  title: string;
  intro?: string;
  fields: FieldDef[];
}

export const MATRIX_NONE = "Not an issue";
export const MATRIX_OPTIONS = [MATRIX_NONE, "Acute", "Severe", "Chronic"] as const;

const FREQUENCY_OPTIONS = ["3 out of 3 days", "2 out of 3 days", "1 out of 3 days", "Never"] as const;

const pelvic = (name: string, label: string): FieldDef => ({
  name,
  label,
  type: "matrix",
  options: MATRIX_OPTIONS,
});

export const CONSULT_STEPS: StepDef[] = [
  {
    title: "About You",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true, maxLength: 100, placeholder: "Jane Doe" },
      { name: "email", label: "Email", type: "text", required: true, kind: "email", maxLength: 254, placeholder: "jane@example.com" },
      { name: "phone", label: "Phone Number", type: "text", required: true, kind: "phone", maxLength: 30, placeholder: "(555) 123-4567" },
      { name: "gender", label: "Gender", type: "text", maxLength: 40 },
      { name: "age", label: "Age", type: "text", numeric: true, maxLength: 3 },
      { name: "bloodType", label: "Blood Type", type: "radio", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Not sure"] },
      { name: "weightLbs", label: "Weight (in lbs)", hint: "Numbers only", type: "text", numeric: true, maxLength: 4 },
      { name: "height", label: "Height (in feet)", hint: "Examples: 4 FT 7, 5 FT 2, etc.", type: "text", maxLength: 20, placeholder: "5 FT 2" },
    ],
  },
  {
    title: "Purpose, Goals & Fears",
    fields: [
      { name: "purpose", label: "Purpose of Consultation", type: "textarea", required: true, maxLength: 2000, rows: 4 },
      { name: "goal1", label: "Your Top 3 Goals — Goal 1", type: "text", maxLength: 200 },
      { name: "goal2", label: "Goal 2", type: "text", maxLength: 200 },
      { name: "goal3", label: "Goal 3", type: "text", maxLength: 200 },
      { name: "fear1", label: "Your 3 Greatest Fears — Fear 1", type: "text", maxLength: 200 },
      { name: "fear2", label: "Fear 2", type: "text", maxLength: 200 },
      { name: "fear3", label: "Fear 3", type: "text", maxLength: 200 },
    ],
  },
  {
    title: "Health History",
    fields: [
      { name: "pregnant", label: "Are you pregnant?", type: "radio", options: ["Yes", "No", "Not applicable"] },
      { name: "pregnantDetails", label: "If yes, how far along and what high-risk factors do you have?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "chronicPain", label: "Do you experience chronic pain?", type: "radio", options: ["Yes", "No"] },
      { name: "chronicPainDetails", label: "If so, explain what makes it better.", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "orthopedicInjuries", label: "Have you had any orthopedic injuries? If so, explain.", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "healthHistory", label: "Tell us about your health history", hint: "Cancer, arthritis, joint replacements, strokes, etc.", type: "textarea", maxLength: 2000, rows: 5 },
      { name: "internalHardware", label: "Do you have any internal pins, wires, artificial joints or special equipment?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "dentalHistory", label: "Dental history?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "currentSymptoms", label: "What symptoms are you feeling?", type: "textarea", maxLength: 2000, rows: 4 },
      { name: "vaccinations", label: "Have you had a vaccination in the last three years? If so, please list the names.", type: "textarea", maxLength: 1000, rows: 3 },
    ],
  },
  {
    title: "Pelvic Area Symptoms",
    intro:
      "Please mark only the ones that bother you now or have in the past. Acute means it has just recently started; Severe means it has been an annoyance for a short while; Chronic means it has been annoying you for a long time.",
    fields: [
      pelvic("pelvicLowBackPain", "Low back pain"),
      pelvic("pelvicHipPain", "Hip pain"),
      pelvic("pelvicSwollenLegsFeet", "Swollen legs or feet"),
      pelvic("pelvicVaricoseVeins", "Varicose veins"),
      pelvic("pelvicBladderInfections", "Bladder infections"),
      pelvic("pelvicYeastInfections", "Yeast infections"),
      pelvic("pelvicToeFungus", "Toe fungus"),
      pelvic("pelvicEndometriosis", "Endometriosis"),
      pelvic("pelvicHemorrhoids", "Hemorrhoids"),
      pelvic("pelvicOvarianCysts", "Ovarian cysts"),
      pelvic("pelvicFibroids", "Fibroids"),
      pelvic("pelvicTumors", "Tumors"),
      pelvic("pelvicPainLovemaking", "Pain during or after lovemaking"),
      pelvic("pelvicLowLibido", "Low libido, loss of sex drive"),
      pelvic("pelvicHeavyPeriods", "Heavy periods"),
      pelvic("pelvicIrregularPeriods", "Irregular periods"),
      pelvic("pelvicPMS", "PMS"),
      pelvic("pelvicMenopause", "Menopause"),
      pelvic("pelvicLeakyGut", "Leaky gut"),
      pelvic("pelvicConstipation", "Constipation"),
      pelvic("pelvicStoolLeakage", "Stool leakage"),
      pelvic("pelvicIncontinence", "Incontinence"),
      pelvic("pelvicFrequentPee", "Frequent need to pee"),
      pelvic("pelvicHysterectomy", "Hysterectomy"),
      pelvic("pelvicCesarianSection", "Cesarian section"),
      pelvic("pelvicPostpartum", "Postpartum recovery"),
      pelvic("pelvicInfertility", "Infertility"),
      pelvic("pelvicVaginitis", "Vaginitis"),
      pelvic("pelvicVaginismus", "Vaginismus"),
      pelvic("pelvicVaginalDryness", "Vaginal dryness"),
      pelvic("pelvicOrganProlapse", "Pelvic organ prolapse"),
      pelvic("pelvicAreaPain", "Pain in the pelvic area"),
    ],
  },
  {
    title: "Relationships & Emotional Health",
    fields: [
      { name: "relationships", label: "Would you say your relationships are healthy?", hint: "With friends and others? With yourself? With family?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "emotionalAbuse", label: "Have you been emotionally abused?", type: "radio", options: ["Yes", "No", "Prefer not to say"] },
      { name: "physicalAbuse", label: "Have you been physically abused?", type: "radio", options: ["Yes", "No", "Prefer not to say"] },
      { name: "liveWith", label: "Who do you live with?", type: "text", maxLength: 200 },
    ],
  },
  {
    title: "Lifestyle & Environment",
    fields: [
      { name: "emfExposure", label: "What EMFs are you exposed to daily?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "screenHours", label: "How many hours per day do you interact with a TV, cellphone, computer or tablet?", type: "text", maxLength: 20 },
      { name: "junkFoods", label: "What junk foods/treats do you use?", hint: "Alcohol, cigarettes, snacks, etc.", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "moldExposure", label: "Are you or have you ever been exposed to mold?", type: "textarea", maxLength: 500, rows: 2 },
      { name: "heavyMetals", label: "Are you or have you ever been exposed to heavy metals?", type: "textarea", maxLength: 500, rows: 2 },
      { name: "organicFoods", label: "Do you eat organic foods?", type: "radio", options: ["Yes, mostly", "Sometimes", "Rarely or never"] },
      { name: "waterIntake", label: "How much water, and what kind, do you drink daily?", type: "textarea", maxLength: 500, rows: 2 },
      { name: "toxicHabits", label: "What are your negative/toxic habits?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "spareTime", label: "What do you do in your spare time?", type: "textarea", maxLength: 1000, rows: 3 },
      { name: "dailyRoutine", label: "Daily routine", hint: "In point form, list your daily routine from when you wake up until you go back to sleep. Include the bad habits you want to eliminate.", type: "textarea", maxLength: 3000, rows: 6 },
    ],
  },
  {
    title: "Digestion",
    intro: "Please pick the best options as best you can remember, using the past three days.",
    fields: [
      { name: "constipated", label: "Are you constipated?", type: "radio", options: FREQUENCY_OPTIONS },
      { name: "diarrhea", label: "Do you have diarrhea?", type: "radio", options: FREQUENCY_OPTIONS },
      { name: "stoolFormation", label: "Is it uneven formation? Is it hard or soft?", type: "text", maxLength: 300 },
      { name: "stoolDescription", label: "How would you best describe your stool?", type: "radio", options: ["Firm", "Cracked", "Smooth", "Loose", "Jagged"] },
      { name: "stoolLength", label: "How would you best describe its length?", hint: "Short clumps or long pieces", type: "text", maxLength: 100 },
      { name: "stoolThickness", label: "How would you best describe its thickness?", type: "radio", options: ["Thicker than normal", "Normal", "Very skinny"] },
      { name: "floatOrSink", label: "Does it float or does it sink?", type: "radio", options: ["Floats", "Sinks", "Varies"] },
      { name: "bubbles", label: "Does it have bubbles?", type: "radio", options: ["Big bubbles", "Small bubbles", "No bubbles"] },
      { name: "bloodMucus", label: "Does it contain blood or mucus?", type: "text", maxLength: 200 },
      { name: "strain", label: "Does it slide easy or do you have to strain?", type: "text", maxLength: 200 },
      { name: "movementsPerDay", label: "How many bowel movements do you have a day?", type: "text", maxLength: 20 },
      {
        name: "movementTimes",
        label: "What times of the day do you have bowel movements?",
        hint: "You can choose more than one",
        type: "checks",
        options: [
          "Early hours: 12am to 5am",
          "Early morning: 5am to 9am",
          "Mid-morning: 9am to 12pm",
          "After mid-day: 12pm to 4pm",
          "Early evenings: 4pm to 7pm",
          "Late evenings: 7pm to 10pm",
          "During the night: 10pm to 12am",
        ],
      },
    ],
  },
  {
    title: "Body Map & Anything Else",
    fields: [
      { name: "injuriesSurgeries", label: "List all injuries, surgeries, and pain points of the body", type: "textarea", maxLength: 2000, rows: 4 },
      { name: "adhesions", label: "Adhesions", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "fibroidAreas", label: "Fibroids", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "crystallization", label: "Crystallization", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "calcification", label: "Calcification", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "calcifiedTumors", label: "Calcified tumor", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "fattyTumors", label: "Fatty tumor", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "knots", label: "Knots", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "cysts", label: "Cysts", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "scars", label: "Scars", hint: "List all the parts of the body that may have these", type: "textarea", maxLength: 500, rows: 2 },
      { name: "anythingElse", label: "What else would you like to tell us?", hint: "Feel free to write whatever you want us to know about you!", type: "textarea", maxLength: 3000, rows: 5 },
    ],
  },
];

export type ConsultValues = Record<string, string | string[]>;

/** Builds a strict Zod schema from the step configuration. */
export function buildConsultSchema() {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const step of CONSULT_STEPS) {
    for (const f of step.fields) {
      if (f.type === "checks") {
        const opts = f.options as [string, ...string[]];
        shape[f.name] = z.array(z.enum(opts)).max(opts.length);
        continue;
      }
      if (f.type === "radio" || f.type === "matrix") {
        const opts = f.options as [string, ...string[]];
        shape[f.name] = z.union([z.enum(opts), z.literal("")]);
        continue;
      }
      if (f.kind === "email") {
        shape[f.name] = z
          .string()
          .trim()
          .email("Valid email is required")
          .max(f.maxLength ?? 254, `Must be ${f.maxLength ?? 254} characters or fewer`);
        continue;
      }
      if (f.kind === "phone") {
        shape[f.name] = z
          .string()
          .trim()
          .min(10, "Phone number is required")
          .max(f.maxLength ?? 30, `Must be ${f.maxLength ?? 30} characters or fewer`)
          .regex(/^[0-9()+\-.\s]+$/, "Phone number contains invalid characters");
        continue;
      }

      let s = z.string().trim().max(f.maxLength ?? 1000, `Must be ${f.maxLength ?? 1000} characters or fewer`);
      if (f.numeric) {
        shape[f.name] = f.required
          ? s.regex(/^[0-9]+$/, "Numbers only")
          : z.union([s.regex(/^[0-9]*$/, "Numbers only"), z.literal("")]);
        continue;
      }
      if (f.required) {
        shape[f.name] = s.min(f.type === "textarea" ? 5 : 2, "This field is required");
      } else {
        shape[f.name] = s;
      }
    }
  }

  return z.object(shape).strict();
}

/** Default (empty) values for every configured field. */
export function buildConsultDefaults(): ConsultValues {
  const defaults: ConsultValues = {};
  for (const step of CONSULT_STEPS) {
    for (const f of step.fields) {
      if (f.type === "checks") defaults[f.name] = [];
      else if (f.type === "matrix") defaults[f.name] = MATRIX_NONE;
      else defaults[f.name] = "";
    }
  }
  return defaults;
}

/** Names of required fields within a given step (for per-step validation). */
export function requiredFieldsForStep(stepIndex: number): string[] {
  return CONSULT_STEPS[stepIndex].fields.filter((f) => f.required || f.kind).map((f) => f.name);
}
