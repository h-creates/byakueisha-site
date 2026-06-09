"use client";

import { useEffect, useState } from "react";
import styles from "./IntroOverlay.module.css";

/**
 * トップを開いたときの入場演出。「白詠舎 / BYAKUEISHA」がぼかしから滲み上がり、すっと消えてトップが現れる。
 * - フルリロード時のみ再生（モジュール変数はリロードでリセット、画面遷移では保持される性質を利用）
 * - prefers-reduced-motion では再生せず即表示
 * - 演出はCSSアニメーションで自走するため、JS無効でも自動で消える
 */
let played = false;

export default function IntroOverlay() {
  const [skip] = useState(() => played);

  useEffect(() => {
    played = true;
    if (skip) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // 演出中はスクロールを止める
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 1500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [skip]);

  if (skip) return null;

  return (
    <div className={styles.overlay} aria-hidden="true">
      <span className={styles.brand}>
        <span className={styles.word}>白詠舎</span>
        <span className={styles.latin}>Byakueisha</span>
      </span>
    </div>
  );
}
