import AdminPage from './AdminPage';

export const metadata = {
    title: "Admin Dashboard | SustainAura",
    description: "SustainAura Admin Dashboard",
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return <AdminPage />;
}
