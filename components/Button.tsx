import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  /** 省略すると「どこにも飛ばない」ボタン（サンプル用の無効ボタン）になる */
  href?: string;
  children: React.ReactNode;
  /** ページ内アンカーや外部リンク（mailto等）の場合は true */
  external?: boolean;
};

/** 細枠・控えめ・「詳しく見る →」スタイルの静かなボタン */
export default function Button({ href, children, external }: ButtonProps) {
  const className = styles.button;
  const content = (
    <>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  );

  // href が無い場合は、押しても何も起きないボタン（遷移しない）
  if (!href) {
    return (
      <button type="button" className={className}>
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
