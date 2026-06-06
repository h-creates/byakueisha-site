import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="白詠舎 トップへ">
          <span className={styles.logoJp}>白詠舎</span>
          <span className={styles.logoEn}>Byakueisha</span>
        </Link>

        <nav className={styles.nav} aria-label="フッターナビゲーション">
          <Link href="/">Top</Link>
          <Link href="/about">About</Link>
          <Link href="/utsuwa">Utsuwa</Link>
          <a href="#contact">Contact</a>
        </nav>

        <p className={styles.copy}>© Byakueisha</p>
      </div>
    </footer>
  );
}
