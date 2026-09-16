import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

export function SpecialtyBand() {
  return (
    <section className="blackboard relative overflow-hidden py-20 text-chalk sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brass/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
            Counter craft
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-cream sm:text-4xl">
            Felt board. Stainless rail. Kraft for the walk.
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
            Michael Faraday once lived at this address — quiet local lore beside
            the lunch queue.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-sm sm:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/doorsteps-coffee-ciabatta.jpg")}
                alt="Coffee and toasted sandwich at Doorsteps outdoor seating"
                className="aspect-[16/10] w-full object-cover"
                width={430}
                height={270}
              />
            </figure>
            <figure className="overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/doorsteps-counter-stools.jpg")}
                alt="Doorsteps interior counter stools and warm lantern light"
                className="aspect-[4/5] w-full object-cover"
                width={222}
                height={309}
              />
            </figure>
            <figure className="overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/assets/doorsteps-deli-case.jpg")}
                alt="Deli case with salads and jacket potatoes at Doorsteps"
                className="aspect-[4/5] w-full object-cover object-center"
                width={444}
                height={336}
              />
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
