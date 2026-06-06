# 白詠舎 / Byakueisha

架空の陶芸・器ブランド「白詠舎」のポートフォリオ用Webサイトです。

## サイト構成

- Top
- About
- Utsuwa

## 目的

工房の空気感、器の質感、手仕事の静けさを伝えるブランドサイトのサンプルとして制作します。

## デザイン方針

詳しいトンマナ・ページ設計は `DESIGN.md` を参照してください。

## 技術構成

- Next.js 15 (App Router) / React 19 / TypeScript
- スタイル: CSS Modules ＋ `styles/globals.css`（配色・タイポ・余白のトークン）
- フォント: Noto Serif JP（見出し）/ Noto Sans JP（本文）/ Cormorant Garamond（英字）を `next/font` で読込

## ディレクトリ

```txt
app/
  layout.tsx          共通レイアウト・フォント・metadata
  page.tsx            Top
  about/page.tsx      About
  utsuwa/page.tsx     Utsuwa
components/           Header / Footer / Button / SectionTitle / UtsuwaCard / ContactSection
data/utsuwa.ts        器の固定データ（価格は持たない）
public/images/        写真素材（英小文字＋ハイフン名）
styles/globals.css    デザイントークン
```

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド（静的生成）
```

## Claude Code向け指示

実装時は `CLAUDE.md` を参照してください。
