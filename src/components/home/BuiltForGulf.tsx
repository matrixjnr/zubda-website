import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const badges = [
  { icon: '🏛️', title: 'FTA VAT Ready', description: 'Full UAE Federal Tax Authority compliance' },
  { icon: '💰', title: 'WPS Payroll', description: 'UAE Wage Protection System integration' },
  { icon: '📄', title: 'Tax Invoices', description: 'QR-coded invoices per FTA standards' },
  { icon: '🌍', title: 'Arabic Bilingual', description: 'Arabic support for docs and data' },
  { icon: '🔒', title: 'Data Security', description: 'Enterprise-grade tenant isolation' },
];

export function BuiltForGulf() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeader
          badge="UAE/GCC + Global"
          title="Built for the Gulf, ready for the world"
          subtitle="Deep UAE and GCC regulatory compliance out of the box — with the flexibility to run your business anywhere."
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <AnimateOnScroll key={badge.title} delay={i * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-zubda-300 dark:hover:border-zubda-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl mb-3">{badge.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{badge.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
