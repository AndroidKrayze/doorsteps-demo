import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

export function SpecialtyBand() {
  return (
    <section className="blackboard relative overflow-hidden py-20 text-chalk sm:py-24">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-mustard/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            Blackboard &amp; counter
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-cream sm:text-4xl">
            Specials on the board. Stainless up front.
          </h2>
          <ul className="mt-8 space-y-4">
            {siteConfig.specialties.map((line) => (
              <li key={line} className="flex gap-3 text-chalk/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-md text-sm text-steel">
            Michael Faraday once lived at this address — local lore, not the
            lunch special.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/assets/doorsteps-interior.jpg")}
              alt="Doorsteps sandwich counter and kraft-wrapped baguettes"
              className="aspect-[16/10] w-full object-cover"
              width={680}
              height={383}
            />
            <figcaption className="mt-3 text-xs text-steel">
              The counter on Blandford Street
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
