"use client";

import { siteConfig } from "@/site.config";
import { CountUp, SlideIn } from "@/components/Reveal";

export function Trust() {
  return (
    <section className="border-b border-steel/10 bg-paper py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3 sm:px-8">
        <SlideIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kraft-deep">
            Google
          </p>
          <p className="mt-2 font-display text-5xl text-graphite" style={{ fontWeight: 700 }}>
            <CountUp value={siteConfig.rating.value} decimals={1} />
          </p>
          <p className="mt-1 text-sm text-steel-mid">
            ~{siteConfig.rating.count} reviews · Blandford Street
          </p>
        </SlideIn>

        <SlideIn delay={0.08}>
          <div className="rounded-2xl steel-gradient px-5 py-5 text-paper shadow-[0_16px_40px_-20px_rgba(22,24,26,0.5)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mustard">
              Food hygiene
            </p>
            <p className="mt-2 font-display text-3xl" style={{ fontWeight: 700 }}>
              FHRS{" "}
              <CountUp value={5} decimals={0} />
              /5
            </p>
            <p className="mt-1 text-sm text-rail/80">
              {siteConfig.hygiene.label} · {siteConfig.hygiene.date}
            </p>
            <a
              href={siteConfig.hygiene.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-medium text-mustard underline decoration-mustard/40 underline-offset-4 hover:decoration-mustard"
            >
              View on food.gov.uk
            </a>
          </div>
        </SlideIn>

        <SlideIn delay={0.14}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kraft-deep">
            On the street
          </p>
          <p className="mt-2 font-display text-2xl leading-snug text-graphite" style={{ fontWeight: 600 }}>
            Workday counter. Outdoor seats when the sun finds Blandford.
          </p>
          <p className="mt-2 text-sm text-steel-mid">
            Takeaway · sit-in breakfast & lunch · cards welcome
          </p>
        </SlideIn>
      </div>
    </section>
  );
}
