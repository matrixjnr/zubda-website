import Link from 'next/link';
import { Container } from '@/components/shared/Container';

export function HeroSection() {
  return (
    <section className="bg-zubda-900 pt-24 pb-32 md:pt-32 md:pb-40">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-400 mb-6">
            Cloud ERP
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-6 leading-[1.05]">
            The bottom line
            <br />
            for your business
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            Offline-first cloud ERP with full UAE VAT compliance.
            Accounting, inventory, POS, HR, and 15+ modules — one system
            that works even when the internet does not.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Link
              href="/pricing/"
              className="px-8 py-3.5 text-base font-medium bg-zubda-500 text-white hover:bg-zubda-600 transition-colors"
            >
              Start free trial
            </Link>
            <Link
              href="mailto:sales@zubda.com"
              className="px-8 py-3.5 text-base font-medium border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Talk to sales
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            No credit card required &middot; 14-day free trial &middot; All platforms
          </p>
        </div>
      </Container>
    </section>
  );
}
