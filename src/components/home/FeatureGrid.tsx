import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
  { name: 'Point of Sale', description: 'Fast checkout with offline mode, barcode scanning, split payments, and automatic stock deduction.' },
  { name: 'Accounting', description: 'Double-entry GL, trial balance, bank reconciliation, fixed assets, cost centers, and 27 built-in reports.' },
  { name: 'Inventory', description: 'Multi-location stock with serial & batch tracking, stocktakes, transfers, BOM assembly, and conflict detection.' },
  { name: 'HR & Payroll', description: 'WPS-ready payroll, leave management, attendance tracking, and department organization.' },
  { name: 'Purchasing', description: 'Purchase orders, GRN receiving with serial capture, supplier management, and landed cost allocation.' },
  { name: 'Sales & Orders', description: 'Quotations, invoices, delivery notes, commissions, promotions, and approval workflows.' },
  { name: 'Channels', description: 'WhatsApp messaging, transactional emails, and marketplace connectors including Shopify. Reach customers everywhere.' },
  { name: 'E-Invoicing', description: 'FTA/ZATCA compliant e-invoices with QR codes, ASP submission, and bank-grade PDF exports.' },
];

export function FeatureGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          overline="Capabilities"
          title="One system. Every department."
          subtitle="15+ integrated modules that share data in real time. no imports, no exports, no double entry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-8">
              <h3 className="text-lg font-semibold text-[#161616] mb-3">{feature.name}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/features/" className="text-sm font-medium text-zubda-500 hover:text-zubda-600 transition-colors">
            Explore all modules &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
