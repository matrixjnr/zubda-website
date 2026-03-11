import type { Metadata } from 'next';
import { pricingTiers, pricingFaqs } from '@/lib/constants';
import { Container } from '@/components/shared/Container';
import { PricingCards } from '@/components/pricing/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing. Start free, upgrade as you grow. No per-transaction fees.',
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
              Pricing
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#161616] mb-6">
              Plans that grow with your business
            </h1>
            <p className="text-lg leading-relaxed text-[#525252]">
              Start free. Upgrade when you need more. No per-transaction fees ever.
            </p>
          </div>
        </Container>
      </section>

      <PricingCards tiers={pricingTiers} />

      {/* Detailed comparison */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <h3 className="text-2xl font-semibold tracking-tight text-center text-[#161616] mb-10">
            Detailed comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#161616]">
                  <th className="text-left py-4 px-4 font-medium text-[#525252] uppercase tracking-widest text-xs">
                    Limits
                  </th>
                  {pricingTiers.map((t) => (
                    <th
                      key={t.name}
                      className={`py-4 px-4 font-semibold text-sm ${
                        t.highlighted ? 'text-zubda-500' : 'text-[#161616]'
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-[#525252]">Users</td>
                  {pricingTiers.map((t) => (
                    <td key={t.name} className="py-4 px-4 text-center text-[#161616]">
                      {t.limits.users}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-[#525252]">Locations</td>
                  {pricingTiers.map((t) => (
                    <td key={t.name} className="py-4 px-4 text-center text-[#161616]">
                      {t.limits.locations}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-[#525252]">Products</td>
                  {pricingTiers.map((t) => (
                    <td key={t.name} className="py-4 px-4 text-center text-[#161616]">
                      {t.limits.products}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#f8f9fa]">
        <Container>
          <h3 className="text-2xl font-semibold tracking-tight text-center text-[#161616] mb-12">
            Frequently asked questions
          </h3>
          <div className="max-w-2xl mx-auto divide-y divide-gray-200">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h4 className="font-semibold text-[#161616] mb-2">{faq.question}</h4>
                <p className="text-sm leading-relaxed text-[#525252]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prices note */}
      <section className="py-8 bg-white">
        <Container>
          <p className="text-center text-xs text-gray-400">
            Prices in USD. AED equivalent available on request. VAT (5%) applies for UAE customers.
          </p>
        </Container>
      </section>
    </>
  );
}
