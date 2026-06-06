import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";
import ContactSection from "../../components/ContactSection";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "白詠舎について ｜ Byakueisha",
  description:
    "土からうつわをつくる白詠舎の、ものづくりや工房について。",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* 1. Page Title */}
        <section className={`container ${styles.pageHead}`}>
          <div className={styles.titleRow} data-reveal>
            <div className={styles.titleVertical}>
              <h1 className={`heading-jp vertical ${styles.pageTitle}`}>
                白詠舎について
              </h1>
              <div className="vrule" aria-hidden="true" />
            </div>
            <div className={styles.titleAside}>
              <span className="label-en">About</span>
              <p className={styles.pageLead}>
                土に触れ、形を探し、焼き上がりを待つ。白詠舎は、土の表情と手の跡を大切にしながら、うつわを制作する工房です。
              </p>
            </div>
          </div>
        </section>

        {/* 2. 工房の入口・外観写真 */}
        <section className={`container ${styles.heroImageWrap}`} data-reveal>
          <Image
            src="/images/entrance.webp"
            alt="白詠舎の工房入口。暖簾と小さな表札"
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1180px"
            className={styles.cover}
          />
        </section>

        {/* 3. 白詠舎について */}
        <section className={`section ${styles.block}`}>
          <div className={`container ${styles.blockInner}`}>
            <div className={styles.blockText} data-reveal>
              <SectionTitle title="土から、うつわへ" en="Brand" />
              <p className="text-body">
                白詠舎は、ひとつずつうつわを制作する工房です。
                <br />
                土の状態や手に残る感覚を見ながら、整えすぎない形を探しています。
              </p>
            </div>
            <div className={styles.blockImage} data-reveal>
              <Image
                src="/images/studio-table.webp"
                alt="窓辺の作業台と棚に並ぶ器"
                fill
                sizes="(max-width: 880px) 100vw, 48vw"
                className={styles.cover}
              />
            </div>
          </div>
        </section>

        {/* 4. ものづくりの考え（画像を左に） */}
        <section className={`section ${styles.block}`}>
          <div className={`container ${styles.blockInner} ${styles.reverse}`}>
            <div className={styles.blockText} data-reveal>
              <SectionTitle title="ものづくりの考え" en="Philosophy" />
              <p className="text-body">
                同じ土、同じ釉薬を使っても、焼き上がりはひとつずつ異なります。
                <br />
                その違いを欠点としてではなく、うつわの表情として大切にしています。
              </p>
            </div>
            <div className={styles.blockImage} data-reveal>
              <Image
                src="/images/studio-drying.webp"
                alt="乾燥を待つ成形途中の器が並ぶ棚"
                fill
                sizes="(max-width: 880px) 100vw, 48vw"
                className={styles.cover}
              />
            </div>
          </div>
        </section>

        {/* 5. 素材・土について */}
        <section className={`section ${styles.block}`}>
          <div className={`container ${styles.blockInner}`}>
            <div className={styles.blockText} data-reveal>
              <SectionTitle title="素材・土について" en="Material" />
              <p className="text-body">
                土の粒、釉薬の濃淡、火を通したあとの色。
                <br />
                素材が見せる変化を確かめながら、形や仕上がりを選んでいます。
              </p>
            </div>
            <div className={styles.blockImage} data-reveal>
              <Image
                src="/images/studio-tools.webp"
                alt="作業台に並ぶ道具と土、削り途中の器"
                fill
                sizes="(max-width: 880px) 100vw, 48vw"
                className={styles.cover}
              />
            </div>
          </div>
        </section>

        {/* 6. 作り手・工房風景 */}
        <section className={styles.maker}>
          <div className={styles.makerImage} data-reveal>
            <Image
              src="/images/studio-wheel.webp"
              alt="ろくろに向かう作り手の手元"
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              className={styles.cover}
            />
          </div>
          <div className={styles.makerBody} data-reveal>
            <SectionTitle title="つくり手について" en="Maker" />
            <p className={styles.makerName}>
              岩瀬 涼
              <span className={styles.makerReading}>Ryo Iwase</span>
            </p>
            <p className="text-body">
              土の質感と、焼き上がりにあらわれる表情の変化に惹かれ、陶芸を学ぶ。その後、白詠舎として制作を開始。
              <br />
              手の跡、土のゆらぎ、焼き上がりの表情を大切に、温かみと趣のあるうつわを制作。
            </p>
          </div>
        </section>

        {/* 7. 工房情報 */}
        <section className={`section ${styles.info}`}>
          <div className="container" data-reveal>
            <SectionTitle title="工房のご案内" en="Information" center />
            <dl className={styles.infoList}>
              <div>
                <dt>所在地</dt>
                <dd>架空県静楽市白詠町 1-2-3</dd>
              </div>
              <div>
                <dt>開房日</dt>
                <dd>金・土・日（要予約）</dd>
              </div>
              <div>
                <dt>展示・取扱</dt>
                <dd>個展・常設のお取扱いについてはお問い合わせください</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 8. Contact */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
