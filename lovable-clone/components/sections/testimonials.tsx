"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "En dos semanas levantamos una demo 100% funcional para ventas. El equipo de producto adoptó lovable.dev como su sandbox oficial.",
    author: "Valentina Ruiz",
    role: "Head of Product · NovaPay",
    avatar: "VR",
  },
  {
    quote:
      "La integración con GitHub nos ahorró semanas de scripts. Cada pull request genera un entorno con datos Supabase limpios.",
    author: "Javier Martínez",
    role: "Staff Engineer · Kranio",
    avatar: "JM",
  },
  {
    quote:
      "Por fin podemos testear features complejas sin tocar producción. lovable.dev es la herramienta de QA que necesitábamos.",
    author: "Ariadna Torres",
    role: "QA Lead · OriGen AI",
    avatar: "AT",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black/30 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-10 bottom-6 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Historias reales
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Equipos que ya clonan productos con lovable.dev.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Desde scaleups hasta squads en corporativos: lovable.dev elimina la
            fricción para compartir interfaces reales con datos seguros.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/70 p-6"
            >
              <p className="text-sm text-slate-200">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  {testimonial.avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
