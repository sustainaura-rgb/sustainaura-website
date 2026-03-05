import SixG from './6G';

export const metadata = {
    title: "6G Premium PEVA Shower Liner | SustainAura",
    description: "Shop 6G premium shower liner. Durable, eco-friendly, and perfect for hotels or luxury bathrooms.",
    openGraph: {
        title: "6G Premium PEVA Shower Liner | SustainAura",
        description: "Shop 6G premium shower liner. Durable, eco-friendly, and perfect for hotels or luxury bathrooms.",
        url: 'https://sustainaura.eco/6G',
        siteName: 'SustainAura',
        images: [
            {
                url: '/6G-social.jpg',
                width: 1200,
                height: 630,
                alt: '6G Premium PEVA Shower Liner',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "6G Premium PEVA Shower Liner | SustainAura",
        description: "Shop 6G premium shower liner. Durable, eco-friendly, and perfect for hotels or luxury bathrooms.",
        images: ['/6G-social.jpg'],
    },
    alternates: {
        canonical: 'https://sustainaura.eco/6G',
    },
};

export default function Page() {
    return <SixG />;
}
