import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function CallBand() {
  return (
    <section className="bg-navy py-16 text-cream sm:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-brass to-transparent" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
            Ready for the counter?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-chalk/80">
            Ring ahead for a large order or to check today’s specials and hours.
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="mt-8 inline-flex rounded-sm bg-mustard px-8 py-4 text-base font-semibold text-ink shadow-[0_12px_36px_-14px_rgba(196,146,18,0.75)] transition hover:bg-mustard-soft"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
