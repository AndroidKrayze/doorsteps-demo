"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { HeroMotion } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assetPath("/assets/doorsteps-48-shopfront.jpg")})`,
        }}
        role="img"
        aria-label="Doorsteps Sandwich Bar shopfront at 48 Blandford Street, Marylebone"
        initial={reduce ? false : { scale: 1.1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 14, ease: "linear" }}
      />
      <div className="opacity-wash absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_12%,rgba(176,141,87,0.28),transparent_42%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:px-8 sm:pb-36">
        <HeroMotion>
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-chalk/25 bg-navy-deep/35 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-mustard" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-chalk/90">
              FHRS 5 · Google {siteConfig.rating.value}
            </span>
          </div>
          <p className="mb-4 font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-cream sm:text-7xl md:text-8xl">
            {siteConfig.name}
          </p>
          <h1 className="max-w-xl font-[family-name:var(--font-display)] text-2xl leading-snug text-chalk sm:text-3xl md:text-[2.55rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-chalk/90 sm:text-lg">
            Full breakfast. Chicken escalope. Kraft-wrapped baguettes. Proper
            coffee on Blandford Street.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-sm bg-mustard px-6 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-[0_10px_30px_-12px_rgba(196,146,18,0.7)] transition hover:bg-mustard-soft"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-sm border border-chalk/35 px-6 py-3.5 text-sm font-medium text-chalk transition hover:border-brass-soft hover:text-brass-soft"
            >
              View the menu
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm px-4 py-3.5 text-sm font-medium text-chalk/80 transition hover:text-mustard-soft"
            >
              Directions
            </a>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}
