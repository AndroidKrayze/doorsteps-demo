import { siteConfig } from "@/site.config";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg tracking-wide text-cream sm:text-xl"
        >
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-chalk/90 md:flex">
          <a href="#menu" className="transition hover:text-mustard-soft">
            Menu
          </a>
          <a href="#reviews" className="transition hover:text-mustard-soft">
            Reviews
          </a>
          <a href="#visit" className="transition hover:text-mustard-soft">
            Visit
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-sm bg-mustard px-4 py-2 text-ink transition hover:bg-mustard-soft"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </nav>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="rounded-sm bg-mustard px-3 py-2 text-sm font-semibold text-ink md:hidden"
        >
          Call
        </a>
      </div>
    </header>
  );
}
