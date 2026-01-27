"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

// ============================================
// 🎵 CONFIGURATION DE LA MUSIQUE
// ============================================
const MUSIC_CONFIG = {
  url: "/music/romantic1.mp3",
  initialVolume: 0.5,
  loop: true,
  title: "Notre Chanson ✦",
};

export default function FatouIbrahimPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const startDate = new Date("2020-02-14");

    const updateCountdown = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      setCountdown({ years, months, days, hours });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 3600000);
    return () => clearInterval(interval);
  }, []);

  // Configurer le volume initial
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = MUSIC_CONFIG.initialVolume;
    }
  }, []);

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Erreur de lecture audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.container}>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={MUSIC_CONFIG.url}
        loop={MUSIC_CONFIG.loop}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Stars Background */}
      <div className={styles.starsContainer}>
        <div className={`${styles.stars} ${styles.starsSmall}`}></div>
        <div className={`${styles.stars} ${styles.starsMedium}`}></div>
        <div className={`${styles.stars} ${styles.starsLarge}`}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
      </div>

      {/* Nebula Effects */}
      <div className={`${styles.nebula} ${styles.nebula1}`}></div>
      <div className={`${styles.nebula} ${styles.nebula2}`}></div>
      <div className={`${styles.nebula} ${styles.nebula3}`}></div>

      <div className={styles.content}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navLogo}>F ✦ I</div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#story" onClick={(e) => handleNavClick(e, "story")}>
                Notre Histoire
              </a>
            </li>
            <li>
              <a href="#moments" onClick={(e) => handleNavClick(e, "moments")}>
                Moments
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")}>
                Galerie
              </a>
            </li>
            <li>
              <a href="#letter" onClick={(e) => handleNavClick(e, "letter")}>
                Lettre
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.moon}></div>

          <div className={styles.heroConstellation}>
            ÉCRITS DANS LES ÉTOILES
          </div>

          <div className={styles.heroPhotos}>
            <div className={styles.photoCelestial}>
              <div className={styles.photoOrbit}></div>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <Image
                    src="/images/marie.png"
                    alt="Photo de Fatou"
                    fill
                    className={styles.photoImage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.constellationConnector}>
              <div className={styles.connectorLine}></div>
              <span className={styles.connectorStar}>✦</span>
              <div className={styles.connectorLine}></div>
            </div>

            <div className={styles.photoCelestial}>
              <div className={styles.photoOrbit}></div>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <Image
                    src="/images/jean.png"
                    alt="Photo de Ibrahim"
                    fill
                    className={styles.photoImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className={styles.heroTitle}>
            Fatou <span className={styles.amp}>&</span> Ibrahim
          </h1>
          <p className={styles.heroSubtitle}>
            Une histoire écrite dans les étoiles
          </p>
          <p className={styles.heroDate}>
            <span className={styles.star}>✦</span>
            ENSEMBLE DEPUIS LE 14.02.2020
            <span className={styles.star}>✦</span>
          </p>

          <div className={styles.scrollIndicator} onClick={scrollToStory}>
            <span>Découvrir</span>
            <span className={styles.arrow}>↓</span>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection} id="story">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionStars}>✦ ✦ ✦</div>
            <h2 className={styles.sectionTitle}>Notre Histoire</h2>
            <p className={styles.sectionSubtitle}>
              Comment les étoiles nous ont réunis
            </p>
          </div>

          <div className={styles.storyContainer}>
            <div className={styles.storyImage}>
              <div className={styles.storyFrame}>
                <div className={styles.storyImgInner}>
                  <Image
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1000&fit=crop"
                    alt="Photo du Couple"
                    fill
                    className={styles.storyPhoto}
                  />
                </div>
              </div>
            </div>
            <div className={styles.storyContent}>
              <p className={styles.storyQuote}>
                Comme deux étoiles destinées à briller ensemble dans
                l&apos;infini du cosmos.
              </p>
              <p className={styles.storyText}>
                Notre histoire a commencé sous un ciel étoilé, quand le destin a
                décidé d&apos;aligner nos constellations. Ce qui semblait être
                une simple rencontre s&apos;est transformé en une aventure
                cosmique. Depuis cette nuit magique, nous naviguons ensemble à
                travers les galaxies de la vie, main dans la main.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection} id="moments">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionStars}>✦ ✦ ✦</div>
            <h2 className={styles.sectionTitle}>Moments Précieux</h2>
            <p className={styles.sectionSubtitle}>
              Les chapitres de notre voyage cosmique
            </p>
          </div>

          <div className={styles.timeline}>
            <TimelineItem
              date="14 FÉVRIER 2020"
              title="La Rencontre"
              text="Sous les étoiles d'Abidjan, nos regards se sont croisés pour la première fois."
              imageSrc="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop"
            />
            <TimelineItem
              date="20 JUIN 2021"
              title="Nuit d'Été"
              text="Notre premier voyage ensemble, sous les étoiles de Grand-Bassam."
              imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
            />
            <TimelineItem
              date="14 FÉVRIER 2023"
              title="Trois Ans de Lumière"
              text="Célébration de notre amour grandissant comme une supernova."
              imageSrc="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop"
            />
            <TimelineItem
              date="25 DÉCEMBRE 2024"
              title="La Promesse Éternelle"
              text="Tu as dit oui sous les étoiles de Noël. Notre constellation est complète."
              imageSrc="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop"
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.gallerySection} id="gallery">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionStars}>✦ ✦ ✦</div>
            <h2 className={styles.sectionTitle}>Notre Galaxie</h2>
            <p className={styles.sectionSubtitle}>
              Les moments capturés dans le temps
            </p>
          </div>

          <div className={styles.galleryGrid}>
            <GalleryItem
              title="Nuit Étoilée"
              location="Assinie, 2023"
              imageSrc="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop"
            />
            <GalleryItem
              title="Coucher de Soleil"
              location="Grand-Bassam, 2022"
              imageSrc="https://images.unsplash.com/photo-1476673160081-cf065607f449?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="Notre Coin"
              location="Cocody, 2023"
              imageSrc="https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="En Voyage"
              location="Yamoussoukro, 2024"
              imageSrc="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="Soirée Magique"
              location="Plateau, 2024"
              imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="Notre Anniversaire"
              location="14 Février 2025"
              imageSrc="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=400&fit=crop"
            />
            <GalleryItem
              title="Noël en Amoureux"
              location="Décembre 2024"
              imageSrc="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&h=400&fit=crop"
            />
          </div>
        </section>

        {/* Letter Section */}
        <section className={styles.letterSection} id="letter">
          <div className={styles.letterWrapper}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionStars}>✦ ✦ ✦</div>
              <h2 className={styles.sectionTitle}>Message des Étoiles</h2>
              <p className={styles.sectionSubtitle}>
                Les mots que mon cœur t&apos;écrit
              </p>
            </div>

            <div className={styles.letterFrame}>
              <div className={`${styles.letterCorner} ${styles.tl}`}></div>
              <div className={`${styles.letterCorner} ${styles.tr}`}></div>
              <div className={`${styles.letterCorner} ${styles.bl}`}></div>
              <div className={`${styles.letterCorner} ${styles.br}`}></div>
              <div className={styles.letterStar}>✦</div>

              <p className={styles.letterGreeting}>Mon Étoile,</p>

              <div className={styles.letterBody}>
                <p>
                  Comme la lune aime le ciel nocturne, je t&apos;aime d&apos;un
                  amour infini et éternel. Tu es ma constellation personnelle,
                  le point de lumière qui guide chacun de mes pas dans
                  l&apos;obscurité.
                </p>
                <p>
                  Chaque nuit, quand je regarde les étoiles, je pense à toi. Car
                  c&apos;est dans tes yeux que je vois briller tout
                  l&apos;univers, et c&apos;est dans tes bras que je trouve ma
                  place dans cette galaxie.
                </p>
                <p>
                  Je promets de t&apos;aimer jusqu&apos;à ce que les étoiles
                  s&apos;éteignent, et même au-delà. Notre amour est écrit dans
                  le cosmos, éternel et infini.
                </p>
              </div>

              <div className={styles.letterSignature}>
                <p>À jamais tien,</p>
                <p className={styles.signatureName}>Ibrahim ✦</p>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className={styles.counterSection}>
          <h2 className={styles.counterTitle}>✦ NOTRE VOYAGE COSMIQUE ✦</h2>
          <div className={styles.counterGrid}>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>{countdown.years}</span>
              <p className={styles.counterLabel}>Années</p>
            </div>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>{countdown.months}</span>
              <p className={styles.counterLabel}>Mois</p>
            </div>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>{countdown.days}</span>
              <p className={styles.counterLabel}>Jours</p>
            </div>
            <div className={styles.counterItem}>
              <span className={styles.counterNumber}>{countdown.hours}</span>
              <p className={styles.counterLabel}>Heures</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerConstellation}>✦ ✦ ✦ ✦ ✦</div>
          <h3 className={styles.footerNames}>
            Fatou <span className={styles.amp}>&</span> Ibrahim
          </h3>
          <p className={styles.footerQuote}>
            &ldquo;Nous sommes faits de poussière d&apos;étoiles, destinés à
            briller ensemble.&rdquo;
          </p>
          <div className={styles.footerSocial}>
            <a href="#" title="Instagram">
              📷
            </a>
            <a href="#" title="Facebook">
              📘
            </a>
            <a href="#" title="WhatsApp">
              💬
            </a>
          </div>
          <p className={styles.footerCredit}>
            ✦ Créé avec amour • Abidjan 2025 ✦
          </p>
        </footer>
      </div>

      {/* Music Toggle */}
      <div className={styles.musicContainer}>
        <div
          className={`${styles.musicInfo} ${isPlaying ? styles.musicInfoVisible : ""}`}
        >
          <span>{MUSIC_CONFIG.title}</span>
        </div>
        <button
          className={`${styles.musicToggle} ${isPlaying ? styles.musicPlaying : ""}`}
          onClick={toggleMusic}
        >
          {isPlaying ? "❚❚" : "♪"}
        </button>
      </div>
    </div>
  );
}

function TimelineItem({
  date,
  title,
  text,
  imageSrc,
}: {
  date: string;
  title: string;
  text: string;
  imageSrc: string;
}) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineCard}>
        <p className={styles.timelineDate}>{date}</p>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <p className={styles.timelineText}>{text}</p>
        <div className={styles.timelineImageContainer}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={styles.timelineImage}
          />
        </div>
      </div>
      <div className={styles.timelineStar}>✦</div>
    </div>
  );
}

function GalleryItem({
  title,
  location,
  imageSrc,
}: {
  title: string;
  location: string;
  imageSrc: string;
}) {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.galleryInner}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.galleryImage}
        />
      </div>
      <div className={styles.galleryOverlay}>
        <h4>{title}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
}
