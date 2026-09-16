import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function BaguetteRail() {
  return (
    <section id="baguettes" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            The rail
          </p>
          <h2 className="mt-3 max-w-lg font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
            Stacked baguettes for the workday.
          </h2>
          <p className="mt-3 max-w-xl text-ink/75">
            Kraft-wrapped and ready before the office — the classics that keep
            Marylebone moving.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.baguettes.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05} className="bg-cream p-6 sm:p-7">
              <p className="font-[family-name:var(--font-display)] text-xl text-navy">
                {item.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
