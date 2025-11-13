import { WaitlistForm } from "@/components/forms/waitlist-form";

export const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-r from-slate-950 via-black to-slate-900 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-16 bottom-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Acceso anticipado
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Aplica a la beta privada y recibe tu clone workspace.
          </h2>
          <p className="text-base text-slate-300">
            Estamos abriendo cupos semanales para equipos con necesidad de demos
            personalizables y entornos de QA a medida. Cuéntanos cómo piensas usar
            lovable.dev y te contactaremos en breve.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Onboarding asistido con nuestro equipo.</li>
            <li>• Migración de dashboards existentes.</li>
            <li>• Workshop GitHub + Supabase incluido.</li>
          </ul>
        </div>

        <WaitlistForm />
      </div>
    </section>
  );
};
