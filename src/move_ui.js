const fs = require('fs');
const path = require('path');

const srcPath = 'd:\\Sustainaura_next\\my-app\\src';

const moves = [
    // Admin pages
    { from: 'AdminPage.jsx', to: 'app/admin/AdminPage.jsx', pageDir: 'app/admin', oldImport: '../../AdminPage', newImport: './AdminPage' },
    { from: 'AdminDashboard.jsx', to: 'app/admin/AdminDashboard.jsx' },
    { from: 'AdminLogin.jsx', to: 'app/admin/AdminLogin.jsx' },

    // Layouts
    { from: 'navbar.js', to: 'components/layout/Navbar.jsx' },
    { from: 'Footer.js', to: 'components/layout/Footer.jsx' },
    { from: 'components/SEO.js', to: 'components/layout/SEO.jsx' },

    // UI Components
    { from: 'BenefitsSection.jsx', to: 'components/common/BenefitsSection.jsx' },
    { from: 'Chatbot.jsx', to: 'components/common/Chatbot.jsx' },
    { from: 'FloatingTags.jsx', to: 'components/common/FloatingTags.jsx' },
    { from: 'ProductTemplate.jsx', to: 'components/common/ProductTemplate.jsx' },
    { from: 'RealLifeGallery.jsx', to: 'components/common/RealLifeGallery.jsx' },
    { from: 'categories.jsx', to: 'components/common/Categories.jsx' },
    { from: 'ScrollToTop.jsx', to: 'components/common/ScrollToTop.jsx' },
    { from: 'IdealFor.jsx', to: 'components/common/IdealFor.jsx' },
    { from: 'MaintenanceCare.jsx', to: 'components/common/MaintenanceCare.jsx' },
    { from: 'Sustainibility.jsx', to: 'components/common/Sustainibility.jsx' },
    { from: 'Thirdpart.jsx', to: 'components/common/Thirdpart.jsx' },
    { from: 'thickness.js', to: 'components/common/Thickness.jsx' },

    // Other logic
    { from: 'createadmin.js', to: 'lib/createadmin.js' },

    // Styles
    { from: 'About.css', to: 'styles/About.css' },
    { from: 'App.css', to: 'styles/App.css' },
    { from: 'BenefitsSection.css', to: 'styles/BenefitsSection.css' },
    { from: 'Chatbot.css', to: 'styles/Chatbot.css' },
    { from: 'Contact.css', to: 'styles/Contact.css' },
    { from: 'FAQ.css', to: 'styles/FAQ.css' },
    { from: 'Footer.css', to: 'styles/Footer.css' },
    { from: 'Home1.css', to: 'styles/Home1.css' },
    { from: 'IdealFor.css', to: 'styles/IdealFor.css' },
    { from: 'MaintenanceCare.css', to: 'styles/MaintenanceCare.css' },
    { from: 'RealLifeGallery.css', to: 'styles/RealLifeGallery.css' },
    { from: 'ScrollToTop.css', to: 'styles/ScrollToTop.css' },
    { from: 'Third.css', to: 'styles/Third.css' },
    { from: 'aboutus.css', to: 'styles/aboutus.css' },
    { from: 'adminDashboard.css', to: 'styles/adminDashboard.css' },
    { from: 'allthree.css', to: 'styles/allthree.css' },
    { from: 'categories.css', to: 'styles/categories.css' },
    { from: 'floatingtags.css', to: 'styles/floatingtags.css' },
    { from: 'home-products.css', to: 'styles/home-products.css' },
    { from: 'index.css', to: 'styles/index.css' },
    { from: 'navbar.css', to: 'styles/navbar.css' },
    { from: 'products.css', to: 'styles/products.css' },
    { from: 'shop.css', to: 'styles/shop.css' },
    { from: 'sustainability.css', to: 'styles/sustainability.css' },
    { from: 'thickness.css', to: 'styles/thickness.css' },
];

moves.forEach(({ from, to, pageDir, oldImport, newImport }) => {
    const fromPath = path.join(srcPath, from);
    const toPath = path.join(srcPath, to);

    if (fs.existsSync(fromPath)) {
        console.log(`Moving ${fromPath} to ${toPath}`);
        fs.renameSync(fromPath, toPath);
    } else {
        console.log(`Warning: ${fromPath} not found`);
    }

    if (pageDir) {
        const pagePath = path.join(srcPath, pageDir, 'page.js');
        if (fs.existsSync(pagePath)) {
            let content = fs.readFileSync(pagePath, 'utf8');
            content = content.replace(oldImport, newImport);
            fs.writeFileSync(pagePath, content, 'utf8');
            console.log(`Updated import in ${pagePath}`);
        } else {
            console.log(`Warning: ${pagePath} not found`);
        }
    }
});
