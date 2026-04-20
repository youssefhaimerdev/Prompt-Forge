import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://promptforge.ai'
  const now = new Date()
  return [
    { url: base,                                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/chatgpt-prompts-for-business`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/instagram-caption-prompts`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/midjourney-prompts-realistic`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/ai-prompts-for-marketing`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/coding-prompts`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/privacy-policy`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms-of-service`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
