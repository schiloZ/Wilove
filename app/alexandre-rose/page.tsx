"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

// ============================================
// 🎵 CONFIGURATION DE LA MUSIQUE
// ============================================
// Pour changer la musique, modifie simplement cette URL
// Tu peux utiliser:
// - Un fichier local: "/music/ma-chanson.mp3" (place le fichier dans le dossier public/music/)
// - Une URL externe: "https://exemple.com/musique.mp3"
// ============================================
const MUSIC_CONFIG = {
  // URL de la musique (change cette ligne pour changer de musique)
  url: "/music/romantic2.mp3",

  // Volume initial (entre 0 et 1)
  initialVolume: 0.5,

  // Lecture en boucle
  loop: true,
};

export default function JeanMariePage() {
  const [countdown, setCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicTooltip, setShowMusicTooltip] = useState(true);
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

  // Masquer le tooltip après 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMusicTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToStory = () => {
    document
      .querySelector(`.${styles.storySection}`)
      ?.scrollIntoView({ behavior: "smooth" });
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
      setShowMusicTooltip(false);
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

      {/* Floating Hearts */}
      <div className={styles.floatingHearts}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.heart}>
            ♥
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.ornamentTop}>❦</div>

        <div className={styles.couplePhotos}>
          <div className={styles.photoFrame}>
            <Image
              src="/images/clients_alexandre_rose/alexandre.png"
              alt="Photo de Jean"
              width={180}
              height={180}
              className={styles.photoImage}
            />
          </div>
          <div className={styles.heartConnector}>♥</div>
          <div className={styles.photoFrame}>
            <Image
              src="/images/clients_alexandre_rose/rose.png"
              alt="Photo de Marie"
              width={180}
              height={180}
              className={styles.photoImage}
            />
          </div>
        </div>

        <h1 className={styles.heroTitle}>
          Alexandre <span>&</span> Rose
        </h1>
        <p className={styles.heroDate}>ENSEMBLE DEPUIS 14.02.2020</p>
        <p className={styles.heroQuote}>
          &ldquo;Dans tes yeux, j&apos;ai trouvé ma maison. Dans ton cœur,
          j&apos;ai trouvé mon amour. Dans ton âme, j&apos;ai trouvé mon
          meilleur ami.&rdquo;
        </p>

        <div className={styles.scrollIndicator} onClick={scrollToStory}>
          ↓
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <h2 className={styles.sectionTitle}>Notre Histoire</h2>
        <div className={styles.storyContent}>
          <p className={styles.storyText}>
            Tout a commencé un soir d&apos;été, quand nos regards se sont
            croisés pour la première fois. Ce qui semblait être une rencontre
            ordinaire s&apos;est transformé en une aventure extraordinaire.
            Depuis ce jour, nous avons partagé des rires, des rêves et des
            moments inoubliables qui ont forgé notre amour.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Nos Moments</h2>
        <div className={styles.timeline}>
          <TimelineItem
            date="14 Février 2020"
            title="Notre Première Rencontre"
            text="Le jour où nos chemins se sont croisés et où tout a changé pour toujours..."
            imageSrc="/images/clients_alexandre_rose/photo1.PNG"
          />
          <TimelineItem
            date="21 Mars 2020"
            title="Notre Premier Voyage"
            text="Une escapade romantique qui a scellé notre amour à jamais..."
            imageSrc="/images/clients_alexandre_rose/photo2.PNG"
          />
          <TimelineItem
            date="14 Février 2021"
            title="Un An d'Amour"
            text="Notre premier anniversaire, célébré sous les étoiles..."
            imageSrc="/images/clients_alexandre_rose/photo3.PNG"
          />
          <TimelineItem
            date="25 Décembre 2023"
            title="La Demande"
            text='Le plus beau "oui" de notre vie, le début d&apos;une nouvelle aventure...'
            imageSrc="/images/clients_alexandre_rose/photo4.PNG"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Notre Galerie</h2>
        <div className={styles.galleryGrid}>
          <GalleryItem
            title="Soirée Romantique"
            location="Paris, 2022"
            imageSrc="/images/clients_alexandre_rose/photo1.PNG"
            large
          />
          <GalleryItem
            title="Vacances d'Été"
            location="Nice, 2023"
            imageSrc="/images/clients_alexandre_rose/photo2.PNG"
          />
          <GalleryItem
            title="Noël en Famille"
            location="Lyon, 2023"
            imageSrc="/images/clients_alexandre_rose/photo3.PNG"
          />
          <GalleryItem
            title="Notre Coin Préféré"
            location="Abidjan, 2024"
            imageSrc="/images/clients_alexandre_rose/photo4.PNG"
          />
          <GalleryItem
            title="Coucher de Soleil"
            location="Grand-Bassam, 2024"
            imageSrc="/images/clients_alexandre_rose/photo5.PNG"
          />
        </div>
      </section>

      {/* Love Letter Section */}
      <section className={styles.letterSection}>
        <h2 className={styles.sectionTitle}>Ma Lettre d&apos;Amour</h2>
        <div className={styles.letterContainer}>
          <div className={styles.letterHeader}>
            <span className={styles.letterDate}>
              Abidjan, le 14 février 2025
            </span>
          </div>
          <p className={styles.letterGreeting}>Mon amour,</p>
          <div className={styles.letterBody}>
            <p>
              Chaque jour passé à tes côtés est un cadeau que je chéris de tout
              mon cœur. Tu es ma lumière dans l&apos;obscurité, mon refuge dans
              la tempête, et mon plus grand bonheur.
            </p>
            <p>
              Je me souviens encore de ce premier regard, de ce premier sourire
              qui a fait battre mon cœur comme jamais auparavant. Depuis ce
              jour, tu as transformé ma vie en une magnifique aventure.
            </p>
            <p>
              Je promets de t&apos;aimer, de te chérir et de te protéger pour le
              reste de ma vie. Tu es mon âme sœur, mon meilleur ami, et
              l&apos;amour de ma vie.
            </p>
          </div>
          <div className={styles.letterSignature}>
            <p>Avec tout mon amour,</p>
            <p className={styles.name}>Alexandre</p>
          </div>
          <div className={styles.waxSeal}>♥</div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className={styles.countdownSection}>
        <h2 className={styles.countdownTitle}>Ensemble Depuis</h2>
        <div className={styles.countdownGrid}>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.years}</span>
            <span className={styles.countdownLabel}>Années</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.months}</span>
            <span className={styles.countdownLabel}>Mois</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.days}</span>
            <span className={styles.countdownLabel}>Jours</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownNumber}>{countdown.hours}</span>
            <span className={styles.countdownLabel}>Heures</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerQuote}>
          &ldquo;L&apos;amour ne se voit pas avec les yeux, mais avec
          l&apos;âme.&rdquo;
        </p>
        <p className={styles.footerNames}>Alexandre ♥ Rose</p>
        <p className={styles.footerCredit}>Créé avec amour • 2025</p>
      </footer>

      {/* Music Toggle Button */}
      <div className={styles.musicContainer}>
        {showMusicTooltip && (
          <div className={styles.musicTooltip}>Cliquez pour la musique 🎵</div>
        )}
        <div
          className={`${styles.musicToggle} ${isPlaying ? styles.musicPlaying : ""}`}
          onClick={toggleMusic}
          title={isPlaying ? "Pause" : "Jouer la musique"}
        >
          {isPlaying ? "❚❚" : "♪"}
        </div>
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
      <div className={styles.timelineContent}>
        <div className={styles.timelineDate}>{date}</div>
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
      <div className={styles.timelineDot}></div>
    </div>
  );
}

function GalleryItem({
  title,
  location,
  imageSrc,
  large = false,
}: {
  title: string;
  location: string;
  imageSrc: string;
  large?: boolean;
}) {
  return (
    <div
      className={`${styles.galleryItem} ${large ? styles.galleryLarge : ""}`}
    >
      <Image src={imageSrc} alt={title} fill className={styles.galleryImage} />
      <div className={styles.galleryOverlay}>
        <h4>{title}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
}
