import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Trust() {
  return (
    <section className="border-b border-navy/10 bg-cream py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-3">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
            Google
          </p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-4xl text-navy">
            {siteConfig.rating.value}
          </p>
          <p className="mt-1 text-sm text-ink/65">
            ~{siteConfig.rating.count} reviews · Blandford Street
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="rounded-sm border border-brass/30 bg-navy px-5 py-5 text-cream shadow-[0_12px_40px_-24px_rgba(28,43,74,0.55)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mustard">
              Food hygiene
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl">
              FHRS {siteConfig.hygiene.rating}
            </p>
            <p className="mt-1 text-sm text-chalk/75">
              {siteConfig.hygiene.label} · {siteConfig.hygiene.date}
            </p>
            <a
              href={siteConfig.hygiene.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-medium text-brass-soft underline decoration-brass/40 underline-offset-4 hover:decoration-mustard"
            >
              View on food.gov.uk
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
            On the street
          </p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-snug text-navy">
            Workday counter. Outdoor seats when the sun finds Blandford.
          </p>
          <p className="mt-2 text-sm text-ink/65">
            Takeaway · sit-in breakfast & lunch · cards welcome
          </p>
        </Reveal>
      </div>
    </section>
  );
}
