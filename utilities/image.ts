
export function getStrapiImageUrl(url: string): string {
  return `${ process.env.NEXT_PUBLIC_BASE_URL }${ url }`;
}