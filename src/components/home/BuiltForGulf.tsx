import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const regions = [
  {
    title: 'Middle East & GCC',
    emoji: '🏙️',
    description: 'FTA VAT compliance, QR-coded tax invoices, WPS payroll with SIF export, Arabic bilingual support. Ready for UAE, Saudi Arabia, Oman, Bahrain, Kuwait, and Qatar.',
  },
  {
    title: 'East Africa',
    emoji: '🌍',
    description: 'Kenya eTIMS integration, Uganda, Tanzania, Rwanda, and Ethiopia with local currencies, tax rates, and M-Pesa payments built in.',
  },
  {
    title: 'Ireland & Europe',
    emoji: '🇪🇺',
    description: 'Irish VAT (23%), EUR/GBP multi-currency, EU-standard invoicing, GDPR-compliant data handling, and card payments.',
  },
  {
    title: 'Offline-First',
    emoji: '📡',
    description: 'Works without internet. Your business never stops, and all data syncs automatically when connectivity returns.',
  },
  {
    title: 'Multi-Currency',
    emoji: '💱',
    description: '30+ currencies with exchange rate management. Trade globally with automatic conversions and landed cost tracking.',
  },
];

export function BuiltForGulf() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f9fa]">
      <Container>
        <SectionHeader
          overline="Ready where you are"
          title="One platform. Every market."
          subtitle="Tax compliance, invoicing, and payments, auto-configured for your country during onboarding. No consultants needed."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200 rounded-xl overflow-hidden">
          {regions.map((item) => (
            <div key={item.title} className="bg-white p-6 hover:bg-[#f8f9fa] transition-colors">
              <div className="text-2xl mb-3">{item.emoji}</div>
              <h3 className="text-base font-semibold text-[#161616] mb-2">{item.title}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
