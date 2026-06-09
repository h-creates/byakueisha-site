import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import UtsuwaCard from "../components/UtsuwaCard";
import ContactSection from "../components/ContactSection";
import HeroSlideshow from "../components/HeroSlideshow";
import IntroOverlay from "../components/IntroOverlay";
import { utsuwaList } from "../data/utsuwa";
import styles from "./home.module.css";

// Hero のスライド（器の静物・工房の空気感／手元写真は使わない）
const heroSlides = [
  { src: "/images/hero-ceramics.webp", alt: "木の台に並ぶ白詠舎の器" },
  { src: "/images/shelf-ceramics.webp", alt: "工房の棚に並ぶうつわ" },
  { src: "/images/utsuwa-kobachi.webp", alt: "並んだ対の鉢" },
];

export default function HomePage() {
  // Top では器を4点だけ見せる（作品紹介への入口）。
  // 形と色のバランスを見せるため、指定の順番で4点を選ぶ。
  const featuredSlugs = ["shironagi", "bokkei", "shizuku", "haiyu"];
  const featured = featuredSlugs.map(
    (slug) => utsuwaList.find((item) => item.slug === slug)!
  );

  return (
    <>
      <IntroOverlay />
      <Header />

      <main>
        {/* 1. Hero（左＝白地にコピー / 右＝写真・右端までフルブリード） */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopyGroup} data-reveal>
              <div className={styles.heroVertical}>
                <h1 className={`vertical ${styles.heroCopy}`}>
                  手のあと、
                  <br />
                  土のかたち。
                </h1>
                <div className="vrule" aria-hidden="true" />
              </div>
              <p className={styles.heroSub}>手と土の対話から生まれる器。</p>
            </div>

            <div className={styles.heroImage}>
              <HeroSlideshow slides={heroSlides} />
            </div>
          </div>
        </section>

        {/* 2. Concept */}
        <section className={`section ${styles.concept}`}>
          <div className={`container ${styles.conceptInner}`}>
            <div className={styles.conceptText} data-reveal>
              <SectionTitle title="手と土の対話から" en="Concept" />
              <p className="text-body">
                土に触れ、その日の状態を確かめながら、少しずつ形を探していく。
                <br />
                土が見せる色や質感、手の動きから生まれる線を受け取りながら、一点ごとに異なる表情を持つうつわを制作しています。
              </p>
            </div>
            <div className={styles.conceptImage} data-reveal>
              <Image
                src="/images/still-four.webp"
                alt="湯呑・鉢・皿・徳利が並ぶ静物"
                fill
                sizes="(max-width: 880px) 100vw, 50vw"
                className={styles.cover}
              />
            </div>
          </div>
        </section>

        {/* 3. About導線 */}
        <section className={styles.lead}>
          <div className={styles.leadImage} data-reveal>
            <Image
              src="/images/entrance.webp"
              alt="白詠舎の工房入口"
              fill
              sizes="(max-width: 880px) 100vw, 55vw"
              className={styles.cover}
            />
          </div>
          <div className={styles.leadBody} data-reveal>
            <SectionTitle title="白詠舎について" en="About" />
            <p className="text-body">
              白詠舎は、土の表情と手の跡を大切にしながら、うつわを制作する工房です。
              <br />
              土とじっくり向き合い、その時々にあらわれる形を大切にしています。
            </p>
            <Button href="/about">工房について</Button>
          </div>
        </section>

        {/* 4. Utsuwa導線 */}
        <section className={`section ${styles.utsuwa}`}>
          <div className="container">
            <div className={styles.utsuwaHead} data-reveal>
              <SectionTitle title="うつわ" en="Utsuwa" />
              <p className="text-body">
                皿、鉢、湯呑み、花器など。土の質感と、手で形づくる線が残るうつわを制作しています。
              </p>
            </div>

            <div className={styles.utsuwaGrid}>
              {featured.map((item, i) => (
                <UtsuwaCard key={item.slug} item={item} index={i} />
              ))}
            </div>

            <div className={styles.utsuwaMore}>
              <Button href="/utsuwa">うつわを見る</Button>
            </div>
          </div>
        </section>

        {/* 5. 制作風景 */}
        <section className={`section ${styles.making}`}>
          <div className={`container ${styles.makingInner}`}>
            <div className={styles.makingText} data-reveal>
              <SectionTitle title="制作の風景" en="Making" />
              <p className="text-body">
                土の乾き具合、指先に残る重さ、火を通したあとの表情。工程の中で変わっていく土の状態を見ながら、手を入れています。
              </p>
              <Button href="/utsuwa">制作を見る</Button>
            </div>
            <div className={styles.makingImages} data-reveal>
              <div className={styles.makingImgTall}>
                <Image
                  src="/images/studio-wheel.webp"
                  alt="ろくろで器を成形する手元"
                  fill
                  sizes="(max-width: 880px) 100vw, 40vw"
                  className={styles.cover}
                />
              </div>
              <div className={styles.makingImgWide}>
                <Image
                  src="/images/studio-tools.webp"
                  alt="作業台に並ぶ道具と削り途中の器"
                  fill
                  sizes="(max-width: 880px) 100vw, 40vw"
                  className={styles.cover}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. 工房案内 / Access */}
        <section className={styles.access}>
          <div className={styles.accessImage} data-reveal>
            <Image
              src="/images/shelf-ware.webp"
              alt="工房の棚に並ぶ器"
              fill
              sizes="(max-width: 880px) 100vw, 55vw"
              className={styles.cover}
            />
          </div>
          <div className={styles.accessBody} data-reveal>
            <SectionTitle title="工房のご案内" en="Access" />
            <p className="text-body">
              制作と展示を行う工房です。お取扱い、展示、制作に関するご相談はメールにて承っています。
            </p>
            <dl className={styles.accessInfo}>
              <div>
                <dt>所在地</dt>
                <dd>架空県静楽市白詠町 1-2-3</dd>
              </div>
              <div>
                <dt>開房日</dt>
                <dd>金・土・日（要予約）</dd>
              </div>
            </dl>
            <Link href="/about" className={styles.accessLink}>
              工房について詳しく
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </section>

        {/* 7. Contact */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
