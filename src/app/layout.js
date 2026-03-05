import './globals.css';

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
      <body suppressHydrationWarning>
        <div className="App" suppressHydrationWarning>
          <ScrollToTop />
          <Chatbot />
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
