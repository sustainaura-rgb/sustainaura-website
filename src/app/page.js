import Home from './Home';

// We can export metadata here if Home page needs specific metadata, 
// matching 'Default' logic from Server.js which is already in layout.js.
// But we should ensure the Home component works.

export default function Page() {
    return <Home />;
}
