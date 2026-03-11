import type { Metadata } from 'next';
import { complianceAreas } from '@/lib/constants';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'UAE/GCC Compliance',
  description: 'FTA VAT compliance, WPS payroll, Arabic bilingual invoices with QR codes. Compliance built in, not bolted on.',
};

const countries = ['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait', 'Oman', 'Jordan', 'Egypt', 'Global'];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pb-32 bg-[#0a0a1a] text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
              UAE / GCC Compliance
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Compliance is not an add-on. It is the foundation.
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
              Zubda is built from the ground up for UAE and GCC regulatory requirements. Every feature respects local tax law, labor law, and business practices — while remaining flexible for use anywhere in the world.
            </p>
          </div>
        </Container>
      </section>

      {/* Compliance Areas */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {complianceAreas.map((area) => (
              <div key={area.title} className="border-l-2 border-zubda-500 pl-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-2">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#525252] mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#525252]">
                      <span className="text-zubda-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Reach */}
      <section className="py-24 md:py-32 bg-[#f8f9fa]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
              Global Reach
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#161616] mb-6">
              Gulf roots. Global reach.
            </h2>
            <p className="text-lg leading-relaxed text-[#525252] mb-8">
              While Zubda has deep UAE and GCC compliance built in, the system is designed to be
              versatile. Configurable tax rules, multi-currency support, and flexible localization
              mean you can run your business from Dubai to London to Singapore — all on the same platform.
            </p>
            <p className="text-sm text-[#525252]">
              <span className="font-medium text-[#161616]">Supported regions:</span>{' '}
              {countries.join(' / ')}
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0a0a1a] text-white">
        <Container className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
            Get started
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Compliance-ready from day one
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 mb-10 max-w-lg mx-auto">
            Start your free trial and experience built-in compliance — no plugins, no add-ons, no extra cost.
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
