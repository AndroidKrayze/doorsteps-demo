"use client";

import { siteConfig } from "@/site.config";
import { Reveal, SlideIn } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

export function SpecialtyBand() {
  return (
    <section id="counter" className="steel-gradient relative overflow-hidden py-20 text-paper sm:py-28">
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-mustard/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <SlideIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
            Counter craft
          </p>
          <h2
            className="mt-3 font-display text-3xl text-paper sm:text-4xl"
            style={{ fontWeight: 700 }}
          >
            Polished rail. Kraft for the walk.
          </h2>
          <ul className="mt-8 space-y-4">
            {siteConfig.specialties.map((line, i) => (
              <li key={line} className="flex gap-4 text-rail">
                <span className="font-display text-sm text-mustard" style={{ fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-md text-sm text-steel-light">
            Michael Faraday once lived at this address — quiet local lore beside
            the lunch queue.
          </p>
        </SlideIn>

        <Reveal delay={0.06}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <figure className="col-span-2 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/doorsteps-counter-stools.jpg")}
                alt="Doorsteps interior counter stools and warm lantern light"
                className="aspect-[16/9] w-full object-cover"
                width={800}
                height={450}
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/doorsteps-wood-seating.jpg")}
                alt="Wood seating inside Doorsteps Marylebone"
                className="aspect-[4/5] w-full object-cover"
                width={400}
                height={500}
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/doorsteps-awning-patio.jpg")}
                alt="Doorsteps awning and patio tables on Blandford Street"
                className="aspect-[4/5] w-full object-cover"
                width={400}
                height={500}
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
