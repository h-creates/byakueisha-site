/** @type {import('next').NextConfig} */
const nextConfig = {
  // 完全静的サイトとして out/ に書き出す（Cloudflare Pages 等の静的ホスティング向け）
  output: "export",
  // 静的書き出しでは next/image のサーバー最適化が使えないため無効化。
  // 画像は事前に WebP 化＋リサイズ済み。
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
