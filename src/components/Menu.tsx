"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig, type MenuSection } from "@/site.config";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { assetPath } from "@/lib/paths";

function ItemRows({
  items,
}: {
  items: readonly { name: string; blurb: string }[];
}) {
  return (
    <Stagger className="divide-y divide-steel/10" stagger={0.035}>
      {items.map((item) => (
        <StaggerItem key={item.name}>
          <article className="editorial-row py-4 sm:py-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h5 className="font-display text-lg text-graphite sm:text-xl" style={{ fontWeight: 600 }}>
                {item.name}
              </h5>
              <span
                className="hidden flex-1 border-b border-dotted border-steel/25 sm:block"
                aria-hidden
              />
            </div>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-steel-mid">
              {item.blurb}
            </p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function SectionBody({ section }: { section: MenuSection }) {
  if ("groups" in section && section.groups) {
    return (
      <div className="space-y-10">
        {section.groups.map((group) => (
          <div key={group.title}>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-5 bg-mustard" />
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kraft-deep">
                {group.title}
              </h4>
            </div>
            <ItemRows items={group.items} />
          </div>
        ))}
        {"extras" in section && section.extras ? (
          <p className="rounded-xl border border-dashed border-kraft/40 bg-kraft/5 px-5 py-4 text-sm text-steel-mid">
            {section.extras}
          </p>
        ) : null}
      </div>
    );
  }

  if ("items" in section) {
    return <ItemRows items={section.items} />;
  }

  return null;
}

export function Menu() {
  const [activeId, setActiveId] = useState<(typeof siteConfig.menuSections)[number]["id"]>(siteConfig.menuSections[0].id);
  const reduce = useReducedMotion();
  const active =
    siteConfig.menuSections.find((s) => s.id === activeId) ??
    siteConfig.menuSections[0];

  return (
    <section id="menu" className="kraft-panel relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kraft-deep">
            The rail
          </p>
          <h2
            className="mt-3 max-w-2xl font-display text-3xl leading-tight text-graphite sm:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Editorial lunch list.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-mid sm:text-lg">
            Breakfast through baguettes, hot plates, and coffee — assembled at
            the counter on Blandford Street.{" "}
            <span className="font-medium text-graphite">{siteConfig.menuNote}</span>
          </p>
        </Reveal>

        {/* Horizontal category chips — NOT sticky twin nav */}
        <div className="mt-10 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {siteConfig.menuSections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveId(section.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    isActive ? "chip-active" : "chip-idle"
                  }`}
                  aria-pressed={isActive}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Split-screen: sticky food image + editorial list */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.id}
                className="overflow-hidden rounded-2xl"
                initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={reduce ? undefined : { clipPath: "inset(0 0 0 100%)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(active.image)}
                  alt={active.imageAlt}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                  width={800}
                  height={1000}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite/85 to-transparent px-5 pb-5 pt-16">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mustard">
                    {active.eyebrow}
                  </p>
                  <p className="mt-1 font-display text-2xl text-paper" style={{ fontWeight: 600 }}>
                    {active.label}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { x: 28, opacity: 0.4 }}
                animate={{ x: 0, opacity: 1 }}
                exit={reduce ? undefined : { x: -16, opacity: 0.3 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm leading-relaxed text-steel-mid">{active.intro}</p>
                <div className="mustard-rule mt-6 mb-2 w-24" />
                <SectionBody section={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
