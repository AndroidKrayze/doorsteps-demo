"use client";

import { siteConfig } from "@/site.config";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="kraft-grain py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            From the queue
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
            What Blandford regulars say.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-sm border border-navy/10 bg-cream/80 px-5 py-4 sm:px-7">
            <div className="flex items-end gap-3">
              <span className="font-[family-name:var(--font-display)] text-5xl leading-none text-navy">
                {siteConfig.rating.value}
              </span>
              <div className="pb-1">
                <p className="text-sm font-semibold text-navy">
                  {siteConfig.rating.source} · ~{siteConfig.rating.count} reviews
                </p>
                <p className="text-xs text-ink/55">48 Blandford Street only</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-navy/10 sm:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mustard">
                Food hygiene
              </p>
              <p className="mt-1 text-sm font-medium text-navy">
                FHRS {siteConfig.hygiene.rating} · {siteConfig.hygiene.label}
              </p>
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.055}>
          {siteConfig.reviews.map((review) => (
            <StaggerItem key={review.quote}>
              <blockquote className="menu-card paper-card flex h-full flex-col rounded-sm p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mustard">
                  {review.theme}
                </p>
                <p className="mt-4 flex-1 font-[family-name:var(--font-display)] text-lg leading-relaxed text-navy">
                  “{review.quote}”
                </p>
                <footer className="mt-5 text-sm text-ink/55">
                  — {review.attribution}
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
