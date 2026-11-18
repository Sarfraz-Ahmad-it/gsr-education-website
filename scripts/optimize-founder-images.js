import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const inputDir = "src/assets/images/founder";
const outputDir = "src/assets/images/optimized/founder";

const files = [
  "gulab-bano.jpg",
  "certificates/vocational-certificate-01.jpg",
  "certificates/vocational-certificate-02.jpg",
  "certificates/skill-india-certificate.jpg",
  "certificates/VocationalHandicraft-06.jpg",
  "certificates/knitting-certificate.jpg",
  "certificates/SewingTailoring-05.jpg",
];

async function optimize() {
  fs.mkdirSync(outputDir, { recursive: true });

  let originalTotal = 0;
  let optimizedTotal = 0;

  for (const file of files) {
    const input = path.join(inputDir, file);
    const filename = path.parse(file).name + ".webp";
    const output = path.join(outputDir, filename);

    const originalSize = fs.statSync(input).size;

    let pipeline = sharp(input).rotate();

    if (file === "gulab-bano.jpg") {
      pipeline = pipeline.resize({
        width: 1200,
        withoutEnlargement: true,
      });
    }

    await pipeline
      .webp({
        quality: 88,
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

  console.log("\n--- Founder Optimization Summary ---");
  console.log(`Original: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized: ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((1 - optimizedTotal / originalTotal) * 100).toFixed(1)}%`);
}

optimize().catch(console.error);