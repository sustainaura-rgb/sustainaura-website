import AboutUsPremium from './About';

export const metadata = {
  // ✅ PAGE TITLE (GOOGLE + TAB)
  title: 'About Us | SustainAura',

  // ✅ META DESCRIPTION (GOOGLE PREVIEW)
  description:
    'Learn about our journey to sustainable living. SustainAura provides eco-friendly home essentials like PEVA shower liners.',

  // ✅ KEYWORDS (HELPFUL FOR SEO)
  keywords: [
    'SustainAura',
    'about SustainAura',
    'eco friendly products',
    'sustainable living',
    'PEVA shower liners',
    'green home essentials',
    'plastic free bathroom',
  ],

  // ✅ GOOGLE INDEXING
  robots: {
    index: true,
    follow: true,
  },

  // ✅ CANONICAL URL (PREVENTS DUPLICATE CONTENT)
  alternates: {
    canonical: 'https://sustainaura.eco/about',
  },

  // ✅ AUTHOR / BRAND
  authors: [
    {
      name: 'SustainAura',
      url: 'https://sustainaura.eco',
    },
  ],

  // ✅ CONTENT CATEGORY
  category: 'Sustainability',

  // ✅ SOCIAL PREVIEW (FACEBOOK / WHATSAPP / LINKEDIN)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sustainaura.eco/about',
    siteName: 'SustainAura',

    title: 'About SustainAura',
    description:
      'Discover our journey toward sustainable and eco-conscious living.',

    images: [
      {
        url: '/earth.png', // in /public
        width: 1200,
        height: 630,
        alt: 'About SustainAura - Sustainable Living',
      },
    ],
  },

  // ✅ TWITTER / X PREVIEW
  twitter: {
    card: 'summary_large_image',
    site: '@SustainAura', // optional (remove if not registered)
    title: 'About SustainAura',
    description:
      'Discover our journey toward sustainable and eco-conscious living.',
    images: ['/earth.png'],
  },
};

export default function Page() {
  return <AboutUsPremium />;
}
