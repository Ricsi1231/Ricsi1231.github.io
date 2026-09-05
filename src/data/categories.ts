import type { Localized } from '../i18n/types';

/**
 * Project categories. The slug is the URL segment and is shared by both
 * languages, exactly like project slugs, so switching language on a filtered
 * page keeps the filter.
 */
export const CATEGORIES = [
  {
    slug: 'embedded-hardware',
    label: { en: 'Embedded & Hardware', hu: 'Beágyazott és hardver' },
  },
  {
    slug: 'robotics',
    label: { en: 'Robotics', hu: 'Robotika' },
  },
  {
    slug: 'industrial-automation',
    label: { en: 'Industrial Automation', hu: 'Ipari automatizálás' },
  },
  {
    slug: 'control-simulation',
    label: { en: 'Control & Simulation', hu: 'Szabályozás és szimuláció' },
  },
] as const satisfies readonly { slug: string; label: Localized<string> }[];

export type CategoryId = (typeof CATEGORIES)[number]['slug'];

/** Label for the unfiltered tab that shows everything. */
export const ALL_LABEL: Localized<string> = { en: 'All', hu: 'Összes' };

export function getCategory(slug: CategoryId) {
  return CATEGORIES.find((category) => category.slug === slug)!;
}
