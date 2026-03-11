import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const differentiators = [
  {
    title: 'Offline-first',
    description: 'Works without internet. Your POS keeps selling, your warehouse keeps receiving. Everything syncs automatically when connectivity returns.',
  },
  {
    title: 'Gulf-native, globally ready',
    description: 'Built from day one for FTA VAT, WPS payroll, Arabic invoices, and AED. Not a Western ERP with a localization patch — but versatile enough for any country.',
  },
  {
    title: 'Fast and reliable',
    description: 'Purpose-built for speed and stability. Native apps for macOS, Windows, Linux, iOS, and Android that feel instant — not a web app in disguise.',
  },
  {
    title: 'Affordable',
    description: 'Enterprise features at SME prices. Start free, grow to enterprise. No per-transaction fees, no hidden costs, no consultant army required to go live.',
  },
];

export function WhyZubda() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f9fa]">
      <Container>
        <SectionHeader
          overline="Why Zubda"
          title="What makes us different"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {differentiators.map((d) => (
            <div key={d.title} className="border-l-2 border-zubda-500 pl-6">
              <h3 className="text-xl font-semibold text-[#161616] mb-3">{d.title}</h3>
              <p className="text-[#525252] leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
