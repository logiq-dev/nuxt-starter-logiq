import { getRequestIP, type H3Event } from "h3";

type TurnstileVerificationResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(event: H3Event, token: string) {
  const config = useRuntimeConfig();
  const secret = config.turnstileSecretKey;

  if (!secret) {
    throw new Error("Missing Turnstile configuration.");
  }

  const remoteip = getRequestIP(event, { xForwardedFor: true });

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip,
      idempotency_key: crypto.randomUUID(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Turnstile verification failed with status ${response.status}.`);
  }

  return response.json() as Promise<TurnstileVerificationResponse>;
}
