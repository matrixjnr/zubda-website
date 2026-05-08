import type { Metadata } from 'next';
import { IBM_Plex_Sans, Noto_Sans_Arabic } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-ibm' });
const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://zubda.com'),
  title: {
    default: 'Zubda. Offline-First Cloud ERP',
    template: '%s | Zubda',
  },
  description: 'The offline-first cloud ERP for growing businesses. POS, accounting, inventory, HR, trade, and CRM that works even without internet. Trusted in the Middle East, East Africa, and Europe.',
  keywords: [
    // Core product
    'ERP', 'cloud ERP', 'ERP software', 'ERP system', 'offline ERP', 'business ERP', 'SME ERP', 'small business ERP',
    // POS
    'POS system', 'point of sale', 'POS software', 'retail POS', 'shop POS', 'restaurant POS', 'cloud POS',
    // Accounting
    'accounting software', 'bookkeeping software', 'invoicing software', 'VAT software', 'tax software', 'double entry accounting',
    // Inventory
    'inventory management', 'inventory software', 'stock management', 'warehouse management', 'barcode inventory',
    // HR
    'HR software', 'HR payroll', 'payroll software', 'employee management', 'attendance system', 'leave management', 'WPS payroll',
    // CRM
    'CRM', 'CRM software', 'customer management', 'sales pipeline', 'lead management', 'customer relationship management',
    // Trade
    'trade management', 'import export software', 'landed cost', 'multi-currency', 'foreign exchange',
    // Business tools
    'business software', 'business tools', 'business management', 'shop management', 'store management', 'shop automation',
    'retail software', 'retail management', 'wholesale software', 'distribution software',
    // Compliance
    'VAT compliance', 'FTA VAT', 'eTIMS Kenya', 'tax invoice', 'e-invoicing', 'QR code invoice',
    // Regional - UAE/GCC
    'Dubai ERP', 'UAE ERP', 'Abu Dhabi ERP', 'Saudi ERP', 'Qatar ERP', 'Doha business software', 'Jeddah ERP', 'Riyadh ERP',
    'GCC ERP', 'Dubai POS', 'UAE accounting', 'Dubai inventory', 'UAE business software', 'Dubai shop management',
    // Regional - East Africa
    'Kenya ERP', 'Nairobi ERP', 'Nairobi POS', 'Kenya POS', 'Kenya accounting', 'Kenya business software',
    'Uganda ERP', 'Tanzania ERP', 'Rwanda ERP', 'East Africa ERP', 'Nairobi shop management', 'M-Pesa POS',
    // Regional - Ireland/Europe
    'Ireland ERP', 'Dublin ERP', 'Dublin POS', 'Ireland accounting', 'Irish VAT software', 'Dublin business software',
    // Purchase/Procurement
    'purchasing software', 'procurement software', 'purchase order software', 'supplier management',
    // Quotations/Sales
    'quotation software', 'sales order management', 'billing software', 'invoice generator',
    // Other
    'offline business software', 'works without internet', 'free ERP', 'free POS', 'affordable ERP',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Zubda. POS, Accounting, Inventory, HR, CRM. All in One',
    description: 'The offline-first cloud ERP for growing businesses. POS, accounting, inventory, HR, CRM, and trade management. Works in Dubai, Nairobi, Dublin, and everywhere.',
    locale: 'en',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zubda',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'macOS, Windows, Linux, iOS, Android, Web',
    description: 'Offline-first cloud ERP with POS, accounting, inventory, HR, CRM, and trade management. Built for growing businesses.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '299',
      priceCurrency: 'USD',
      offerCount: '5',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50',
    },
    featureList: 'Point of Sale, Accounting, Inventory Management, HR & Payroll, CRM, Purchasing, Trade Management, E-Invoicing, Quotations, Reports, Multi-Currency, Offline Mode',
    availableOnDevice: 'Desktop, Mobile, Tablet, Web Browser',
    url: 'https://zubda.com',
  };

  return (
    <html lang="en">
      <body className={`${ibmPlex.variable} ${notoArabic.variable} font-sans antialiased bg-white text-[#161616]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* PostHog Analytics. replace phc_xxx with your project key */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageviewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY || ''}', {
                api_host: 'https://us.i.posthog.com',
                person_profiles: 'identified_only'
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
