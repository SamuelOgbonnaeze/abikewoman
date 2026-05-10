// scripts/optimize-media.ts
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegPath.path);

async function optimizeImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const outputDir = path.join(process.cwd(), 'public-optimized');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const files = fs.readdirSync(publicDir);
  // Now includes .heic files
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|heic)$/i.test(file));

  console.log('\n🖼️  Optimizing Images...\n');

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    // Convert .heic → .jpg, keep everything else as-is
    const outputFileName = file.replace(/\.heic$/i, '.jpg');
    const outputPath = path.join(outputDir, outputFileName);
    
    try {
      if (/\.heic$/i.test(file)) {
        // Use macOS sips to convert HEIC → JPEG (sharp lacks HEIC support in this build)
        execSync(`sips -s format jpeg "${inputPath}" --out "${outputPath}"`, { stdio: 'pipe' });
      } else {
        await sharp(inputPath)
          .resize(1920, null, { 
            withoutEnlargement: true,
          })
          .jpeg({ quality: 80, progressive: true })
          .toFile(outputPath);
      }
      
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(2);
      
      const label = outputFileName !== file ? `${file} → ${outputFileName}` : file;
      console.log(`${label}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${savings}% saved)`);
    } catch (err) {
      console.error(` Failed to optimize ${file}:`, err);
    }
  }
}

async function optimizeVideos() {
  const publicDir = path.join(process.cwd(), 'public');
  const outputDir = path.join(process.cwd(), 'public-optimized');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const files = fs.readdirSync(publicDir);
  // Now includes .mov files
  const videoFiles = files.filter(file => /\.(mp4|mov)$/i.test(file));

  console.log('\n🎬 Optimizing Videos...\n');

  for (const file of videoFiles) {
    const inputPath = path.join(publicDir, file);
    // Convert .mov → .mp4, keep .mp4 as-is
    const outputFileName = file.replace(/\.mov$/i, '.mp4');
    const outputPath = path.join(outputDir, outputFileName);
    
    try {
      await new Promise<void>((resolve, reject) => {
        ffmpeg(inputPath)
          .outputOptions([
            '-c:v libx264',           // H.264 codec
            '-crf 28',                 // Quality (18-28, lower = better quality)
            '-preset medium',          // Encoding speed vs compression
            '-c:a aac',                // Audio codec
            '-b:a 128k',               // Audio bitrate
            '-movflags +faststart',    // Enable streaming
            '-vf scale=1280:-2',       // Max width 1280px, maintain aspect ratio
          ])
          .output(outputPath)
          .on('end', () => {
            const originalSize = fs.statSync(inputPath).size;
            const optimizedSize = fs.statSync(outputPath).size;
            const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(2);
            
            const label = outputFileName !== file ? `${file} → ${outputFileName}` : file;
            console.log(`✅ ${label}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${savings}% saved)`);
            resolve();
          })
          .on('error', (err: Error) => {
            console.error(` Failed to optimize ${file}:`, err.message);
            reject(err);
          })
          .run();
      });
    } catch (err) {
      console.error(` Error processing ${file} ${err}`);
    }
  }
}

async function optimizeMedia() {
  console.log('🚀 Starting media optimization...\n');
  
  await optimizeImages();
  await optimizeVideos();
  
  console.log('\n✅ All media optimized!');
  
  // Calculate total savings
  const publicDir = path.join(process.cwd(), 'public');
  const outputDir = path.join(process.cwd(), 'public-optimized');
  
  // Include all supported source formats
  const originalFiles = fs.readdirSync(publicDir).filter(f => /\.(jpg|jpeg|png|heic|mp4|mov)$/i.test(f));
  const totalOriginal = originalFiles.reduce((sum, file) => {
    return sum + fs.statSync(path.join(publicDir, file)).size;
  }, 0);
  
  const optimizedFiles = fs.readdirSync(outputDir);
  const totalOptimized = optimizedFiles.reduce((sum, file) => {
    return sum + fs.statSync(path.join(outputDir, file)).size;
  }, 0);
  
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(2);
  
  console.log('\n📊 Summary:');
  console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${totalSavings}%`);
}

optimizeMedia();