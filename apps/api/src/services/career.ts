import { careers } from '../infrastructure/career-data/careers.js';

function toPublicCareer(career: (typeof careers)[number]) {
  return {
    id: career.id,
    slug: career.slug,
    name: career.name,
    category: career.category,
    overview: career.overview,
    education: career.education,
    activities: career.activities,
    relatedCareerIds: career.relatedCareerIds
  };
}

export function listCareers(search?: string, category?: string) {
  const normalizedSearch = search?.trim().toLowerCase();
  const normalizedCategory = category?.trim().toLowerCase();

  return careers.filter((career) => {
    const matchesSearch = !normalizedSearch || `${career.name} ${career.overview} ${career.category}`.toLowerCase().includes(normalizedSearch);
    const matchesCategory = !normalizedCategory || career.category.toLowerCase() === normalizedCategory;
    return matchesSearch && matchesCategory;
  }).map(toPublicCareer);
}

export function getCareerBySlug(slug: string) {
  const career = careers.find((item) => item.slug === slug);
  return career ? toPublicCareer(career) : null;
}
