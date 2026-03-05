import Contact from './Contact';

export const metadata = {
  // ✅ PAGE TITLE (TAB + GOOGLE)
  title: 'Contact Us | SustainAura',

  // ✅ META DESCRIPTION (SEARCH PREVIEW)
  description:
    'Get in touch with SustainAura for wholesale inquiries, or questions about our eco-friendly products.',

  // ✅ SEO KEYWORDS
  keywords: [
    'contact SustainAura',
    'eco friendly products support',
    'sustainable brand contact',
    'wholesale eco products',
    'custom branding SustainAura',
    'green home essentials',
  ],

  // ✅ GOOGLE INDEXING
  robots: {
    index: true,
    follow: true,
  },

  // ✅ CANONICAL URL
  alternates: {
    canonical: 'https://sustainaura.eco/contact',
  },

  // ✅ BRAND AUTHORSHIP
  authors: [
    {
      name: 'SustainAura',
      url: 'https://sustainaura.eco',
    },
  ],

  // ✅ CONTENT CATEGORY
  category: 'Customer Support',

  // ✅ SOCIAL PREVIEW (FACEBOOK / WHATSAPP / LINKEDIN)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sustainaura.eco/contact',
    siteName: 'SustainAura',

    title: 'Contact SustainAura',
    description:
      'Reach out to SustainAura for branding, wholesale, and eco-friendly product support.',

    images: [
      {
        url: '/SustainAura.png', // must be in /public
        width: 1200,
        height: 630,
        alt: 'Contact SustainAura - Eco Friendly Support',
      },
    ],
  },

  // ✅ TWITTER / X PREVIEW
  twitter: {
    card: 'summary_large_image',
    site: '@SustainAura', // remove if not used
    title: 'Contact SustainAura',
    description:
      'Reach out to SustainAura for  branding, wholesale, and eco-friendly product support.',
    images: ['/SustainAura.png'],
  },
};

export default function Page() {
  return <Contact />;
}
