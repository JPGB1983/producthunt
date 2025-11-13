"use server";

import { z } from "zod";

import { createSupabaseServerClient } from "@/lib/supabase/server";

const waitlistSchema = z.object({
  email: z.string().email("Introduce un correo válido."),
  company: z
    .string()
    .trim()
    .max(120, "El nombre de la empresa es demasiado largo.")
    .optional(),
  useCase: z
    .string()
    .trim()
    .max(280, "Describe el caso de uso en 280 caracteres o menos.")
    .optional(),
});

export type WaitlistActionState = {
  success: boolean;
  error?: string;
};

export async function registerWaitlist(
  _prevState: WaitlistActionState | undefined,
  formData: FormData,
): Promise<WaitlistActionState> {
  const rawPayload = {
    email: formData.get("email"),
    company: formData.get("company"),
    useCase: formData.get("useCase"),
  };

  const result = waitlistSchema.safeParse(rawPayload);

  if (!result.success) {
    return {
      success: false,
      error: result.error.errors[0]?.message ?? "Revisa los datos enviados.",
    };
  }

  const supabase = await createSupabaseServerClient({ forceAdmin: true });

  const { error } = await supabase.from("waitlist_leads").insert({
    email: result.data.email.toLowerCase(),
    company: result.data.company ?? null,
    use_case: result.data.useCase ?? null,
    source: "lovable-clone",
  });

  if (error) {
    return {
      success: false,
      error:
        error.code === "23505"
          ? "Este correo ya está en la lista de espera."
          : error.message,
    };
  }

  return { success: true };
}
