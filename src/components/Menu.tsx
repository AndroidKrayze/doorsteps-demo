"use client";

import { siteConfig } from "@/site.config";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Menu() {
  return (
    <section id="menu" className="marble-wash relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            The board
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl leading-tight text-navy sm:text-5xl">
            A quiet luxury deli menu.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Decoded from the felt letter board at 48 Blandford Street — breakfast
            through baguettes, hot plates, and coffee.{" "}
            <span className="font-medium text-navy">{siteConfig.menuNote}</span>
          </p>
        </Reveal>

        {/* Desktop sticky section nav */}
        <div className="mt-10 hidden lg:block">
          <div className="sticky top-4 z-20 flex flex-wrap gap-2 rounded-sm border border-navy/10 bg-cream/90 p-2 shadow-sm backdrop-blur">
            {siteConfig.menuSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy/70 transition hover:bg-navy hover:text-cream"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-20">
          {siteConfig.menuSections.map((section, sIdx) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              <Reveal delay={0.02}>
                <div className="flex flex-col gap-3 border-b border-navy/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mustard">
                      {section.eyebrow}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-navy sm:text-3xl">
                      {section.label}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">
                      {section.intro}
                    </p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-brass">
                    Ask at the counter
                  </p>
                </div>
              </Reveal>

              {"groups" in section && section.groups ? (
                <div className="mt-8 space-y-12">
                  {section.groups.map((group, gIdx) => (
                    <div key={group.title}>
                      <Reveal delay={0.04}>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="h-px w-6 bg-brass/70" />
                          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/55">
                            {group.title}
                          </h4>
                        </div>
                      </Reveal>
                      <Stagger
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        stagger={0.04}
                      >
                        {group.items.map((item) => (
                          <StaggerItem key={item.name}>
                            <article className="menu-card paper-card h-full rounded-sm p-5 sm:p-6">
                              <h5 className="font-[family-name:var(--font-display)] text-lg text-navy">
                                {item.name}
                              </h5>
                              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                                {item.blurb}
                              </p>
                              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-steel">
                                Ask at the counter
                              </p>
                            </article>
                          </StaggerItem>
                        ))}
                      </Stagger>
                    </div>
                  ))}
                  {"extras" in section && section.extras ? (
                    <Reveal delay={0.06}>
                      <p className="rounded-sm border border-dashed border-brass/35 bg-cream/60 px-5 py-4 text-sm text-ink/65">
                        {section.extras}
                      </p>
                    </Reveal>
                  ) : null}
                </div>
              ) : (
                <Stagger
                  className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  stagger={0.045 + sIdx * 0.005}
                >
                  {"items" in section &&
                    section.items.map((item) => (
                      <StaggerItem key={item.name}>
                        <article className="menu-card paper-card h-full rounded-sm p-5 sm:p-6">
                          <h5 className="font-[family-name:var(--font-display)] text-lg text-navy">
                            {item.name}
                          </h5>
                          <p className="mt-2 text-sm leading-relaxed text-ink/65">
                            {item.blurb}
                          </p>
                          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-steel">
                            Ask at the counter
                          </p>
                        </article>
                      </StaggerItem>
                    ))}
                </Stagger>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
