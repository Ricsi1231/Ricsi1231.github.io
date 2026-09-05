import type { ImageMetadata } from 'astro';

/**
 * Project images live in src/assets so Astro can process them — resizing to the
 * sizes actually displayed and converting to WebP. The data files still refer to
 * them by their old public-style path ('/images/foo.png'), so this resolves that
 * string to the processed asset.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
);

export function resolveImage(path: string): ImageMetadata {
  const key = `/src/assets/images/${path.replace(/^\/images\//, '')}`;
  const entry = files[key];
  if (!entry) {
    // Fail the build rather than ship a broken <img> to the deployed site.
    throw new Error(`resolveImage: no asset for "${path}" (looked for ${key})`);
  }
  return entry.default;
}
