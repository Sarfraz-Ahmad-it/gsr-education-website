
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const inputDir = "src/assets/images/carousel";
const outputDir = "src/assets/images/optimized/carousel";

await fs.mkdir(outputDir, { recursive: true });

const files = [
  "01-education-brighter-future.png",
  "02-learn-skills-build-confidence.png",
  "03-creating-opportunities-for-women.png",
  "04-building-knowledge-inspiring-growth.png",
];

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(
    outputDir,
    file.replace(/\.png$/i, ".webp")
  );

  const metadata = await sharp(inputPath).metadata();

  await sharp(inputPath)
    .resize({
      width: 1672,
      withoutEnlargement: true,
    })
    .webp({ quality: 80, effort: 5 })
    .toFile(outputPath);

  const original = (await fs.stat(inputPath)).size;
  const optimized = (await fs.stat(outputPath)).size;

  console.log(`\n${file}`);
  console.log(`Dimensions: ${metadata.width} x ${metadata.height}`);
  console.log(`Original: ${(original / 1024).toFixed(1)} KB`);
  console.log(`Optimized: ${(optimized / 1024).toFixed(1)} KB`);
  console.log(
    `Saved: ${((1 - optimized / original) * 100).toFixed(1)}%`
  );
}
