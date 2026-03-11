import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const differentiators = [
  {
    icon: '📡',
    title: 'Offline-First',
    description: 'Works without internet. Your POS keeps selling, your warehouse keeps receiving. Everything syncs automatically when connectivity returns.',
  },
  {
    icon: '🌍',
    title: 'Gulf-Native, Globally Ready',
    description: 'Built from day one for FTA VAT, WPS payroll, Arabic invoices, and AED. Not a Western ERP with a localization patch — but versatile enough for any country.',
  },
  {
    icon: '⚡',
    title: 'Modern Stack',
    description: 'Built on Spring Boot, Flutter, and PostgreSQL — not 1990s technology with a fresh coat of paint. Native apps for macOS, Windows, Linux, iOS, and Android.',
  },
  {
    icon: '💰',
    title: 'Affordable',
    description: 'Enterprise features at SME prices. Start free, grow to enterprise. No per-transaction fees, no hidden costs, no consultant army required to go live.',
  },
];

export function WhyZubda() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeader
          badge="Why Zubda?"
          title="What makes us different"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((d, i) => (
            <AnimateOnScroll key={d.title} delay={i * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{d.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{d.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
