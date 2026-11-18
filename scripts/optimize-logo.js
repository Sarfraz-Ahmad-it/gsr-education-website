import sharp from "sharp";
import fs from "node:fs";

const input = "src/assets/images/logo_gsr.png";
const output = "src/assets/images/optimized/logo_gsr.webp";

async function optimize() {
  fs.mkdirSync("src/assets/images/optimized", { recursive: true });

  const originalSize = fs.statSync(input).size;

  await sharp(input)
    .resize({
      width: 600,
      withoutEnlargement: true,
    })
    .webp({
      quality: 90,
      effort: 6,
    })
    .toFile(output);

  const optimizedSize = fs.statSync(output).size;

  console.log(`Original: ${(originalSize / 1024).toFixed(1)} KB`);
  console.log(`Optimized: ${(optimizedSize / 1024).toFixed(1)} KB`);
  console.log(
    `Saved: ${((1 - optimizedSize / originalSize) * 100).toFixed(1)}%`
  );
}

optimize().catch(console.error);