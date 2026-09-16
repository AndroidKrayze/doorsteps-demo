"use client";

import { siteConfig } from "@/site.config";
import { CountUp, Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kraft-deep">
              From the queue
            </p>
            <h2
              className="mt-3 font-display text-3xl text-graphite sm:text-4xl"
              style={{ fontWeight: 700 }}
            >
              What Blandford regulars say.
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-end gap-4 rounded-2xl border border-steel/10 bg-paper-deep/60 px-6 py-5">
              <span
                className="font-display text-5xl leading-none text-graphite"
                style={{ fontWeight: 700 }}
              >
                <CountUp value={siteConfig.rating.value} decimals={1} />
              </span>
              <div className="pb-1">
                <p className="text-sm font-semibold text-graphite">
                  {siteConfig.rating.source} · ~{siteConfig.rating.count}
                </p>
                <p className="text-xs text-steel-mid">48 Blandford Street only</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Horizontal scroll magazine quotes — not paper-card grid twin */}
        <div className="mt-12 -mx-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <Stagger
            className="flex w-max gap-4 sm:grid sm:w-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
            stagger={0.05}
          >
            {siteConfig.reviews.map((review, i) => (
              <StaggerItem key={review.quote} className="w-[min(85vw,320px)] sm:w-auto">
                <blockquote className="flex h-full flex-col border-l-2 border-mustard bg-transparent pl-5 pr-2 py-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-kraft-deep">
                    {String(i + 1).padStart(2, "0")} · {review.theme}
                  </p>
                  <p
                    className="mt-4 flex-1 font-display text-lg leading-relaxed text-graphite"
                    style={{ fontWeight: 500 }}
                  >
                    “{review.quote}”
                  </p>
                  <footer className="mt-5 text-sm text-steel-mid">
                    — {review.attribution}
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
