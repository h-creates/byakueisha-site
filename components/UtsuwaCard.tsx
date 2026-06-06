import Image from "next/image";
import type { CSSProperties } from "react";
import type { Utsuwa } from "../data/utsuwa";
import styles from "./UtsuwaCard.module.css";

/** 写真を主役にした器カード。商品カード感を出しすぎない（価格なし） */
export default function UtsuwaCard({
  item,
  index = 0,
}: {
  item: Utsuwa;
  index?: number;
}) {
  return (
    <figure
      className={styles.card}
      data-reveal
      // 並びに沿って少しずつ遅らせて、カードが順に浮かび上がる（控えめに上限あり）
      style={{ "--reveal-delay": `${Math.min(index, 6) * 0.06}s` } as CSSProperties}
    >
      <div className={styles.imageWrap}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 280px"
          className={styles.image}
        />
      </div>
      <figcaption className={styles.body}>
        <h3 className={styles.name}>{item.name}</h3>
        <span className={styles.reading}>{item.reading}</span>
      </figcaption>
    </figure>
  );
}
