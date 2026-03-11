import type { Metadata } from 'next';
import { complianceAreas } from '@/lib/constants';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'UAE/GCC Compliance',
  description: 'FTA VAT compliance, WPS payroll, Arabic bilingual invoices with QR codes. Compliance built in, not bolted on.',
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12">
        <Container>
          <SectionHeader
            badge="UAE / GCC Compliance"
            title="Compliance is not an add-on. It is the foundation."
            subtitle="Zubda is built from the ground up for UAE and GCC regulatory requirements. Every feature respects local tax law, labor law, and business practices — while remaining flexible for use anywhere in the world."
          />
        </Container>
      </section>

      {/* Compliance Areas */}
      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, i) => (
              <AnimateOnScroll key={area.title} delay={i * 75}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-zubda-300 dark:hover:border-zubda-600 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zubda-50 dark:bg-zubda-950 flex items-center justify-center text-2xl flex-shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{area.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Global flexibility */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Gulf roots. Global reach.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                While Zubda has deep UAE and GCC compliance built in, the system is designed to be
                versatile. Configurable tax rules, multi-currency support, and flexible localization
                mean you can run your business from Dubai to London to Singapore — all on the same platform.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait', 'Oman', 'Jordan', 'Egypt', 'Global'].map((country) => (
                  <span key={country} className="px-4 py-2 rounded-full text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    {country}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zubda-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Compliance-ready from day one</h2>
          <p className="text-zubda-100 mb-8 max-w-lg mx-auto">Start your free trial and experience built-in compliance — no plugins, no add-ons, no extra cost.</p>
          <a href="/pricing/" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-zubda-600 font-semibold hover:bg-zubda-50 transition-colors">
            Start Free Trial
          </a>
        </Container>
      </section>
    </>
  );
}
