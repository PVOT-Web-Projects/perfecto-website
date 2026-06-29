// Prefixes public-folder asset paths with the configured base path so <img>
// src values resolve correctly on GitHub Pages sub-paths (and at a root
// custom domain when NEXT_PUBLIC_BASE_PATH is empty).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
