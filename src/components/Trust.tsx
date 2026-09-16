import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Trust() {
  return (
    <section className="kraft-grain border-b border-navy/10 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            Trusted on Blandford
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-3">
            <span className="font-[family-name:var(--font-display)] text-6xl leading-none text-navy sm:text-7xl">
              {siteConfig.rating.value}
            </span>
            <div className="pb-2">
              <p className="text-sm font-semibold text-navy">
                Google · ~{siteConfig.rating.count} reviews
              </p>
              <p className="text-sm text-ink/70">48 Blandford Street only</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-sm border border-navy/15 bg-cream/70 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
              Food hygiene
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-4xl text-navy">
              FHRS {siteConfig.hygiene.rating}
            </p>
            <p className="mt-2 text-sm text-ink/75">
              Rated {siteConfig.hygiene.date}.{" "}
              <a
                href={siteConfig.hygiene.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy underline decoration-mustard/60 underline-offset-4 hover:decoration-mustard"
              >
                View on food.gov.uk
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
