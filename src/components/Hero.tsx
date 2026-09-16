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
      className="relative min-h-[100svh] overflow-hidden bg-graphite"
      aria-label="Hero"
    >
      {/* Split: left typography panel, right full-bleed food */}
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="relative z-10 steel-gradient" />
        <div className="relative hidden lg:block">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assetPath("/assets/doorsteps-coffee-ciabatta.jpg")})`,
            }}
            role="img"
            aria-label="Coffee and toasted sandwich at Doorsteps"
            initial={reduce ? false : { scale: 1.12, x: 24 }}
            animate={{ scale: 1.02, x: 0 }}
            transition={{ duration: 12, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-graphite/20 to-transparent" />
        </div>
      </div>

      {/* Mobile full-bleed food under wash */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{
          backgroundImage: `url(${assetPath("/assets/doorsteps-48-shopfront.jpg")})`,
        }}
        role="img"
        aria-label="Doorsteps shopfront at 48 Blandford Street"
        initial={reduce ? false : { scale: 1.1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 14, ease: "linear" }}
      />
      <div className="hero-steel-wash absolute inset-0 lg:hidden" />

      {/* Stainless rail accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-3 opacity-80 lg:left-1/2"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-rail via-steel-light to-kraft/40" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 sm:pb-32 lg:justify-center lg:pb-20">
        <HeroMotion className="max-w-xl lg:max-w-lg">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-mustard" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mustard">
              Marylebone · W1U
            </span>
          </div>

          <p
            className="font-display leading-[0.88] tracking-tight text-paper"
            style={{ fontSize: "clamp(3.5rem, 11vw, 6.5rem)", fontWeight: 800 }}
          >
            DOOR
            <br />
            STEPS
          </p>

          <h1 className="mt-6 max-w-md font-display text-xl leading-snug text-rail sm:text-2xl" style={{ fontWeight: 600 }}>
            {siteConfig.tagline}
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Full breakfast. Chicken escalope. Baguettes wrapped for the walk.
            Proper coffee on Blandford Street.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold tracking-wide text-graphite shadow-[0_12px_32px_-12px_rgba(201,162,39,0.65)] transition hover:bg-mustard-hot"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-paper/30 px-7 py-3.5 text-sm font-medium text-paper transition hover:border-mustard hover:text-mustard-hot"
            >
              Browse the menu
            </a>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}
