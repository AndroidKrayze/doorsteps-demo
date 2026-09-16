"use client";

import { siteConfig } from "@/site.config";
import { Reveal, SlideIn } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

export function Visit() {
  return (
    <section id="visit" className="kraft-panel py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <SlideIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kraft-deep">
            Visit
          </p>
          <h2
            className="mt-3 font-display text-3xl text-graphite sm:text-4xl"
            style={{ fontWeight: 700 }}
          >
            48 Blandford Street
          </h2>
          <p className="mt-3 text-steel-mid">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-steel/10 bg-paper">
            {siteConfig.hours.summary.map((row) => (
              <div
                key={row.days}
                className="flex justify-between border-b border-steel/10 px-5 py-3.5 text-sm last:border-0"
              >
                <span className="font-medium text-graphite">{row.days}</span>
                <span className="text-steel-mid">{row.time}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-md text-sm text-steel-mid">{siteConfig.hours.note}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-paper transition hover:bg-steel"
            >
              Open in Google Maps
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex rounded-full border border-kraft/50 px-6 py-3 text-sm font-semibold text-graphite transition hover:border-mustard hover:text-kraft-deep"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </SlideIn>

        <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <figure className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/assets/blandford-street-view.jpg")}
              alt="Looking along Blandford Street, Marylebone"
              className="aspect-[5/3] w-full object-cover"
              width={1600}
              height={1200}
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl sm:max-w-xs lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath("/assets/faraday-plaque.jpg")}
              alt="Michael Faraday plaque at 48 Blandford Street"
              className="aspect-[3/4] w-full max-h-72 object-cover object-center sm:max-h-56 lg:max-h-64"
              width={900}
              height={1200}
            />
            <figcaption className="mt-2 text-xs text-steel-mid">
              Faraday plaque at No. 48 — building context only
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
