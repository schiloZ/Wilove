import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Love Stories - Pages Romantiques',
  description: 'Collection de belles pages romantiques pour les couples',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
