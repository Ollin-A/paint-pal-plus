import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.paintpalplus.com';
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/painting`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${base}/legal`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
