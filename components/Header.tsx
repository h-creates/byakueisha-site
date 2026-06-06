import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="白詠舎 トップへ">
          <span className={styles.logoJp}>白詠舎</span>
          <span className={styles.logoEn}>Byakueisha</span>
        </Link>

        <nav className={styles.nav} aria-label="メインナビゲーション">
          <Link href="/about">About</Link>
          <Link href="/utsuwa">Utsuwa</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
