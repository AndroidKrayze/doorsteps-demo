import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t border-steel/10 bg-paper pb-24 pt-14 md:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="h-px w-16 bg-mustard mb-8" />
        <p className="font-display text-2xl text-graphite" style={{ fontWeight: 700 }}>
          {siteConfig.legalName}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-steel-mid">
          {siteConfig.address.line1}
          <br />
          {siteConfig.address.line2}
        </p>
        <p className="mt-3">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="text-sm font-semibold text-graphite hover:text-kraft-deep"
          >
            {siteConfig.phoneDisplay}
          </a>
        </p>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-light">
            Suggested domains
          </p>
          <ul className="mt-3 space-y-1 text-sm text-steel-mid">
            {siteConfig.suggestedDomains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
