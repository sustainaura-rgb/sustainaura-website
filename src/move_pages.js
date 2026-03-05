const fs = require('fs');
const path = require('path');

const srcPath = 'd:\\Sustainaura_next\\my-app\\src';

const moves = [
    { from: 'Shop.js', to: 'app/shop/Shop.jsx', pageDir: 'app/shop', oldImport: '../../Shop', newImport: './Shop' },
    { from: 'About2.js', to: 'app/about/About.jsx', pageDir: 'app/about', oldImport: '../../About2', newImport: './About' },
    { from: 'Contact.jsx', to: 'app/contact/Contact.jsx', pageDir: 'app/contact', oldImport: '../../Contact', newImport: './Contact' },
    { from: 'FAQ.jsx', to: 'app/faq/FAQ.jsx', pageDir: 'app/faq', oldImport: '../../FAQ', newImport: './FAQ' },
    { from: '4G.js', to: 'app/4G/4G.jsx', pageDir: 'app/4G', oldImport: '../../4G', newImport: './4G' },
    { from: '6G.js', to: 'app/6G/6G.jsx', pageDir: 'app/6G', oldImport: '../../6G', newImport: './6G' },
    { from: '8G.js', to: 'app/8G/8G.jsx', pageDir: 'app/8G', oldImport: '../../8G', newImport: './8G' },
    { from: 'Home.jsx', to: 'app/Home.jsx', pageDir: 'app', oldImport: '../Home', newImport: './Home' },
    { from: 'Home1.jsx', to: 'components/Home1.jsx', pageDir: null }
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
