import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
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
