import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const capabilities = [
  { title: 'FTA VAT', description: 'Full UAE Federal Tax Authority compliance with automated VAT calculation and reporting.' },
  { title: 'WPS Payroll', description: 'UAE Wage Protection System with SIF file generation and gratuity calculation.' },
  { title: 'Tax Invoices', description: 'QR-coded tax invoices per FTA standards with Arabic bilingual support.' },
  { title: 'Arabic Support', description: 'Arabic for product names, customer data, invoices, and all business documents.' },
  { title: 'Data Isolation', description: 'Enterprise-grade multi-tenant security with full audit trails.' },
];

export function BuiltForGulf() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f9fa]">
      <Container>
        <SectionHeader
          overline="Compliance"
          title="Built for the Gulf. Ready for the world."
          subtitle="Deep UAE and GCC regulatory compliance out of the box — with the flexibility to run your business anywhere."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200">
          {capabilities.map((item) => (
            <div key={item.title} className="bg-[#f8f9fa] p-6">
              <h3 className="text-base font-semibold text-[#161616] mb-2">{item.title}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
