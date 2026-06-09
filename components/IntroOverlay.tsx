"use client";

import { useEffect, useState } from "react";
import styles from "./IntroOverlay.module.css";

/**
 * トップを開いたときの入場演出。「白詠舎 / BYAKUEISHA」がぼかしから滲み上がり、ゆっくり消えてトップが現れる。
 * - フルリロード時のみ再生（モジュール変数はリロードでリセット、画面遷移では保持される性質を利用）
 * - 演出・自動消去・prefers-reduced-motion対応はすべてCSS側で完結（JSはスクロールを固定しない＝バーのちらつき/ズレを防ぐ）
 */
let played = false;

export default function IntroOverlay() {
  const [skip] = useState(() => played);

  useEffect(() => {
    played = true;
  }, []);

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
