import process from "node:process";
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const files = [
  "src/assets/images/hero-education.png",
  "src/assets/images/about-institution.png",
  "src/assets/images/mission/education-awareness.png",
  "src/assets/images/mission/vocational-skills.png",
  "src/assets/images/mission/personal-care.png",
  "src/assets/images/mission/employment-opportunities.png",
  "src/assets/images/mission/digital-skills.png",
  "src/assets/images/mission/health-wellbeing.png",
  "src/assets/images/courses/beautician-training.png",
  "src/assets/images/courses/mehndi-designing.png",
  "src/assets/images/courses/tailoring-stitching.png",
  "src/assets/images/courses/computer-education.png",
  "src/assets/images/courses/arts-crafts.png",
  "src/assets/images/courses/self-employment.png",
  "src/assets/images/courses/basic-education.png",
  "src/assets/images/courses/health-awareness.png",
];

const outputDir = "src/assets/images/optimized/main";

async function optimize() {
  fs.mkdirSync(outputDir, { recursive: true });

  let originalTotal = 0;
  let optimizedTotal = 0;

  for (const file of files) {
    const input = path.resolve(file);
    const filename = path.parse(file).name + ".webp";
    const output = path.join(outputDir, filename);

    const metadata = await sharp(input).metadata();
    const originalSize = fs.statSync(input).size;

    const isHero = file.includes("hero-education");
    const width = isHero ? 1536 : 1000;

    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({
        quality: 82,
        effort: 5,
        smartSubsample: true,
      })
      .toFile(output);

    const optimizedSize = fs.statSync(output).size;

    originalTotal += originalSize;
    optimizedTotal += optimizedSize;

    const saved = (
      (1 - optimizedSize / originalSize) * 100
    ).toFixed(1);

    console.log(
      `${path.basename(file)}: ` +
      `${(originalSize / 1024).toFixed(1)} KB → ` +
      `${(optimizedSize / 1024).toFixed(1)} KB | ` +
      `${saved}% saved | ${metadata.width}x${metadata.height}`
    );
  }

  console.log("\n========== SUMMARY ==========");
  console.log(`Original: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized: ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((1 - optimizedTotal / originalTotal) * 100).toFixed(1)}%`);
}

optimize().catch((error) => {
  console.error("Optimization failed:", error);
  process.exit(1);
});
