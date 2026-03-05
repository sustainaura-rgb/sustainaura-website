const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('d:/Sustainaura_next/my-app/src');
function walk(dir, fn) {
    fs.readdirSync(dir).forEach(file => {
        let full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) walk(full, fn);
        else if (full.endsWith('.js') || full.endsWith('.jsx')) fn(full);
    });
}

const mappings = {
    // Styles
    '\\./About\\.css': 'styles/About.css',
    '\\./App\\.css': 'styles/App.css',
    '\\./BenefitsSection\\.css': 'styles/BenefitsSection.css',
    '\\./Chatbot\\.css': 'styles/Chatbot.css',
    '\\./Contact\\.css': 'styles/Contact.css',
    '\\./FAQ\\.css': 'styles/FAQ.css',
    '\\./Footer\\.css': 'styles/Footer.css',
    '\\./Home1\\.css': 'styles/Home1.css',
    '\\./IdealFor\\.css': 'styles/IdealFor.css',
    '\\./MaintenanceCare\\.css': 'styles/MaintenanceCare.css',
    '\\./RealLifeGallery\\.css': 'styles/RealLifeGallery.css',
    '\\./ScrollToTop\\.css': 'styles/ScrollToTop.css',
    '\\./Third\\.css': 'styles/Third.css',
    '\\./aboutus\\.css': 'styles/aboutus.css',
    '\\./adminDashboard\\.css': 'styles/adminDashboard.css',
    '\\./allthree\\.css': 'styles/allthree.css',
    '\\./categories\\.css': 'styles/categories.css',
    '\\./floatingtags\\.css': 'styles/floatingtags.css',
    '\\./home-products\\.css': 'styles/home-products.css',
    '\\./index\\.css': 'styles/index.css',
    '\\./navbar\\.css': 'styles/navbar.css',
    '\\./products\\.css': 'styles/products.css',
    '\\./shop\\.css': 'styles/shop.css',
    '\\./sustainability\\.css': 'styles/sustainability.css',
    '\\./thickness\\.css': 'styles/thickness.css',

    // Layouts
    '\\./navbar': 'components/layout/Navbar',
    '\\.\\./navbar': 'components/layout/Navbar',
    '\\./navbar\\.js': 'components/layout/Navbar',
    '\\./Footer': 'components/layout/Footer',
    '\\.\\./Footer': 'components/layout/Footer',
    '\\./SEO': 'components/layout/SEO',
    '\\.\\./components/SEO': 'components/layout/SEO',

    // UI Common
    '\\./BenefitsSection': 'components/common/BenefitsSection',
    '\\./Chatbot': 'components/common/Chatbot',
    '\\./FloatingTags': 'components/common/FloatingTags',
    '\\./ProductTemplate': 'components/common/ProductTemplate',
    '\\.\\./ProductTemplate': 'components/common/ProductTemplate',
    '\\./RealLifeGallery': 'components/common/RealLifeGallery',
    '\\./categories': 'components/common/Categories',
    '\\./ScrollToTop': 'components/common/ScrollToTop',
    '\\./IdealFor': 'components/common/IdealFor',
    '\\./MaintenanceCare': 'components/common/MaintenanceCare',
    '\\./Sustainibility': 'components/common/Sustainibility',
    '\\./Thirdpart': 'components/common/Thirdpart',
    '\\./thickness': 'components/common/Thickness',
    '\\.\\./thickness': 'components/common/Thickness',

    // Pages
    '\\./Home1': 'components/Home1',
};

walk(srcDir, (file) => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    const fileDir = path.dirname(file);

    for (const [pattern, targetRelativePath] of Object.entries(mappings)) {
        const regex = new RegExp(`['"]${pattern}['"]`, 'g');
        const targetFullPath = path.join(srcDir, targetRelativePath);
        let relative = path.relative(fileDir, targetFullPath).replace(/\\\\/g, '/');
        if (!relative.startsWith('.') && !relative.startsWith('/')) {
            relative = './' + relative;
        }

        content = content.replace(regex, `'${relative}'`);
    }

    if (content !== originalContent) {
        console.log(`Updated imports in ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
