import Shop from './Shop';

export const metadata = {
  // ✅ TITLE (TAB + GOOGLE)
  title: 'Shop Eco-Friendly Products | SustainAura',

  // ✅ DESCRIPTION (GOOGLE PREVIEW)
  description:
    'Shop premium eco-friendly shower liners and sustainable home products at SustainAura. Discover essential, premium, and heavy-duty collections.',

  // ✅ KEYWORDS
  keywords: [
    'SustainAura shop',
    'eco friendly shower liners',
    'sustainable bathroom products',
    'PEVA shower curtains',
    'green home essentials',
    'plastic free bathroom',
    'premium shower liners',
  ],

  // ✅ GOOGLE INDEXING
  robots: {
    index: true,
    follow: true,
  },

  // ✅ CANONICAL URL
  alternates: {
    canonical: 'https://sustainaura.eco/shop',
  },

  // ✅ AUTHOR
  authors: [
    {
      name: 'SustainAura',
      url: 'https://sustainaura.eco',
    },
  ],

  // ✅ CATEGORY
  category: 'Ecommerce',

  // ✅ SOCIAL PREVIEW
  openGraph: {
    type: 'website',
    url: 'https://sustainaura.eco/shop',
    siteName: 'SustainAura',

    title: 'Shop at SustainAura',
    description:
      'Explore premium eco-friendly shower liners and sustainable home essentials.',

    images: [
      {
        url: '/4G-Frosty.jpg',
        width: 1200,
        height: 630,
        alt: 'Shop SustainAura Eco Products',
      },
    ],
  },

  // ✅ TWITTER
  twitter: {
    card: 'summary_large_image',
    title: 'Shop at SustainAura',
    description:
      'Explore premium eco-friendly shower liners and sustainable home essentials.',
    images: ['/4G-Frosty.jpg'],
  },
};

export default function Page() {
  return <Shop />;
}
