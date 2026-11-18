import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const inputDir = "src/assets/images/activities";
const outputDir = "src/assets/images/optimized/activities";

const files = [
  "mehndi-designing.png",
  "beauty-makeup.png",
  "tailoring-stitching.png",
  "educational-activities.png",
];

async function optimize() {
  fs.mkdirSync(outputDir, { recursive: true });

  let originalTotal = 0;
  let optimizedTotal = 0;

  for (const file of files) {
    const input = path.join(inputDir, file);
    const output = path.join(
      outputDir,
      path.parse(file).name + ".webp"
    );

    const originalSize = fs.statSync(input).size;

    await sharp(input)
      .rotate()
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
        effort: 5,
      })
      .toFile(output);

    const optimizedSize = fs.statSync(output).size;

    originalTotal += originalSize;
    optimizedTotal += optimizedSize;

    console.log(
      `${file}: ${(originalSize / 1024).toFixed(1)} KB → ${(optimizedSize / 1024).toFixed(1)} KB`
    );
  }

  console.log("\n--- Activities Optimization Summary ---");
  console.log(`Original: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized: ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `Saved: ${((1 - optimizedTotal / originalTotal) * 100).toFixed(1)}%`
  );
}

optimize().catch(console.error);