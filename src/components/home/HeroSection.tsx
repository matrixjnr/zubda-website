import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-32 md:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-zubda-100/30 dark:bg-zubda-900/20 blur-3xl" />
      </div>

      <Container className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-zubda-50 text-zubda-600 dark:bg-zubda-950 dark:text-zubda-300 mb-6">
          Cloud ERP — Works Everywhere
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          The bottom line
          <br />
          for your business.
        </h1>
        <p className="font-arabic text-4xl md:text-6xl font-bold text-zubda-500 mb-8">
          زبدة
        </p>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Offline-first cloud ERP with full UAE VAT compliance.
          Accounting, inventory, POS, HR, and 15+ modules — one system
          that works even when the internet does not.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button href="#" size="lg">Start Free Trial</Button>
          <Button href="#" variant="secondary" size="lg">Book a Demo &rarr;</Button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500">
          No credit card required &middot; 14-day free trial &middot; All platforms
        </p>
      </Container>
    </section>
  );
}
