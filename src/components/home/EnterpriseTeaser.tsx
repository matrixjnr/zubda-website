import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const stats = [
  { value: '10,000+', label: 'Stores Supported' },
  { value: '99.9%', label: 'Uptime Target' },
  { value: '<100ms', label: 'Sync Latency' },
  { value: '15+', label: 'Modules Integrated' },
];

export function EnterpriseTeaser() {
  return (
    <section className="py-20 md:py-28 bg-gray-900 dark:bg-gray-950 text-white">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-zubda-500/20 text-zubda-300 mb-6">
              Enterprise Ready
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for today&apos;s SME.<br />
              Architected for tomorrow&apos;s enterprise.
            </h2>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Zubda&apos;s modular architecture scales from a single retail shop to
              multi-country operations with thousands of locations. Horizontally
              sharded infrastructure, real-time sync, and a design
              that grows with your business.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zubda-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Button href="/enterprise/" variant="secondary" size="lg" className="border-zubda-400 text-zubda-400 hover:bg-zubda-950">
            Learn about Enterprise &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
