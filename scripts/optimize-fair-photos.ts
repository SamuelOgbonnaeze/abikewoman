// scripts/optimize-fair-photos.ts
// Converts fair photos into the WebP sizes the Naija Made Market page serves.
//
// Usage: npm run optimize-fair-photos -- path/to/amani-dress.jpg [more photos...]
//
// For each photo it writes, to public/naija-made-market/:
//   <name>.webp      800px wide (the image path you put in items.ts)
//   <name>-640.webp  640px wide
//   <name>-480.webp  480px wide
// The page lets each browser pick the smallest size that's sharp enough.
// JPEG, PNG and WebP inputs work; convert iPhone HEIC photos to JPEG first.
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'naija-made-market');
// Keep in sync with FAIR_PHOTO_WIDTHS in app/naija-made-market/page.tsx.
const WIDTHS = [800, 640, 480];

async function optimizeFairPhotos(inputs: string[]) {
  if (!inputs.length) {
    console.error('Usage: npm run optimize-fair-photos -- <photo> [more photos...]');
    process.exit(1);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const input of inputs) {
    const name = path.basename(input, path.extname(input));
    for (const width of WIDTHS) {
      const file = width === WIDTHS[0] ? `${name}.webp` : `${name}-${width}.webp`;
      const info = await sharp(input)
        .rotate() // respect the camera's orientation
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 70, effort: 6 })
        .toFile(path.join(OUTPUT_DIR, file));
      console.log(`✓ ${file} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
    }
  }
}

optimizeFairPhotos(process.argv.slice(2)).catch((error) => {
  console.error(error);
  process.exit(1);
});
