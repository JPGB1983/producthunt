"use client";

import { motion } from "framer-motion";

const integrationDetails = [
  {
    name: "GitHub Actions",
    description:
      "Pipeline administrado con jobs para generar réplicas por rama, manejar secrets y comentar en Pull Requests.",
    code: `name: lovable-clone

on:
  push:
    branches:
      - main
      - staging
      - "preview/**"

jobs:
  generate:
    uses: lovable-dev/workflows/.github/workflows/replica.yml@v2`,
  },
  {
    name: "Supabase Edge",
    description:
      "Policies gestionadas automáticamente para compartir datasets entre equipos sin exponer datos sensibles.",
    code: `create policy "allow previews"
on schema public
for all
to authenticated
using (auth.role() = 'preview')
with check (auth.role() = 'preview');`,
  },
];

const badges = [
  "Review Apps automáticas",
  "Webhooks pull_request",
  "Anonimización PII",
  "Migraciones versionadas",
];

export const IntegrationsSection = () => {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-br from-black via-slate-950 to-slate-900 py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-36 w-36 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Integraciones nativas
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              GitHub + Supabase mejor juntos.
            </h2>
            <p className="text-base text-slate-300">
              lovable.dev instala una GitHub App en tu organización para sincronizar
              código, issues y secrets. Además provisiona Supabase con políticas RLS,
              Edge Functions y almacenamiento S3 compatibles con entornos de
              preproducción.
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/50 p-6 shadow-2xl shadow-emerald-500/20">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  OAuth GitHub
                </p>
                <p className="text-base font-semibold text-white">
                  Sesión iniciada
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                @lovable-dev
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p>• Selecciona repos y ramas a sincronizar.</p>
              <p>• Define qué tablas Supabase se clonan por ambiente.</p>
              <p>• Activa review apps para cada Pull Request.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {integrationDetails.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/30"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {integration.name}
                </h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                  Config auto
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                {integration.description}
              </p>
              <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/70 p-4 text-xs text-slate-200">
                {integration.code}
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
