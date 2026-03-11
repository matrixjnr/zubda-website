import Link from 'next/link';
import { Container } from '@/components/shared/Container';

const stats = [
  { value: '10,000+', label: 'Locations' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'Sync Latency' },
  { value: '15+', label: 'Modules' },
];

export function EnterpriseTeaser() {
  return (
    <section className="py-24 md:py-32 bg-zubda-900">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-400 mb-4">
            Enterprise
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-5">
            Built for today&apos;s SME.
            <br />
            Architected for tomorrow&apos;s enterprise.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            The same platform powers a single retail shop and a multi-country chain with thousands of locations. Horizontally sharded, real-time sync, modular by design.
          </p>
        </div>

        <div className="flex flex-wrap gap-16 mb-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <Link
          href="/enterprise/"
          className="inline-flex items-center px-8 py-3.5 text-base font-medium border border-white/20 text-white hover:bg-white/5 transition-colors"
        >
          Learn about Enterprise &rarr;
        </Link>
      </Container>
    </section>
  );
}
