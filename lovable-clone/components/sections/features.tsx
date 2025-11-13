"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

const features = [
  {
    title: "Dashboards gemelos",
    description:
      "Replica cada pantalla de tu app con componentes sincronizados y datasets realistas listos para demos o pruebas.",
    highlight: "UX calcada a producción",
    tone: "violet",
  },
  {
    title: "GitHub App administrada",
    description:
      "Instala la integración en tu organización para conectar pipelines, branch protection y ambientes de review.",
    highlight: "Secrets y webhooks automáticos",
    tone: "sky",
  },
  {
    title: "Supabase Data Studio",
    description:
      "Configura snapshots, anonimiza columnas sensibles y consulta logs desde un solo lugar.",
    highlight: "Plantillas SQL reutilizables",
    tone: "emerald",
  },
  {
    title: "Testing colaborativo",
    description:
      "Comparte enlaces con controles de expiración, feedback inline y grabaciones de sesiones.",
    highlight: "Modo QA sin fricción",
    tone: "fuchsia",
  },
];

const toneStyles: Record<string, string> = {
  violet: "from-fuchsia-500/30 via-violet-500/20 to-sky-500/10",
  sky: "from-sky-500/30 via-blue-500/20 to-indigo-500/10",
  emerald: "from-emerald-500/30 via-teal-500/20 to-sky-500/10",
  fuchsia: "from-pink-500/30 via-fuchsia-500/20 to-purple-500/10",
};

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-24 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-8 bottom-24 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            Características clave
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Todo lo que hace a lovable.dev tan adictivo.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Combina la velocidad de un constructor visual con la robustez de tu
            propio código. Conexión directa a GitHub y Supabase, sin hacks ni
            scripts manuales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-7 shadow-lg shadow-black/30"
            >
              <div
                className={clsx(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
                  toneStyles[feature.tone],
                )}
              />
              <div className="relative space-y-4">
                <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {feature.highlight}
                </span>
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-200">
                  {feature.description}
                </p>
                <button className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white">
                  Ver en acción
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/40 text-xs text-sky-300 transition group-hover:border-white group-hover:text-white">
                    →
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
