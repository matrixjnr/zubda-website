import type { Metadata } from 'next';
import { modules } from '@/lib/constants';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Features',
  description: 'POS, accounting, inventory, HR, purchasing, sales, trade, BOM and more. Explore all the modules that make Zubda the complete ERP.',
};

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-20 pb-12">
        <Container>
          <SectionHeader
            badge="15+ Integrated Modules"
            title="Everything your business needs. Nothing it does not."
            subtitle="Each module works standalone or as part of the complete ERP. Data flows automatically — no imports, no exports, no reconciliation."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="space-y-8">
            {modules.map((module, i) => (
              <AnimateOnScroll key={module.id} delay={i * 50}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-zubda-300 dark:hover:border-zubda-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-zubda-50 dark:bg-zubda-950 flex items-center justify-center text-3xl">
                        {module.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{module.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{module.shortDescription}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {module.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {module.connections.length > 0 && module.connections[0] !== 'all' && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-xs text-gray-400">Connects to:</span>
                          {module.connections.map((conn) => (
                            <span key={conn} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                              {conn}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-zubda-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-zubda-100 mb-8 max-w-lg mx-auto">Start your 14-day free trial and explore every module with your own data.</p>
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-zubda-600 font-semibold hover:bg-zubda-50 transition-colors">
            Start Free Trial
          </a>
        </Container>
      </section>
    </>
  );
}
