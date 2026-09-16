/** Prefix public asset paths for GitHub Pages basePath. */
export function assetPath(path: string): string {
  const base = "/doorsteps-demo";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
