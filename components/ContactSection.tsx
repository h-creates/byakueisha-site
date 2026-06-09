import Button from "./Button";
import styles from "./ContactSection.module.css";

/** 各ページ下部に置く静かなContact導線（独立ページは作らない方針） */
export default function ContactSection() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.inner}`} data-reveal>
        <span className="label-en">Contact</span>
        <h2 className={`heading-jp ${styles.title}`}>お問い合わせ</h2>
        <p className={styles.lead}>
          展示やお取扱い、制作についてのお問い合わせは、
          <br className={styles.brDesktop} />
          メールにて承っています。
        </p>
        {/* サンプルサイトのため、押しても遷移しない（実案件で mailto やフォームに差し替え） */}
        <Button>お問い合わせ</Button>
      </div>
    </section>
  );
}
