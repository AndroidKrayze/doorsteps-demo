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
          backgroundImage: `url(${assetPath("/assets/blandford-street-facade.jpg")})`,
        }}
        role="img"
        aria-label="Blandford Street shopfronts including Doorsteps at 48, Marylebone"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 12, ease: "linear" }}
      />
      <div className="opacity-wash absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(212,160,23,0.22),transparent_42%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:px-8 sm:pb-36">
        <HeroMotion>
          <p className="mb-5 font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-cream sm:text-7xl md:text-8xl">
            {siteConfig.name}
          </p>
          <h1 className="max-w-xl font-[family-name:var(--font-display)] text-2xl leading-snug text-chalk sm:text-3xl md:text-[2.5rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-chalk/90 sm:text-lg">
            Baguettes before the office. Blackboard specials. Proper coffee.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-sm bg-mustard px-6 py-3.5 text-sm font-semibold tracking-wide text-ink transition hover:bg-mustard-soft"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-chalk/35 px-6 py-3.5 text-sm font-medium text-chalk transition hover:border-mustard hover:text-mustard-soft"
            >
              Get directions
            </a>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}
