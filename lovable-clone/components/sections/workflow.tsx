"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Conecta tu repositorio",
    description:
      "Inicia sesión con GitHub, selecciona la organización y define qué ramas deben generar réplicas.",
    detail:
      "lovable.dev crea webhooks y secrets en tu repo para disparar pipelines automáticos.",
  },
  {
    id: "02",
    title: "Provisiona Supabase",
    description:
      "Selecciona las tablas a clonar y define reglas de anonimización desde plantillas listas.",
    detail:
      "Cada entorno obtiene su base de datos aislada con políticas RLS y seeds reproducibles.",
  },
  {
    id: "03",
    title: "Despliega en minutos",
    description:
      "Genera un dashboard idéntico a producción con soporte para review apps y QA visual.",
    detail:
      "Sincroniza cambios con cualquier pipeline CI/CD. Usa previews para tests con datos reales.",
  },
];

export const WorkflowSection = () => {
  return (
    <section
      id="flow"
      className="relative overflow-hidden border-t border-white/5 bg-black/20 py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Workflow end-to-end
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            De repositorio a réplica lista en 3 pasos.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            lovable.dev automatiza todo el ciclo: desde configurar GitHub Actions
            hasta provisionar bases de datos Supabase y desplegar entornos
            aislados para producto, QA y ventas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-500/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-400">
                  Paso {step.id}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  {index === 0
                    ? "Onboarding"
                    : index === 1
                      ? "Data"
                      : "Launch"}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
              <p className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-slate-400">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
