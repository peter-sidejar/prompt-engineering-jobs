export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function createJobUrl(company: string, title: string, id: string): string {
  const companySlug = slugify(company);
  const titleSlug = slugify(title);
  return `/jobs/${companySlug}/${titleSlug}/${id}`;
}

export function parseJobUrl(company: string, title: string, id: string) {
  return {
    company: decodeURIComponent(company),
    title: decodeURIComponent(title),
    id: decodeURIComponent(id)
  };
}