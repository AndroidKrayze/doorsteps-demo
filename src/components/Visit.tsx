import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

export function Visit() {
  return (
    <section id="visit" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Visit
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
            48 Blandford Street
          </h2>
          <p className="mt-3 text-ink/75">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </p>

          <div className="mt-8 space-y-3 rounded-sm border border-navy/10 bg-marble p-5">
            {siteConfig.hours.summary.map((row) => (
              <div
                key={row.days}
                className="flex max-w-sm justify-between border-b border-navy/10 py-2 text-sm last:border-0"
              >
                <span className="font-medium text-navy">{row.days}</span>
                <span className="text-ink/70">{row.time}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-md text-sm text-ink/60">{siteConfig.hours.note}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-cream transition hover:bg-navy-deep"
            >
              Open in Google Maps
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex rounded-sm border border-brass/40 px-5 py-3 text-sm font-semibold text-navy transition hover:border-mustard hover:text-mustard"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <figure className="overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/assets/blandford-street-view.jpg")}
              alt="Looking along Blandford Street, Marylebone"
              className="aspect-[5/3] w-full object-cover"
              width={1600}
              height={1200}
            />
          </figure>
          <figure className="overflow-hidden rounded-sm sm:max-w-xs lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/assets/faraday-plaque.jpg")}
              alt="Michael Faraday plaque at 48 Blandford Street"
              className="aspect-[3/4] w-full max-h-72 object-cover object-center sm:max-h-56 lg:max-h-64"
              width={900}
              height={1200}
            />
            <figcaption className="mt-2 text-xs text-ink/55">
              Faraday plaque at No. 48 — building context only
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
