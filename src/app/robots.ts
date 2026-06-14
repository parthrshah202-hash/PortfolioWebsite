import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // TODO: Replace 'https://your-domain.com' with your actual production domain when deployed
  const baseUrl = 'https://your-domain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
