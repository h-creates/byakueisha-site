// public/images の PNG を WebP に変換＋用途別にリサイズする一回限りのユーティリティ。
// 実行: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const dir = "public/images";

// うつわカードの正方形写真（グリッドで小さく表示）は控えめなサイズに
const cardSlugs = new Set([
  "shironagi",
  "bokkei",
  "haiyu",
  "shizuku",
  "awatsuchi",
  "awayuki",
  "yotan",
  "kinari",
  "nobe",
  "omokage",
  "soukei",
  "konomi",
]);

const files = (await readdir(dir)).filter((f) => f.toLowerCase().endsWith(".png"));

let before = 0;
let after = 0;

for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const maxWidth = cardSlugs.has(name) ? 900 : 1600;
  const input = path.join(dir, file);
  const output = path.join(dir, `${name}.webp`);

  const src = sharp(input);
  const meta = await src.metadata();
  before += (await src.clone().toBuffer()).length;

  await src
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  const outMeta = await sharp(output).metadata();
  const outSize = (await sharp(output).toBuffer()).length;
  after += outSize;

  console.log(
    `${file} (${meta.width}px) -> ${name}.webp (${outMeta.width}px, ${(outSize / 1024).toFixed(0)}KB)`
  );
}

console.log(
  `\n合計: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`
);
