import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import Chatbot from '../components/common/Chatbot';

export const metadata = {
  metadataBase: new URL('https://sustainaura.eco'),

  title: {
    default: 'SustainAura - Eco-Friendly Shower Liners',
    template: '%s | SustainAura',
  },

  description: 'Sustainability Starts At Home...',

  // ✅ TAB ICON / LOGO
  icons: {
    icon: '/SustainAura.png',        // Browser Tab Logo
    shortcut: '/SustainAura.png',
    apple: '/SustainAura.png',       // iPhone/iPad icon
  },

  // ✅ OPTIONAL: Better SEO
  openGraph: {
    title: 'SustainAura',
    description: 'Sustainability Starts At Home...',
    url: 'https://sustainaura.eco',
    siteName: 'SustainAura',
    images: ['/SustainAura.png'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/finalhero.webp" as="image" />
      </head>
      <body suppressHydrationWarning>
        <div className="App" suppressHydrationWarning>
          <ScrollToTop />
          <Chatbot />
          <Navbar />

          {children}

          <Footer />
        </div>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
