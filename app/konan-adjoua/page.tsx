"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function KonanAdjouaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    // Preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Countdown
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

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMusicClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      alert("🎵 Ajoutez votre chanson romantique préférée ici!");
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {/* Preloader */}
      <div className={`${styles.preloader} ${!isLoading ? styles.hidden : ""}`}>
        <div className={styles.preloaderHeart}>♥</div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>K & A</div>
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
        <div className={styles.heroBg}>
          <div className={styles.particles}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className={styles.particle}></div>
            ))}
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroPhotos}>
            <div className={styles.heroPhoto}>
              <div className={styles.heroPhotoInner}>
                Photo de
                <br />
                Monsieur
              </div>
            </div>
            <div className={styles.heroDivider}>♥</div>
            <div className={styles.heroPhoto}>
              <div className={styles.heroPhotoInner}>
                Photo de
                <br />
                Adjoua
              </div>
            </div>
          </div>

          <p className={styles.heroSubtitle}>Une Histoire d&apos;Amour</p>
          <h1 className={styles.heroTitle}>
            Konan <span className={styles.amp}>&</span> Adjoua
          </h1>
          <p className={styles.heroDate}>Depuis le 14 Février 2020</p>
        </div>

        <div className={styles.heroScroll} onClick={scrollToStory}>
          <span>Découvrir</span>
          <div className={styles.heroScrollLine}></div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection} id="story">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Comment Tout a Commencé</p>
          <h2 className={styles.sectionTitle}>Notre Histoire</h2>
          <div className={styles.goldLine}></div>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <span className={styles.storyImagePlaceholder}>
              Photo du Couple
            </span>
          </div>
          <div className={styles.storyContent}>
            <p className={styles.storyQuote}>
              L&apos;amour n&apos;est pas seulement un sentiment, c&apos;est un
              art.
            </p>
            <p className={styles.storyText}>
              Notre histoire a commencé un soir d&apos;harmattan à Abidjan,
              quand le destin a décidé de croiser nos chemins. Ce qui a commencé
              par un simple regard est devenu une aventure extraordinaire, une
              symphonie de moments partagés et de rêves construits ensemble.
              Chaque jour avec toi est une nouvelle page de notre belle
              histoire.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection} id="moments">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Nos Chapitres</p>
          <h2 className={styles.sectionTitle}>Moments Précieux</h2>
          <div className={styles.goldLine}></div>
        </div>

        <div className={styles.timeline}>
          <TimelineItem
            year="2020"
            date="14 Février 2020"
            title="Le Premier Regard: PHOTO POSITION 1"
            text="Un soir magique où nos yeux se sont croisés pour la première fois. Le début d'une aventure inoubliable."
          />
          <TimelineItem
            year="2021"
            date="20 Juin 2021"
            title="Notre Premier Voyage: PHOTO POSITION 2"
            text="Grand-Bassam, la mer, et nous deux. Des souvenirs gravés à jamais dans nos cœurs."
          />
          <TimelineItem
            year="2023"
            date="25 Décembre 2023"
            title="La Demande: PHOTO POSITION 3"
            text="Sous les étoiles de Noël, j'ai posé le genou à terre. Tu as dit oui, et ma vie a changé pour toujours."
          />
          <TimelineItem
            year="2025"
            date="14 Février 2025"
            title="5 Ans d'Amour: PHOTO POSITION 4"
            text="Cinq années de bonheur, de complicité et d'amour inconditionnel. Ce n'est que le début."
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection} id="gallery">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTag}>Souvenirs</p>
          <h2 className={styles.sectionTitle}>Notre Galerie</h2>
          <div className={styles.goldLine}></div>
        </div>

        <div className={styles.galleryMasonry}>
          <GalleryItem
            title="Soirée Romantique"
            location="Abidjan, 2022"
            height={350}
          />
          <GalleryItem
            title="À la Plage"
            location="Grand-Bassam, 2021"
            height={250}
          />
          <GalleryItem
            title="Notre Restaurant"
            location="Cocody, 2023"
            height={300}
          />
          <GalleryItem
            title="Coucher de Soleil"
            location="Assinie, 2024"
            height={400}
          />
          <GalleryItem
            title="Fête de Noël"
            location="En Famille, 2023"
            height={280}
          />
          <GalleryItem
            title="Notre Anniversaire"
            location="14 Février 2024"
            height={320}
          />
          <GalleryItem
            title="En Balade"
            location="Plateau, 2022"
            height={260}
          />
          <GalleryItem
            title="Notre Coin Secret"
            location="Bingerville, 2024"
            height={380}
          />
        </div>
      </section>

      {/* Letter Section */}
      <section className={styles.letterSection} id="letter">
        <div className={styles.letterWrapper}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTag}>De Mon Cœur au Tien</p>
            <h2 className={styles.sectionTitle}>Ma Lettre d&apos;Amour</h2>
            <div className={styles.goldLine}></div>
          </div>

          <div className={styles.letterFrame}>
            <p className={styles.letterTo}>Mon Amour,</p>
            <div className={styles.letterBody}>
              <p>
                Chaque matin, quand je me réveille à tes côtés, je remercie le
                ciel de t&apos;avoir mise sur ma route. Tu es la mélodie qui
                fait danser mon cœur, la lumière qui illumine mes jours les plus
                sombres.
              </p>
              <p>
                Je me souviens de ce premier regard, de ce premier sourire qui a
                fait basculer mon monde. Depuis ce jour, tu as transformé chaque
                instant ordinaire en un moment extraordinaire.
              </p>
              <p>
                Tu es mon rêve devenu réalité, ma meilleure amie, mon âme sœur.
                Je promets de t&apos;aimer, de te chérir et de te protéger
                jusqu&apos;à mon dernier souffle.
              </p>
            </div>
            <div className={styles.letterSignature}>
              <p>Avec tout mon amour,</p>
              <p className={styles.signatureName}>Konan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className={styles.counterSection}>
        <h2 className={styles.counterTitle}>Notre Amour en Chiffres</h2>
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
        <h3 className={styles.footerNames}>
          Konan <span className={styles.amp}>&</span> Adjoua
        </h3>
        <p className={styles.footerQuote}>
          &ldquo;L&apos;amour est l&apos;éternel printemps de l&apos;âme.&rdquo;
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
        <p className={styles.footerCredit}>Créé avec ♥ • Abidjan 2025</p>
      </footer>

      {/* Music Player */}
      <div className={styles.musicPlayer}>
        <button className={styles.musicBtn} onClick={handleMusicClick}>
          {isPlaying ? "⏸" : "▶"}
        </button>
        <div className={styles.musicInfo}>
          <p>En cours de lecture:</p>
          <p className={styles.musicTitle}>Notre Chanson ♪</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  year,
  date,
  title,
  text,
}: {
  year: string;
  date: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineContent}>
        <span className={styles.timelineYear}>{year}</span>
        <p className={styles.timelineDate}>{date}</p>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <p className={styles.timelineText}>{text}</p>
      </div>
      <div className={styles.timelineDot}></div>
    </div>
  );
}

function GalleryItem({
  title,
  location,
  height,
}: {
  title: string;
  location: string;
  height: number;
}) {
  return (
    <div className={styles.galleryItem}>
      <div
        className={styles.galleryItemInner}
        style={{ height: `${height}px` }}
      >
        Photo
      </div>
      <div className={styles.galleryOverlay}>
        <h4>{title}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
}
