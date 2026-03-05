import FourG from './4G';

export const metadata = {
    title: "4G Lightweight PEVA Shower Liner | SustainAura",
    description: "Shop 4G lightweight PEVA shower liners made with 30% recycled materials. Waterproof, eco-friendly, and ideal for everyday home use.",
    openGraph: {
        title: "4G Lightweight PEVA Shower Liner | SustainAura",
        description: "Shop 4G lightweight PEVA shower liners made with 30% recycled materials. Waterproof, eco-friendly, and ideal for everyday home use.",
        url: 'https://sustainaura.eco/4G',
        siteName: 'SustainAura',
        images: [
            {
                url: '/4G-social.jpg',
                width: 1200,
                height: 630,
                alt: '4G Lightweight PEVA Shower Liner',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "4G Lightweight PEVA Shower Liner | SustainAura",
        description: "Shop 4G lightweight PEVA shower liners made with 30% recycled materials. Waterproof, eco-friendly, and ideal for everyday home use.",
        images: ['/4G-social.jpg'],
    },
    alternates: {
        canonical: 'https://sustainaura.eco/4G',
    },
};

export default function Page() {
    return <FourG />;
}
