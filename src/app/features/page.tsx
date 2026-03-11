import type { Metadata } from 'next';
import { modules } from '@/lib/constants';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Features',
  description: 'POS, accounting, inventory, HR, purchasing, sales, trade, BOM and more. Explore all the modules that make Zubda the complete ERP.',
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pb-32 bg-zubda-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
              Capabilities
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Everything your business needs
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
              Each module works standalone or as part of the complete ERP. Data flows automatically — no imports, no exports, no reconciliation.
            </p>
          </div>
        </Container>
      </section>

      {/* Module List */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="space-y-0">
            {modules.map((module, i) => (
              <div
                key={module.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 ${
                  i !== modules.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                {/* Left: Module Name */}
                <div className="md:col-span-4">
                  <div className="border-l-2 border-zubda-500 pl-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-2">
                      {module.id.replace(/-/g, ' ')}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#161616]">
                      {module.name}
                    </h3>
                  </div>
                </div>

                {/* Right: Description + Features */}
                <div className="md:col-span-8">
                  <p className="text-lg leading-relaxed text-[#525252] mb-6">
                    {module.shortDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {module.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-[#525252]">
                        <span className="text-zubda-500 mt-0.5 flex-shrink-0">&#10003;</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {module.connections.length > 0 && module.connections[0] !== 'all' && (
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Connects to</span>
                      <span className="text-gray-300 mx-1">/</span>
                      {module.connections.map((conn, ci) => (
                        <span key={conn} className="text-xs text-[#525252]">
                          {conn}{ci < module.connections.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-zubda-900 text-white">
        <Container className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
            Get started
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to see it in action?
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 mb-10 max-w-lg mx-auto">
            Start your 14-day free trial and explore every module with your own data.
          </p>
          <a
            href="/pricing/"
            className="inline-flex items-center justify-center px-8 py-4 rounded bg-zubda-500 text-white font-semibold hover:bg-zubda-600 transition-colors"
          >
            Start Free Trial
          </a>
        </Container>
      </section>
    </>
  );
}
