'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function AmaraYvesPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const startDate = new Date('2020-02-14');

    const updateCountdown = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setCountdown({ years, months, days, hours });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 3600000);
    return () => clearInterval(interval);
  }, []);

  const scrollToStory = () => {
    document.querySelector(`.${styles.storySection}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMusicClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      alert('🎵 Ajoutez votre chanson tropicale préférée ici!');
    }
  };

  return (
    <div className={styles.container}>
      {/* Ocean Waves */}
      <div className={styles.oceanBg}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingItem}>🌴</div>
        <div className={styles.floatingItem}>🐚</div>
        <div className={styles.floatingItem}>🌺</div>
        <div className={styles.floatingItem}>🦋</div>
        <div className={styles.floatingItem}>🌸</div>
        <div className={styles.floatingItem}>🍃</div>
      </div>

      <div className={styles.content}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.sun}></div>
          <div className={styles.palmLeft}>🌴</div>
          <div className={styles.palmRight}>🌴</div>

          <div className={styles.heroBadge}>🌺 Notre Paradis 🌺</div>

          <div className={styles.heroPhotos}>
            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <div className={styles.photoPlaceholder}>Photo de<br />Amara</div>
                </div>
              </div>
            </div>

            <div className={styles.heartConnector}>❤️</div>

            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <div className={styles.photoPlaceholder}>Photo de<br />Yves</div>
                </div>
              </div>
            </div>
          </div>

          <h1 className={styles.heroNames}>Amara & Yves</h1>
          <p className={styles.heroTagline}>Notre histoire d&apos;amour sous les tropiques</p>

          <div className={styles.heroDate}>
            <span className={styles.icon}>🌴</span>
            <span>Ensemble depuis le 14.02.2020</span>
            <span className={styles.icon}>🌊</span>
          </div>

          <div className={styles.scrollIndicator} onClick={scrollToStory}>
            <span>Découvrir</span>
            <span>↓</span>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.storySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🌺</div>
            <h2 className={styles.sectionTitle}>Notre Histoire</h2>
            <p className={styles.sectionSubtitle}>Un amour né sous le soleil</p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyImageStack}>
              <div className={styles.storyImg}>
                <div className={styles.storyImgInner}>Photo 1</div>
              </div>
              <div className={styles.storyImg}>
                <div className={styles.storyImgInner}>Photo 2</div>
              </div>
            </div>

            <div className={styles.storyContent}>
              <h3>Le Début d&apos;une Aventure</h3>
              <p className={styles.storyText}>
                Notre histoire a commencé comme une douce brise océanique, légère
                et rafraîchissante. Dès notre première rencontre, j&apos;ai su que tu
                serais mon île au trésor, mon paradis personnel. Ensemble, nous
                avons construit un amour aussi profond que l&apos;océan et aussi
                brillant que le soleil tropical.
              </p>
              <p className={styles.storySignature}>- Avec amour, Yves 🌊</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🌅</div>
            <h2 className={styles.sectionTitle}>Nos Aventures</h2>
            <p className={styles.sectionSubtitle}>Les plus beaux moments de notre voyage</p>
          </div>

          <div className={styles.timeline}>
            <TimelineCard
              icon="💘"
              date="14 Février 2020"
              title="Premier Regard"
              text="Le jour où nos cœurs se sont trouvés, comme deux vagues qui se rencontrent."
            />
            <TimelineCard
              icon="🏖️"
              date="Juin 2021"
              title="Escapade à Assinie"
              text="Notre premier voyage ensemble, pieds dans le sable et cœurs en fête."
            />
            <TimelineCard
              icon="🎂"
              date="Février 2023"
              title="3 Ans de Bonheur"
              text="Un anniversaire célébré au coucher du soleil, promesses renouvelées."
            />
            <TimelineCard
              icon="💍"
              date="Décembre 2024"
              title="La Grande Demande"
              text="Tu as dit oui ! Notre plus belle aventure commence maintenant."
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>📸</div>
            <h2 className={styles.sectionTitle}>Nos Souvenirs</h2>
            <p className={styles.sectionSubtitle}>Glissez pour voir nos plus beaux moments →</p>
          </div>

          <div className={styles.galleryScroll}>
            <GalleryItem title="Coucher de Soleil" location="Grand-Bassam, 2022" />
            <GalleryItem title="Journée Plage" location="Assinie, 2023" />
            <GalleryItem title="Notre Restaurant" location="Cocody, 2023" />
            <GalleryItem title="Pique-nique" location="Banco, 2024" />
            <GalleryItem title="Noël Tropical" location="Décembre 2024" />
            <GalleryItem title="Anniversaire" location="Février 2025" />
          </div>
        </section>

        {/* Letter Section */}
        <section className={styles.letterSection}>
          <div className={styles.sectionHeader} style={{ color: 'white' }}>
            <div className={styles.sectionIcon}>💌</div>
            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Ma Lettre d&apos;Amour</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Les mots que mon cœur t&apos;écrit
            </p>
          </div>

          <div className={styles.letterContainer}>
            <div className={styles.letterCard}>
              <div className={styles.letterStamp}>🌴</div>

              <p className={styles.letterGreeting}>Mon Soleil ☀️</p>

              <div className={styles.letterBody}>
                <p>
                  Comme l&apos;océan a besoin de la lune, j&apos;ai besoin de toi. Tu es la
                  brise qui rafraîchit mes journées les plus chaudes, les vagues
                  qui bercent mes rêves les plus doux.
                </p>
                <p>
                  Chaque jour à tes côtés est une nouvelle aventure sous les
                  tropiques. Tu as transformé ma vie en un paradis permanent,
                  rempli de couleurs, de rires et d&apos;amour infini.
                </p>
                <p>
                  Je promets de t&apos;aimer comme l&apos;océan aime le rivage -
                  constamment, passionnément, éternellement. Tu es mon île au
                  trésor, mon horizon parfait. 🌺
                </p>
              </div>

              <div className={styles.letterSignature}>
                <p>Avec tout mon amour tropical,</p>
                <p className={styles.name}>Yves 🌊</p>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className={styles.counterSection}>
          <h2 className={styles.counterTitle}>🌴 Notre Voyage Ensemble 🌴</h2>
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
          <div className={styles.footerIcons}>🌴 🌺 🐚 🌊 ☀️</div>
          <h3 className={styles.footerNames}>Amara ❤️ Yves</h3>
          <p className={styles.footerQuote}>
            &ldquo;L&apos;amour est l&apos;océan où nos âmes se baignent ensemble&rdquo;
          </p>
          <div className={styles.footerSocial}>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="WhatsApp">💬</a>
          </div>
          <p className={styles.footerCredit}>🌺 Créé avec amour • Abidjan 2025 🌺</p>
        </footer>
      </div>

      {/* Music Button */}
      <button className={styles.musicBtn} onClick={handleMusicClick}>
        {isPlaying ? '🎶' : '🎵'}
      </button>
    </div>
  );
}

function TimelineCard({
  icon,
  date,
  title,
  text,
}: {
  icon: string;
  date: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.timelineCard}>
      <div className={styles.timelineIcon}>{icon}</div>
      <span className={styles.timelineDate}>{date}</span>
      <h3 className={styles.timelineTitle}>{title}</h3>
      <p className={styles.timelineText}>{text}</p>
    </div>
  );
}

function GalleryItem({ title, location }: { title: string; location: string }) {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.galleryInner}>Photo</div>
      <div className={styles.galleryCaption}>
        <h4>{title}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
}
