import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream pb-24 pt-14 md:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-[family-name:var(--font-display)] text-2xl text-navy">
          {siteConfig.legalName}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          {siteConfig.address.line1}
          <br />
          {siteConfig.address.line2}
        </p>
        <p className="mt-3">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="text-sm font-semibold text-navy hover:text-mustard"
          >
            {siteConfig.phoneDisplay}
          </a>
        </p>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
            Suggested domains
          </p>
          <ul className="mt-3 space-y-1 text-sm text-ink/70">
            {siteConfig.suggestedDomains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
