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

walk(srcDir, (file) => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import ') && lines[i].includes('//')) {
            lines[i] = lines[i].replace(/\\/g, '/');
        }
    }
    content = lines.join('\n');

    if (content !== originalContent) {
        console.log(`Fixed backslashes in ${file}`);
        fs.writeFileSync(file, content, 'utf8');
    }
});
