import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";
import UtsuwaCard from "../../components/UtsuwaCard";
import ContactSection from "../../components/ContactSection";
import { utsuwaList } from "../../data/utsuwa";
import styles from "./utsuwa.module.css";

export const metadata: Metadata = {
  title: "うつわ ｜ Byakueisha",
  description:
    "白詠舎のうつわ。土を成形し、削り、釉薬をかけて焼いた器を紹介します。",
};

export default function UtsuwaPage() {
  return (
    <>
      <Header />

      <main>
        {/* 1. Page Title ＋ 導入文（Aboutと同じ構成・写真より先） */}
        <section className={`container ${styles.pageHead}`}>
          <div className={styles.titleRow} data-reveal>
            <div className={styles.titleVertical}>
              <h1 className={`heading-jp vertical ${styles.pageTitle}`}>うつわ</h1>
              <div className="vrule" aria-hidden="true" />
            </div>
            <div className={styles.titleAside}>
              <span className="label-en">Utsuwa</span>
              <p className={styles.pageLead}>
                土の質感、釉薬のゆらぎ、手で形づくる線。ひとつずつ表情の異なるうつわを制作しています。
              </p>
            </div>
          </div>
        </section>

        {/* 1b. 静かなギャラリーバンド */}
        <section className={`container ${styles.heroImageWrap}`} data-reveal>
          <Image
            src="/images/still-trio.webp"
            alt="木の台に並ぶ皿と鉢"
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1180px"
            className={styles.cover}
          />
        </section>

        {/* 3. 器一覧 */}
        <section className={`section ${styles.gallery}`}>
          <div className="container">
            <div className={styles.grid}>
              {utsuwaList.map((item, i) => (
                <UtsuwaCard key={item.slug} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. うつわが生まれるまで */}
        <section className={styles.making}>
          <div className={styles.makingImage} data-reveal>
            <Image
              src="/images/studio-wheel.webp"
              alt="ろくろで器を成形する手元"
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              className={styles.cover}
            />
          </div>
          <div className={styles.makingBody} data-reveal>
            <SectionTitle title="うつわができるまで" en="Making" />
            <p className="text-body">
              土を練り、形をつくり、乾かし、削り、焼く。ひとつのうつわができるまでには、いくつもの時間があります。
              <br />
              白詠舎では、工程の跡や焼き上がりの表情を、うつわの一部として大切にしています。
            </p>
          </div>
        </section>

        {/* 5. 取扱・展示についての案内 */}
        <section className={`section ${styles.notice}`}>
          <div className="container">
            <SectionTitle
              title="お取扱い・ご相談について"
              en="Information"
              center
            />
            <div className={styles.noticeBody} data-reveal>
              <p className="text-body">
                白詠舎のうつわは、展示や一部のお取扱い店にてご覧いただけます。
                <br />
                お取扱い、展示、制作に関するご相談は、お問い合わせよりご連絡ください。
              </p>
            </div>
          </div>
        </section>

        {/* 6. Contact */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
