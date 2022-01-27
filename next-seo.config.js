/**
 * @type {import('next-seo').DefaultSeoProps}
 * @see https://github.com/garmeeh/next-seo#readme
 */
module.exports = {
  defaultTitle: `CollAction | Sustainable choices made easy`,
  description: `Do you want to make the world a better place? Do your actions feel like a drop in the ocean? Join our CrowdActions and see how much impact we can make together.`,
  openGraph: {
    type: 'website',
    site_name: 'CollAction',
    images: [
      {
        url: 'https://www.collaction.org/logo-green-large.png',
        alt: 'CollAction Logo',
        type: 'image/png',
        width: 640,
        height: 336,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#2EB494',
    },
  ],
};
