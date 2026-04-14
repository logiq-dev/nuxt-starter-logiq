import { createError, defineEventHandler, readBody } from "h3";

import type { ContactFieldErrors } from "~~/shared/schemas/contact";
import { contactSubmissionSchema } from "~~/shared/schemas/contact";
import { sendContactEmail } from "../services/mailer";
import { verifyTurnstileToken } from "../services/turnstile";

const getFieldErrors = (fieldErrors: Record<string, string[] | undefined>): ContactFieldErrors =>
  Object.fromEntries(
    Object.entries(fieldErrors)
      .filter(([, messages]) => messages?.[0])
      .map(([field, messages]) => [field, messages?.[0] as string]),
  ) as ContactFieldErrors;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const parsed = contactSubmissionSchema.safeParse(body);

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: {
        fieldErrors: getFieldErrors(parsed.error.flatten().fieldErrors),
      },
    });
  }

  try {
    const { turnstileToken, ...contactData } = parsed.data;
    const turnstileResult = await verifyTurnstileToken(event, turnstileToken);

    if (!turnstileResult.success) {
      throw createError({
        statusCode: 400,
        statusMessage: "Turnstile failed",
        data: {
          fieldErrors: {
            turnstileToken: "La vérification anti-spam a échoué. Merci de réessayer.",
          },
          message: "La vérification anti-spam a échoué. Merci de réessayer.",
        },
      });
    }

    await sendContactEmail(contactData);

    return {
      ok: true,
      message: "Votre message a bien été envoyé.",
    };
  }
  catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Unable to send message",
      cause: error,
      data: {
        message: "Une erreur est survenue pendant l'envoi. Merci de réessayer.",
      },
    });
  }
});
