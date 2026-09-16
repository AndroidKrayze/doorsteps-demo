import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Reviews() {
  return (
    <section className="kraft-grain py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            From the queue
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-navy sm:text-4xl">
            What regulars say.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {siteConfig.reviews.map((review, i) => (
            <Reveal key={review.quote} delay={i * 0.06}>
              <blockquote className="h-full border-l-2 border-mustard pl-5">
                <p className="font-[family-name:var(--font-display)] text-lg leading-relaxed text-navy">
                  “{review.quote}”
                </p>
                <footer className="mt-4 text-sm text-ink/60">
                  — {review.attribution}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
