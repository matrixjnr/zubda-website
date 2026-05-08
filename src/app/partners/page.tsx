import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Partner Program. Earn 40-50% Commission',
  description: 'Join the Zubda partner program. Earn recurring commissions by referring businesses to our ERP platform.',
};

const tiers = [
  {
    name: 'Sales Agent',
    commission: '40%',
    months: '6 months',
    target: '10+ customers/month',
    perks: ['Referral code', 'Partner dashboard', 'Marketing materials', 'Email support'],
  },
  {
    name: 'Reseller',
    commission: '45%',
    months: '6 months',
    target: '20+ customers/month',
    perks: ['Everything in Agent', 'Co-branded materials', 'Priority support', 'Quarterly bonus'],
  },
  {
    name: 'Strategic Partner',
    commission: '50%',
    months: '6 months',
    target: '50+ customers',
    perks: ['Everything in Reseller', 'Custom commission terms', 'Dedicated account manager', 'Revenue share on renewals'],
  },
];

const earnings = [
  { plan: 'Starter ($39/mo)', perSale: '$15.60/mo', sixMonth: '$93.60', tenCustomers: '$936' },
  { plan: 'Business ($79/mo)', perSale: '$31.60/mo', sixMonth: '$189.60', tenCustomers: '$1,896' },
  { plan: 'Trade ($149/mo)', perSale: '$59.60/mo', sixMonth: '$357.60', tenCustomers: '$3,576' },
  { plan: 'Pro ($299/mo)', perSale: '$119.60/mo', sixMonth: '$717.60', tenCustomers: '$7,176' },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-zubda-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <Container>
          <div className="max-w-3xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <span className="text-sm font-medium text-green-400">Earn up to 50% commission</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Sell Zubda.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Keep earning.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Join our partner program and earn 40-50% recurring commission for 6 months on every business you bring to Zubda.
            </p>
            <a
              href="mailto:partners@zubda.app?subject=Partner%20Application"
              className="inline-block px-8 py-3.5 text-base font-medium bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/25"
            >
              Apply to become a partner &rarr;
            </a>
          </div>
        </Container>
      </section>

      {/* Earnings calculator */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-center text-[#161616] mb-4">
            What you could earn
          </h2>
          <p className="text-center text-[#525252] mb-12 max-w-xl mx-auto">
            At 40% commission, here&apos;s what 10 customers per month looks like over 6 months.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#161616]">
                  <th className="text-left py-4 px-4 font-medium text-[#525252]">Plan</th>
                  <th className="py-4 px-4 font-medium text-[#525252]">Commission/mo</th>
                  <th className="py-4 px-4 font-medium text-[#525252]">Per customer (6 mo)</th>
                  <th className="py-4 px-4 font-semibold text-green-600">10 customers (6 mo)</th>
                </tr>
              </thead>
              <tbody>
                {earnings.map((e) => (
                  <tr key={e.plan} className="border-b border-gray-200">
                    <td className="py-4 px-4 font-medium text-[#161616]">{e.plan}</td>
                    <td className="py-4 px-4 text-center text-[#161616]">{e.perSale}</td>
                    <td className="py-4 px-4 text-center text-[#161616]">{e.sixMonth}</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600 text-lg">{e.tenCustomers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            Commission paid monthly as customers pay. Stops if customer churns before 6 months.
          </p>
        </Container>
      </section>

      {/* Partner tiers */}
      <section className="py-24 bg-[#f8f9fa]">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-center text-[#161616] mb-12">
            Partner tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-[#161616] mb-2">{tier.name}</h3>
                <p className="text-4xl font-bold text-green-600 mb-1">{tier.commission}</p>
                <p className="text-sm text-[#525252] mb-6">for {tier.months} &middot; Target: {tier.target}</p>
                <ul className="space-y-2">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#525252]">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-center text-[#161616] mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Apply', desc: 'Email partners@zubda.app with your name, region, and how you plan to sell.' },
              { step: '2', title: 'Get your code', desc: 'We create your partner account and give you a unique referral code (ZBD-XXXXXXXX).' },
              { step: '3', title: 'Refer businesses', desc: 'Share your code. When they sign up with it, the customer is linked to you.' },
              { step: '4', title: 'Get paid', desc: 'Earn commission monthly for 6 months on every paying customer you referred.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-zubda-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-[#161616] mb-2">{s.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zubda-900">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Ready to start earning?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              10 Business plan customers = $1,896 in commission over 6 months. No upfront cost, no inventory, no risk.
            </p>
            <a
              href="mailto:partners@zubda.app?subject=Partner%20Application"
              className="inline-block px-8 py-3.5 text-base font-medium bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all"
            >
              Apply now &rarr;
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
