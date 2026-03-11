import type { Metadata } from 'next';
import { pricingTiers, pricingFaqs } from '@/lib/constants';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { PricingCards } from '@/components/pricing/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing. Start free, upgrade as you grow. No per-transaction fees.',
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-20 pb-4">
        <Container>
          <SectionHeader
            badge="Simple Pricing"
            title="Plans that grow with your business"
            subtitle="Start free. Upgrade when you need more. No per-transaction fees ever."
          />
        </Container>
      </section>

      <PricingCards tiers={pricingTiers} />

      {/* Detailed comparison */}
      <section className="py-16">
        <Container>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">Detailed comparison</h3>
          <AnimateOnScroll>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-medium text-gray-500">Limits</th>
                    {pricingTiers.map((t) => (
                      <th key={t.name} className={`py-3 px-4 font-semibold ${t.highlighted ? 'text-zubda-500' : 'text-gray-700 dark:text-gray-300'}`}>
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Users</td>
                    {pricingTiers.map((t) => (
                      <td key={t.name} className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{t.limits.users}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Locations</td>
                    {pricingTiers.map((t) => (
                      <td key={t.name} className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{t.limits.locations}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Products</td>
                    {pricingTiers.map((t) => (
                      <td key={t.name} className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">{t.limits.products}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">Frequently asked questions</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {pricingFaqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 75}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Prices note */}
      <section className="py-8">
        <Container>
          <p className="text-center text-xs text-gray-400">Prices in USD. AED equivalent available on request. VAT (5%) applies for UAE customers.</p>
        </Container>
      </section>
    </>
  );
}
