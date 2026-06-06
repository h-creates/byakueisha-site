export type Utsuwa = {
  slug: string;
  name: string;
  reading: string;
  image: string;
};

/**
 * 器の固定データ。
 * 作品名（日本語）＋ローマ字表記のみを持つ（説明文・用途名・価格は持たない）。
 * 後からCMSや個別詳細ページに差し替えられるよう slug を持たせている。
 * 並び順 = Utsuwaページの表示順。
 */
export const utsuwaList: Utsuwa[] = [
  {
    slug: "shironagi",
    name: "白凪",
    reading: "Shironagi",
    image: "/images/shironagi.webp",
  },
  {
    slug: "bokkei",
    name: "墨景",
    reading: "Bokkei",
    image: "/images/bokkei.webp",
  },
  {
    slug: "haiyu",
    name: "灰釉",
    reading: "Haiyu",
    image: "/images/haiyu.webp",
  },
  {
    slug: "shizuku",
    name: "白雫",
    reading: "Shizuku",
    image: "/images/shizuku.webp",
  },
  {
    slug: "awatsuchi",
    name: "淡土",
    reading: "Awatsuchi",
    image: "/images/awatsuchi.webp",
  },
  {
    slug: "awayuki",
    name: "淡雪",
    reading: "Awayuki",
    image: "/images/awayuki.webp",
  },
  {
    slug: "yotan",
    name: "余炭",
    reading: "Yotan",
    image: "/images/yotan.webp",
  },
  {
    slug: "kinari",
    name: "生成",
    reading: "Kinari",
    image: "/images/kinari.webp",
  },
  {
    slug: "nobe",
    name: "野辺",
    reading: "Nobe",
    image: "/images/nobe.webp",
  },
  {
    slug: "omokage",
    name: "面影",
    reading: "Omokage",
    image: "/images/omokage.webp",
  },
  {
    slug: "soukei",
    name: "双景",
    reading: "Soukei",
    image: "/images/soukei.webp",
  },
  {
    slug: "konomi",
    name: "木の実",
    reading: "Konomi",
    image: "/images/konomi.webp",
  },
];
