"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroSlideshow.module.css";

export type HeroSlide = {
  src: string;
  /** 最初の1枚にだけ意味のある代替テキストを付ける（以降は装飾扱い） */
  alt: string;
};

type Props = {
  slides: HeroSlide[];
  /** 1枚あたりの表示時間（ms） */
  interval?: number;
};

/**
 * Heroの静物写真を、ゆっくりクロスフェードしながら切り替える。
 * ズームは常に「寄っていく」一方向。出ていく画像も等倍へ戻さず、
 * アニメーションの終端（拡大）を保持したままフェードアウトさせることで、
 * 寄り／引きが混ざらないようにしている。
 * prefers-reduced-motion では切り替えず1枚目を静止表示する。
 */
export default function HeroSlideshow({ slides, interval = 6000 }: Props) {
  const [active, setActive] = useState(0);
  // 各スライドの「寄り」アニメーションを再生し直すためのキー。
  // そのスライドがアクティブになった瞬間だけ更新する（＝非アクティブ化では再生し直さない）。
  const [zoomKeys, setZoomKeys] = useState(() => slides.map(() => 0));
  const tickRef = useRef(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % slides.length;
        tickRef.current += 1;
        const tick = tickRef.current;
        setZoomKeys((keys) => {
          const copy = [...keys];
          copy[next] = tick; // 入ってくる枚だけズームを最初から再生
          return copy;
        });
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={styles.stage}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`${styles.slide} ${i === active ? styles.isActive : ""}`}
          aria-hidden={i === active ? undefined : true}
        >
          {/* key を変えると寄りアニメーションが頭から再生される */}
          <div key={zoomKeys[i]} className={styles.zoomer}>
            <Image
              src={slide.src}
              alt={i === 0 ? slide.alt : ""}
              fill
              priority={i === 0}
              sizes="(max-width: 880px) 100vw, 60vw"
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
