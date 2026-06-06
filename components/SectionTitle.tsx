import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  /** 日本語見出し */
  title: string;
  /** 英字サブラベル */
  en?: string;
  /** 中央寄せにする場合 true */
  center?: boolean;
};

export default function SectionTitle({ title, en, center }: SectionTitleProps) {
  return (
    <div className={`${styles.wrap} ${center ? styles.center : ""}`}>
      {en && <span className="label-en">{en}</span>}
      <h2 className={`heading-jp ${styles.title}`}>{title}</h2>
    </div>
  );
}
