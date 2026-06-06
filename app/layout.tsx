import type { Metadata } from "next";
import "../styles/globals.css";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "白詠舎 ｜ Byakueisha",
  description:
    "白詠舎は、土からうつわをつくる工房です。手で成形し、削り、釉薬をかけて焼く。土の表情や手の跡を残したうつわを制作しています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/*
          日本語フォントは next/font の subset 制約で漢字・かなが
          読み込まれないため、Google Fonts を直接読み込む。
          和文＝Noto Serif JP（明朝）/ Noto Sans JP（ゴシック）
          欧文＝Inter（サンセリフ）
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* スクロール演出の初期非表示を、JS有効時のみ適用（チラつき・JS無効時の非表示を防ぐ） */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('reveal-ready')",
          }}
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
