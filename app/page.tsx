'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}>♥</div>
          ))}
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Love Stories</h1>
        <p className={styles.subtitle}>Collection de Pages Romantiques</p>
        
        <div className={styles.cardGrid}>
          <Link href="/jean-marie" className={styles.card}>
            <div className={styles.cardImage} style={{ background: 'linear-gradient(135deg, #fff5f5, #f5e6d3)' }}>
              <span className={styles.cardIcon}>💕</span>
            </div>
            <div className={styles.cardContent}>
              <h2>Jean & Marie</h2>
              <p>Thème Rose & Or - Style Romantique Classique</p>
              <span className={styles.cardLink}>Voir la page →</span>
            </div>
          </Link>

          <Link href="/konan-adjoua" className={styles.card}>
            <div className={styles.cardImage} style={{ background: 'linear-gradient(135deg, #141414, #1a1a1a)' }}>
              <span className={styles.cardIcon}>✨</span>
            </div>
            <div className={styles.cardContent}>
              <h2>Konan & Adjoua</h2>
              <p>Thème Noir & Or - Style Luxe Élégant</p>
              <span className={styles.cardLink}>Voir la page →</span>
            </div>
          </Link>

          <Link href="/aya-marc" className={styles.card}>
            <div className={styles.cardImage} style={{ background: 'linear-gradient(135deg, #ff69b4, #ec4899, #f0abfc)' }}>
              <span className={styles.cardIcon}>💗</span>
            </div>
            <div className={styles.cardContent}>
              <h2>Aya & Marc</h2>
              <p>Thème Pink & Magenta - Style Playful</p>
              <span className={styles.cardLink}>Voir la page →</span>
            </div>
          </Link>

          <Link href="/fatou-ibrahim" className={styles.card}>
            <div className={styles.cardImage} style={{ background: 'linear-gradient(135deg, #0a0a1a, #1a1a4e, #7c3aed)' }}>
              <span className={styles.cardIcon}>⭐</span>
            </div>
            <div className={styles.cardContent}>
              <h2>Fatou & Ibrahim</h2>
              <p>Thème Étoiles & Cosmos - Style Céleste</p>
              <span className={styles.cardLink}>Voir la page →</span>
            </div>
          </Link>

          <Link href="/amara-yves" className={styles.card}>
            <div className={styles.cardImage} style={{ background: 'linear-gradient(135deg, #ff8c42, #00b4d8, #0077b6)' }}>
              <span className={styles.cardIcon}>🌴</span>
            </div>
            <div className={styles.cardContent}>
              <h2>Amara & Yves</h2>
              <p>Thème Tropical & Plage - Style Paradise</p>
              <span className={styles.cardLink}>Voir la page →</span>
            </div>
          </Link>
        </div>

        <p className={styles.footer}>
          5 magnifiques thèmes disponibles 💖
        </p>
      </main>
    </div>
  );
}
