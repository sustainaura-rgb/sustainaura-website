import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function convertToWebp() {
    try {
        const files = fs.readdirSync(PUBLIC_DIR);
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            // Convert large JPG/PNG files (over 500KB) to webp
            // We'll just convert common ones that look large from earlier listing
            if ((ext === '.png' || ext === '.jpg' || ext === '.jpeg') &&
                (file.startsWith('4G') || file.startsWith('6G') || file.startsWith('8G') || file.startsWith('carousel') || file.includes('solid_white') || file.includes('image12') || file.includes('finalhero'))) {

                const filePath = path.join(PUBLIC_DIR, file);
                const newFilePath = path.join(PUBLIC_DIR, file.replace(ext, '.webp'));

                console.log(`Converting ${file} to WebP...`);
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(newFilePath);

                // Optional: Remove original to save space and force updating code usages
                // fs.unlinkSync(filePath);
            }
        }
        console.log('Conversion complete.');
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertToWebp();
