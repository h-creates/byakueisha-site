"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * data-reveal を付けた要素を、ビューポートに入ったときに一度だけフェードイン表示する。
 * - IntersectionObserver を1つだけ使う軽量実装
 * - prefers-reduced-motion / 非対応環境ではすぐ表示（動きなし）
 * - 画面遷移（App Router）ごとに貼り直すため pathname を依存に入れる
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
