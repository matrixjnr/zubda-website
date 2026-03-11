import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { Button } from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'Scale from 1 to 10,000+ locations. PostgreSQL + Citus sharding, event-driven sync, modular architecture.',
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
    icon: '🗄️',
    title: 'PostgreSQL + Citus',
    description: 'The world\'s most advanced open-source database with horizontal sharding via Citus. Handle billions of rows across tenant-partitioned clusters. Proven at scale by companies like Microsoft, Walmart, and Cloudflare.',
  },
  {
    icon: '🔄',
    title: 'Event-Driven Sync',
    description: 'Commands up, facts down. Every device works independently and syncs automatically when online. Idempotent processing, contiguous watermarks, and transaction-boundary consistency ensure zero data loss.',
  },
  {
    icon: '🧱',
    title: 'Modular Monolith',
    description: 'Clean module boundaries with Spring Modulith. Each module (accounting, inventory, HR, sales) has its own domain, services, and APIs. Extract any module to a separate microservice when scale demands it.',
  },
  {
    icon: '📱',
    title: 'Native on Every Platform',
    description: 'Single Flutter codebase runs natively on macOS, Windows, Linux, iOS, and Android. Not a web wrapper — true native performance with local SQLite database and offline-first architecture.',
  },
  {
    icon: '🔐',
    title: 'Multi-Tenant Security',
    description: 'Enterprise-grade tenant isolation at the database level. JWT authentication, role-based access control, full audit trails, and encrypted data at rest and in transit.',
  },
  {
    icon: '🌍',
    title: 'Global Ready',
    description: 'Multi-currency, multi-language data support, and configurable tax rules. Deep UAE/GCC compliance built in, with the flexibility to operate in any country and any regulatory environment.',
  },
];

const scaleComparisons = [
  {
    title: 'Single Shop',
    description: 'One location, one device, one user. Full POS, inventory, and accounting.',
    scale: '1',
  },
  {
    title: 'Growing Business',
    description: 'Multiple locations, team management, purchasing, HR and payroll.',
    scale: '2-10',
  },
  {
    title: 'Regional Chain',
    description: 'Multi-location inventory, stock transfers, advanced analytics, approval workflows.',
    scale: '10-100',
  },
  {
    title: 'Enterprise',
    description: 'Thousands of locations, dedicated infrastructure, custom integrations, SLA guarantee.',
    scale: '100-10,000+',
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gray-900 text-white">
        <Container className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-zubda-500/20 text-zubda-300 mb-6">
            Enterprise Scale
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            From one store<br />to ten thousand.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Zubda is architected for the scale of tomorrow while being practical for the businesses of today. The same codebase powers a single retail shop and a multi-country chain.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {scaleMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zubda-400 mb-1">{metric.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <Container>
          <SectionHeader
            badge="Architecture"
            title="Built on proven foundations"
            subtitle="Every technology choice is made for reliability, performance, and scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 75}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-zubda-300 dark:hover:border-zubda-600 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Scale Journey */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeader
            badge="Scale With You"
            title="One platform, every stage of growth"
            subtitle="No painful migration. No replatforming. Zubda grows from your first sale to your ten-thousandth location."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {scaleComparisons.map((stage, i) => (
              <AnimateOnScroll key={stage.title} delay={i * 100}>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-xs font-bold text-zubda-500 uppercase tracking-wider mb-2">{stage.scale} Locations</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{stage.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stage.description}</p>
                  {i < scaleComparisons.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-gray-300 dark:text-gray-600 text-xl">&rarr;</div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture diagram (simplified CSS) */}
      <section className="py-20">
        <Container>
          <SectionHeader
            badge="How It Works"
            title="Sync architecture"
            subtitle="Commands flow up from devices. Facts flow down from the server. Every device converges to the same state."
          />

          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto">
              {/* Devices layer */}
              <div className="flex justify-center gap-4 mb-4">
                {['macOS', 'Windows', 'Linux', 'iOS', 'Android', 'Web'].map((platform) => (
                  <div key={platform} className="px-3 py-2 rounded-lg bg-zubda-50 dark:bg-zubda-950 text-xs font-medium text-zubda-600 dark:text-zubda-300 border border-zubda-200 dark:border-zubda-800">
                    {platform}
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400 mb-1">Commands &uarr;</span>
                  <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
                  <span className="text-xs text-gray-400 mt-1">&darr; Facts</span>
                </div>
              </div>

              {/* Server layer */}
              <div className="border-2 border-zubda-500 rounded-2xl p-6 mb-4">
                <div className="text-center text-sm font-bold text-zubda-500 mb-3">Spring Boot Server</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Accounting', 'Inventory', 'Sales', 'HR', 'Purchasing', 'Sync', 'Auth', 'Products'].map((mod) => (
                    <span key={mod} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center my-2">
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
              </div>

              {/* Database layer */}
              <div className="text-center">
                <div className="inline-block px-6 py-3 rounded-xl bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium">
                  PostgreSQL + Citus (Sharded Multi-Tenant)
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zubda-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to scale?</h2>
          <p className="text-zubda-100 mb-8 max-w-lg mx-auto">Talk to our enterprise team about a custom deployment tailored to your operations.</p>
          <Button href="#" size="lg" className="bg-white text-zubda-600 hover:bg-zubda-50 shadow-none">
            Contact Sales
          </Button>
        </Container>
      </section>
    </>
  );
}
