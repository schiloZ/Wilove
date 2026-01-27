"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

// ============================================
// 🎵 CONFIGURATION DE LA MUSIQUE
// ============================================
const MUSIC_CONFIG = {
  url: "/music/romantic-song.mp3",
  initialVolume: 0.5,
  loop: true,
  title: "Notre Chanson 💕",
};

export default function AyaMarcPage() {
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

      {/* Animated Background */}
      <div className={styles.bgAnimation}>
        <div className={styles.bgBlob}></div>
        <div className={styles.bgBlob}></div>
        <div className={styles.bgBlob}></div>
      </div>

      {/* Floating Hearts */}
      <div className={styles.heartsContainer}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.floatingHeart}>
            💕
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>
            💕 Notre Histoire d&apos;Amour 💕
          </div>

          <div className={styles.heroPhotos}>
            <div className={styles.photoWrapper}>
              <div className={styles.photoRing}></div>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <Image
                    src="/images/marie.png"
                    alt="Photo de Aya"
                    fill
                    className={styles.photoImage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.heartConnector}>
              <span>💕</span>
            </div>

            <div className={styles.photoWrapper}>
              <div className={styles.photoRing}></div>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <Image
                    src="/images/jean.png"
                    alt="Photo de Marc"
                    fill
                    className={styles.photoImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className={styles.heroNames}>Aya & Marc</h1>

          <div className={styles.heroDate}>
            <span className={styles.heartIcon}>💕</span>
            <span>Ensemble depuis le 14.02.2020</span>
            <span className={styles.heartIcon}>💕</span>
          </div>

          <p className={styles.heroQuote}>
            &ldquo;Tu es mon plus beau rêve devenu réalité&rdquo;
          </p>

          <div className={styles.scrollDown} onClick={scrollToStory}>
            <span>Découvrir</span>
            <span>↓</span>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>💕</div>
            <h2 className={styles.sectionTitle}>Notre Histoire</h2>
            <p className={styles.sectionSubtitle}>Comment tout a commencé</p>
          </div>

          <div className={styles.storyCard}>
            <p className={styles.storyText}>
              Notre histoire a commencé comme dans un conte de fées. Un regard,
              un sourire, et mon cœur savait déjà que tu étais l&apos;amour de
              ma vie. Depuis ce jour magique, chaque moment passé à tes côtés
              est une bénédiction. Tu as transformé ma vie en une aventure
              merveilleuse remplie de rires, de tendresse et d&apos;amour
              inconditionnel.
            </p>

            <div className={styles.storyImageGrid}>
              <div className={styles.storyImg}>
                <Image
                  src="/images/couple1.png"
                  alt="Photo Souvenir 1"
                  fill
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImg}>
                <Image
                  src="/images/couple2.png"
                  alt="Photo Souvenir 2"
                  fill
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.storyImg}>
                <Image
                  src="/images/couple3.png"
                  alt="Photo Souvenir 3"
                  fill
                  className={styles.storyImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>📅</div>
            <h2 className={styles.sectionTitle}>Nos Moments Magiques</h2>
            <p className={styles.sectionSubtitle}>Les étapes de notre amour</p>
          </div>

          <div className={styles.timeline}>
            <TimelineItem
              date="14 Février 2020"
              title="Notre Rencontre 💫"
              text="Le jour où nos regards se sont croisés et où mon cœur a su que c'était toi."
              imageSrc="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop"
            />
            <TimelineItem
              date="1 Juin 2020"
              title="Premier Voyage 🌴"
              text="Notre escapade à Grand-Bassam, entre plage et couchers de soleil romantiques."
              imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
            />
            <TimelineItem
              date="14 Février 2022"
              title="Deux Ans d'Amour 💕"
              text="Un dîner aux chandelles pour célébrer notre amour grandissant."
              imageSrc="/images/us2.png"
            />
            <TimelineItem
              date="25 Décembre 2024"
              title="La Demande 💍"
              text="Tu as dit OUI ! Le plus beau jour de ma vie commence avec cette promesse."
              imageSrc="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=400&fit=crop"
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>📸</div>
            <h2 className={styles.sectionTitle}>Notre Galerie</h2>
            <p className={styles.sectionSubtitle}>
              Nos plus beaux souvenirs en images
            </p>
          </div>

          <div className={styles.galleryGrid}>
            <GalleryItem
              title="Notre Coin Préféré"
              location="Abidjan, 2023"
              imageSrc="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop"
            />
            <GalleryItem
              title="À la Plage"
              location="Assinie, 2022"
              imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="Soirée Romantique"
              location="Cocody, 2023"
              imageSrc="https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="En Balade"
              location="Plateau, 2024"
              imageSrc="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=400&fit=crop"
            />
            <GalleryItem
              title="Noël en Amoureux"
              location="Décembre 2024"
              imageSrc="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&h=400&fit=crop"
            />
            <GalleryItem
              title="Notre Anniversaire"
              location="14 Février 2025"
              imageSrc="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=400&fit=crop"
            />
          </div>
        </section>

        {/* Letter Section */}
        <section className={styles.letterSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>💌</div>
            <h2 className={styles.sectionTitle}>Ma Lettre d&apos;Amour</h2>
            <p className={styles.sectionSubtitle}>Les mots de mon cœur</p>
          </div>

          <div className={styles.letterEnvelope}>
            <div className={styles.envelopeFlap}></div>
            <div className={styles.letterPaper}>
              <div className={styles.letterHeartSeal}>💕</div>

              <p className={styles.letterGreeting}>Mon Amour,</p>

              <div className={styles.letterBody}>
                <p>
                  Chaque jour à tes côtés est un cadeau du ciel. Tu as
                  transformé ma vie en un conte de fées dont je ne veux jamais
                  me réveiller. Ton sourire illumine mes journées, ta présence
                  réchauffe mon cœur.
                </p>
                <p>
                  Je me souviens de chaque moment partagé avec toi comme si
                  c&apos;était hier. Nos rires, nos rêves, nos projets... tout
                  avec toi prend une dimension magique.
                </p>
                <p>
                  Je promets de t&apos;aimer aujourd&apos;hui, demain et pour
                  toujours. Tu es mon âme sœur, ma meilleure amie, mon tout. Je
                  t&apos;aime plus que les mots ne peuvent l&apos;exprimer. 💕
                </p>
              </div>

              <div className={styles.letterSignature}>
                <p>Avec tout mon amour,</p>
                <p className={styles.name}>Marc 💕</p>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className={styles.counterSection}>
          <h2 className={styles.counterTitle}>💕 Notre Amour en Chiffres 💕</h2>
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
          <h3 className={styles.footerNames}>Aya 💕 Marc</h3>
          <p className={styles.footerQuote}>
            &ldquo;L&apos;amour est la poésie des sens&rdquo;
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
          <p className={styles.footerCredit}>Créé avec 💕 • Abidjan 2025</p>
        </footer>
      </div>

      {/* Music Button */}
      <div className={styles.musicContainer}>
        <div className={styles.musicInfo}>
          <span>{isPlaying ? "▶ En lecture" : "🎵 Musique"}</span>
          <span className={styles.musicTitle}>{MUSIC_CONFIG.title}</span>
        </div>
        <button
          className={`${styles.musicBtn} ${isPlaying ? styles.playing : ""}`}
          onClick={toggleMusic}
        >
          {isPlaying ? "❚❚" : "▶"}
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
        <span className={styles.timelineDate}>{date}</span>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <p className={styles.timelineText}>{text}</p>
        <div className={styles.timelineImg}>
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
