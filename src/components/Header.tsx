"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-steel/10 bg-paper/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className={`font-display text-lg tracking-tight sm:text-xl ${
            solid ? "text-graphite" : "text-paper"
          }`}
          style={{ fontWeight: 700 }}
        >
          {siteConfig.name}
        </a>
        <nav
          className={`hidden items-center gap-8 text-sm font-medium md:flex ${
            solid ? "text-steel-mid" : "text-paper/85"
          }`}
        >
          <a
            href="#menu"
            className={`transition ${solid ? "hover:text-graphite" : "hover:text-mustard-hot"}`}
          >
            Menu
          </a>
          <a
            href="#counter"
            className={`transition ${solid ? "hover:text-graphite" : "hover:text-mustard-hot"}`}
          >
            Counter
          </a>
          <a
            href="#reviews"
            className={`transition ${solid ? "hover:text-graphite" : "hover:text-mustard-hot"}`}
          >
            Reviews
          </a>
          <a
            href="#visit"
            className={`transition ${solid ? "hover:text-graphite" : "hover:text-mustard-hot"}`}
          >
            Visit
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-full bg-mustard px-4 py-2 text-sm font-semibold text-graphite transition hover:bg-mustard-hot"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </nav>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="rounded-full bg-mustard px-3.5 py-2 text-sm font-semibold text-graphite md:hidden"
        >
          Call
        </a>
      </div>
      {/* Thin stainless rail under header when scrolled */}
      {solid ? (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-steel-light/50 to-transparent" />
      ) : null}
    </header>
  );
}
