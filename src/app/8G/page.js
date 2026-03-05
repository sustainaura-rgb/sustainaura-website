import EightG from './8G';

export const metadata = {
    title: "8G Heavy Duty PEVA Shower Liner | SustainAura",
    description: "Shop 8G heavy-duty shower liner. Maximum durability, weighted magnets, and 30% recycled materials.",
    openGraph: {
        title: "8G Heavy Duty PEVA Shower Liner | SustainAura",
        description: "Shop 8G heavy-duty shower liner. Maximum durability, weighted magnets, and 30% recycled materials.",
        url: 'https://sustainaura.eco/8G',
        siteName: 'SustainAura',
        images: [
            {
                url: '/8G-social.jpg',
                width: 1200,
                height: 630,
                alt: '8G Heavy Duty PEVA Shower Liner',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "8G Heavy Duty PEVA Shower Liner | SustainAura",
        description: "Shop 8G heavy-duty shower liner. Maximum durability, weighted magnets, and 30% recycled materials.",
        images: ['/8G-social.jpg'],
    },
    alternates: {
        canonical: 'https://sustainaura.eco/8G',
    },
};

export default function Page() {
    return <EightG />;
}
