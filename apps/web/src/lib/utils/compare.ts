export const COMPARE_STORAGE_KEY = 'career-finder:compare-careers';

export function readCompareSlugs(): string[] {
  if (typeof sessionStorage === 'undefined') {
    return [];
  }

  try {
    const value = sessionStorage.getItem(COMPARE_STORAGE_KEY);
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string').slice(0, 3)
      : [];
  } catch {
    return [];
  }
}

export function writeCompareSlugs(slugs: string[]) {
  if (typeof sessionStorage === 'undefined') {
    return;
  }

  sessionStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(slugs.slice(0, 3)));
}

export function toggleCompareSlug(slug: string): string[] {
  const current = readCompareSlugs();
  const next = current.includes(slug)
    ? current.filter((item) => item !== slug)
    : [...current, slug].slice(-3);

  writeCompareSlugs(next);
  return next;
}

export function clearCompareSlugs() {
  writeCompareSlugs([]);
}
