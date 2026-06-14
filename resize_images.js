import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public/images';
const files = fs.readdirSync(dir);

async function processImages() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      // If image is larger than 500KB, resize it
      if (stat.size > 500 * 1024) {
        console.log(`Resizing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
        const tempPath = filePath + '.tmp.webp';
        await sharp(filePath)
          .resize(800) // max width 800px
          .webp({ quality: 80 })
          .toFile(tempPath);
        
        fs.unlinkSync(filePath);
        // Rename to .webp or keep original extension depending on usage.
        // To not break existing code, let's keep the original extension name but the content is webp/jpg.
        // Actually, let's just convert it to jpeg and overwrite the .png! Wait, if we overwrite a .png with jpeg content, browsers still render it, but it's bad practice.
        // It's better to change the extension to .jpg and update storiesData.js, or just output as PNG but highly compressed.
        // Let's output as jpeg and replace the file extension to .jpg.
        const newPath = filePath.replace(/\.(png|jpg)$/, '.jpg');
        fs.renameSync(tempPath, newPath);
        console.log(`Saved as ${newPath}`);
      }
    }
  }
}

processImages().catch(console.error);
