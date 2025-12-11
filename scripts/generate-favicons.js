/**
 * Script to generate favicon files in multiple sizes from SVG logo
 * Run: node scripts/generate-favicons.js
 * 
 * Requirements: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SIZES = [48, 96, 144, 192, 512];
const INPUT_SVG = path.join(__dirname, '..', 'public', 'images', 'fineline-logo.svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

async function generateFavicons() {
  console.log('🎨 Generating favicons from logo...\n');

  // Read the SVG file
  const svgBuffer = fs.readFileSync(INPUT_SVG);

  for (const size of SIZES) {
    try {
      // Generate PNG
      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(OUTPUT_DIR, `icon-${size}x${size}.png`));
      
      console.log(`✅ Generated icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Error generating ${size}x${size}:`, error.message);
    }
  }

  // Generate standard favicon.ico (32x32)
  try {
    await sharp(svgBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));
    
    console.log(`✅ Generated favicon.ico`);
  } catch (error) {
    console.error(`❌ Error generating favicon.ico:`, error.message);
  }

  // Generate apple-touch-icon
  try {
    await sharp(svgBuffer)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    
    console.log(`✅ Generated apple-touch-icon.png`);
  } catch (error) {
    console.error(`❌ Error generating apple-touch-icon.png:`, error.message);
  }

  console.log('\n✨ Favicon generation complete!');
}

generateFavicons().catch(console.error);

