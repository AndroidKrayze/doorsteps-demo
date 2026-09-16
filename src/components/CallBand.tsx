"use client";

import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function CallBand() {
  return (
    <section className="relative overflow-hidden bg-graphite py-16 text-paper sm:py-20">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-mustard/15 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
                Ring the counter
              </p>
              <h2
                className="mt-3 font-display text-3xl sm:text-4xl"
                style={{ fontWeight: 700 }}
              >
                Ready for lunch?
              </h2>
              <p className="mt-3 max-w-md text-rail/85">
                Call ahead for a large order or to check today’s specials and hours.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex shrink-0 rounded-full bg-mustard px-8 py-4 text-base font-semibold text-graphite shadow-[0_12px_36px_-14px_rgba(201,162,39,0.7)] transition hover:bg-mustard-hot"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
