import type { Metadata } from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    default: 'Zubda — Cloud ERP for the Gulf',
    template: '%s | Zubda',
  },
  description: 'Offline-first cloud ERP built for UAE and GCC businesses. Accounting, inventory, POS, HR, and more — with full FTA VAT compliance. Works anywhere in the world.',
  openGraph: {
    title: 'Zubda — Cloud ERP for the Gulf',
    description: 'Modern ERP system designed for businesses worldwide, with deep UAE and GCC compliance.',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${notoArabic.variable} font-sans antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
