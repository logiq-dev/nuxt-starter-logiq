import { z } from "zod";

const optionalPhoneSchema = z.preprocess(
  (value) => {
    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  },
  z
    .string()
    .min(6, "Le téléphone doit contenir au moins 6 caractères.")
    .max(30, "Le téléphone est trop long.")
    .regex(/^[+0-9()./\-\s]+$/, "Le format du téléphone est invalide.")
    .optional(),
);

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Le nom complet est requis.")
    .max(80, "Le nom complet est trop long."),
  email: z
    .string()
    .trim()
    .email("Veuillez entrer une adresse email valide.")
    .max(120, "L'adresse email est trop longue."),
  phone: optionalPhoneSchema,
  message: z
    .string()
    .trim()
    .min(20, "Le message doit contenir au moins 20 caractères.")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères."),
});

export const contactSubmissionSchema = contactSchema.extend({
  turnstileToken: z
    .string()
    .trim()
    .min(1, "La vérification anti-spam est requise."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ContactSubmissionData = z.infer<typeof contactSubmissionSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactSubmissionData, string>>;
