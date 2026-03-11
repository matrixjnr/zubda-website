import type { Metadata } from 'next';
import { IBM_Plex_Sans, Noto_Sans_Arabic } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-ibm' });
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
    <html lang="en">
      <body className={`${ibmPlex.variable} ${notoArabic.variable} font-sans antialiased bg-white text-[#161616]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
