import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'Scale from 1 to 10,000+ locations. Horizontally sharded, real-time sync, modular architecture.',
};

const scaleMetrics = [
  { value: '10,000+', label: 'Locations Supported' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'Sync Latency' },
  { value: '15+', label: 'Integrated Modules' },
  { value: '6', label: 'Platforms' },
  { value: '0', label: 'Per-Transaction Fees' },
];

const architectureCards = [
  {
    title: 'Unlimited Scalability',
    description: 'Horizontally sharded infrastructure that handles billions of transactions across tenant-partitioned clusters. Your data grows, your performance stays the same.',
  },
  {
    title: 'Real-Time Sync',
    description: 'Every device works independently and syncs automatically when online. Zero data loss, guaranteed consistency, and no manual reconciliation — even across unreliable connections.',
  },
  {
    title: 'Modular Growth',
    description: 'Clean module boundaries mean you only use what you need. Each capability (accounting, inventory, HR, sales) works independently and scales on its own schedule.',
  },
  {
    title: 'Native on Every Platform',
    description: 'Runs natively on macOS, Windows, Linux, iOS, and Android. Not a web wrapper — true native performance with a local database and offline-first architecture.',
  },
  {
    title: 'Multi-Tenant Security',
    description: 'Enterprise-grade tenant isolation at the database level. JWT authentication, role-based access control, full audit trails, and encrypted data at rest and in transit.',
  },
  {
    title: 'Global Ready',
    description: 'Multi-currency, multi-language data support, and configurable tax rules. Deep UAE/GCC compliance built in, with the flexibility to operate in any country and any regulatory environment.',
  },
];

const scaleJourney = [
  {
    title: 'Single Shop',
    locations: '1',
    description: 'One location, one device, one user. Full POS, inventory, and accounting.',
  },
  {
    title: 'Growing Business',
    locations: '2 - 10',
    description: 'Multiple locations, team management, purchasing, HR and payroll.',
  },
  {
    title: 'Regional Chain',
    locations: '10 - 100',
    description: 'Multi-location inventory, stock transfers, advanced analytics, approval workflows.',
  },
  {
    title: 'Enterprise',
    locations: '100 - 10,000+',
    description: 'Thousands of locations, dedicated infrastructure, custom integrations, SLA guarantee.',
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pb-32 bg-zubda-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
              Enterprise Scale
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              From one store<br />to ten thousand.
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
              Zubda is architected for the scale of tomorrow while being practical for the businesses of today. The same codebase powers a single retail shop and a multi-country chain.
            </p>
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section className="py-24 md:py-32 bg-zubda-800">
        <Container>
          <div className="flex flex-wrap justify-between items-start divide-x divide-gray-700">
            {scaleMetrics.map((metric) => (
              <div key={metric.label} className="flex-1 min-w-[140px] text-center py-4 px-4">
                <div className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
              Architecture
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#161616] mb-4">
              Built for reliability at any scale
            </h2>
            <p className="text-lg leading-relaxed text-[#525252]">
              Every design decision is made for uptime, performance, and your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureCards.map((card) => (
              <div
                key={card.title}
                className="border-l-2 border-zubda-500 pl-6 py-2"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#161616] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#525252]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scale Journey — Horizontal Timeline */}
      <section className="py-24 md:py-32 bg-[#f8f9fa]">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
              Scale With You
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#161616] mb-4">
              One platform, every stage of growth
            </h2>
            <p className="text-lg leading-relaxed text-[#525252]">
              No painful migration. No replatforming. Zubda grows from your first sale to your ten-thousandth location.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gray-300" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {scaleJourney.map((stage) => (
                <div key={stage.title} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block w-3 h-3 bg-zubda-500 mb-8" />
                  <p className="text-xs font-medium uppercase tracking-widest text-zubda-500 mb-2">
                    {stage.locations} Locations
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-[#161616] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#525252]">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-zubda-900 text-white">
        <Container className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
            Let us talk
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to scale?
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 mb-10 max-w-lg mx-auto">
            Talk to our enterprise team about a custom deployment tailored to your operations.
          </p>
          <a
            href="mailto:sales@zubda.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded bg-white text-[#161616] font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Sales
          </a>
        </Container>
      </section>
    </>
  );
}
