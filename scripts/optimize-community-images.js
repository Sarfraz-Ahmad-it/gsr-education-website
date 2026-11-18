import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const inputDir = "src/assets/images/community";
const outputDir = "src/assets/images/optimized/community";

const files = [
  "parent-visit-01.jpg",
  "parent-visit-02.jpg",
  "parent-visit-03.jpg",
  "parent-visit-04.jpg",
  "parent-visit-05.jpg",
  "parent-visit-06.jpg",
  "outreach-team-01.jpg",
  "outreach-team-02.jpg",
  "d153ad69-eb2c-4567-ae9a-059cc3c0c225.png",
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

    const saved = (
      (1 - optimizedSize / originalSize) * 100
    ).toFixed(1);

    console.log(
      `${file}: ${(originalSize / 1024).toFixed(1)} KB → ${(optimizedSize / 1024).toFixed(1)} KB | ${saved}% saved`
    );
  }

  console.log("\n--- Community Optimization Summary ---");
  console.log(
    `Original: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Optimized: ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Saved: ${((1 - optimizedTotal / originalTotal) * 100).toFixed(1)}%`
  );
}

optimize().catch(console.error);