import { siteConfig } from "@/site.config";

/** Sticky call CTA — mobile only */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-cream/95 p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex w-full items-center justify-center rounded-sm bg-mustard py-3.5 text-sm font-semibold tracking-wide text-ink shadow-sm"
      >
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
