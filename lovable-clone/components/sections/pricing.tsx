import { clsx } from "clsx";

const plans = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/mes",
    description: "Para squads pequeños que quieren probar clones privados.",
    perks: [
      "1 repositorio GitHub sincronizado",
      "2 entornos activos (staging + preview)",
      "Base de datos Supabase 500 MB",
      "Acceso a plantillas de dashboards",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$349",
    cadence: "/mes",
    description: "Ideal para scaleups con demos públicas y QA intensivo.",
    perks: [
      "Repos ilimitados dentro de una organización",
      "Ambientes dinámicos por Pull Request",
      "Supabase Pro + backups automáticos",
      "Soporte prioritario Slack",
    ],
    cta: "Solicitar acceso",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Integraciones enterprise, SSO, data residency y SLAs.",
    perks: [
      "SSO SAML y SCIM",
      "Reglas de aprobación personalizadas",
      "Infra gestionada en tu VPC",
      "Soporte 24/7 y acuerdos de NDA",
    ],
    cta: "Hablar con ventas",
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-36 w-[500px] -translate-x-1/2 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/10 to-sky-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Precios transparentes
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Escala de demos con tu equipo, sin sorpresas.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Todos los planes incluyen integración GitHub + Supabase, entornos
            aislados y herramientas de colaboración. Elige el paquete que mejor se
            adapta a tu etapa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                "flex h-full flex-col rounded-3xl border bg-slate-950/70 p-6 text-left shadow-lg shadow-black/30",
                plan.highlighted
                  ? "border-sky-400/60 ring-2 ring-sky-400/40"
                  : "border-white/10",
              )}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-slate-300">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">{plan.cadence}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  className={clsx(
                    "w-full rounded-full px-5 py-3 text-sm font-semibold transition",
                    plan.highlighted
                      ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50"
                      : "border border-white/20 text-slate-100 hover:border-white/60 hover:bg-white/10",
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
