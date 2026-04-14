import { Resend } from "resend";

import type { ContactFormData } from "~~/shared/schemas/contact";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderPhone = (phone?: string) => (phone ? escapeHtml(phone) : "Non renseigné");

export async function sendContactEmail(payload: ContactFormData) {
  const config = useRuntimeConfig();
  const resendApiKey = config.resendApiKey;
  const from = config.contactFromEmail;
  const to = config.contactToEmail;

  if (!resendApiKey || !from || !to) {
    throw new Error("Missing Resend configuration.");
  }

  const resend = new Resend(resendApiKey);

  const safeName = escapeHtml(payload.fullName);
  const safeEmail = escapeHtml(payload.email);
  const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  return resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Nouveau message de ${payload.fullName}`,
    text: [
      "Nouveau message depuis le formulaire de contact",
      "",
      `Nom: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Téléphone: ${payload.phone || "Non renseigné"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;background:#f6f8fb;padding:24px;color:#111827;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:20px;padding:32px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#10b981;">
            Formulaire de contact
          </p>
          <h1 style="margin:0 0 24px;font-size:28px;line-height:1.1;color:#0f172a;">
            Nouveau message reçu
          </h1>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">Nom</td>
              <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">Téléphone</td>
              <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">${renderPhone(payload.phone)}</td>
            </tr>
          </table>
          <div style="border-radius:16px;background:#f8fafc;padding:20px;border:1px solid #e5e7eb;">
            <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">
              Message
            </p>
            <p style="margin:0;font-size:16px;line-height:1.7;color:#0f172a;">${safeMessage}</p>
          </div>
        </div>
      </div>
    `,
  });
}
