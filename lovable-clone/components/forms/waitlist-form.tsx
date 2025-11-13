"use client";

import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

import type { WaitlistActionState } from "@/app/actions/register-waitlist";
import { registerWaitlist } from "@/app/actions/register-waitlist";

const initialState: WaitlistActionState = {
  success: false,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <>
          <span className="h-2 w-2 animate-ping rounded-full bg-white" />
          Enviando...
        </>
      ) : (
        <>
          Únete a la lista
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </>
      )}
    </button>
  );
};

export const WaitlistForm = () => {
  const [state, formAction] = useFormState(registerWaitlist, initialState);

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("waitlist-form") as HTMLFormElement;
      form?.reset();
    }
  }, [state.success]);

  return (
    <motion.form
      id="waitlist-form"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      action={formAction}
      className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl backdrop-saturate-150 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-200"
          >
            Correo corporativo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@empresa.com"
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-slate-200"
          >
            Empresa
          </label>
          <input
            id="company"
            name="company"
            placeholder="Lovable Inc."
            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="useCase" className="text-sm font-medium text-slate-200">
          ¿Qué construirías con lovable.dev?
        </label>
        <textarea
          id="useCase"
          name="useCase"
          rows={3}
          placeholder="Queremos generar clones de nuestros repos con datos reales para pruebas A/B…"
          className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <SubmitButton />
        <p className="text-xs text-slate-400">
          Al enviar aceptas recibir invitaciones privadas y novedades del
          producto. Cancelas cuando quieras.
        </p>
      </div>

      {state.error && !state.success ? (
        <p className="text-sm font-medium text-rose-300">{state.error}</p>
      ) : null}

      {state.success ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300"
        >
          ¡Listo! Te contactaremos en cuanto abramos nuevas invitaciones.
        </motion.p>
      ) : null}
    </motion.form>
  );
};
