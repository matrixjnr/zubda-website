import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
  { name: 'Point of Sale', description: 'Fast checkout with offline mode. Process sales without internet — syncs when back online.' },
  { name: 'Accounting', description: 'Full double-entry general ledger. Automatic journal posting from sales, purchases, and expenses.' },
  { name: 'Inventory', description: 'Multi-location tracking with real-time sync. Stocktakes, transfers, reorder points, and BOM.' },
  { name: 'HR & Payroll', description: 'WPS-ready payroll with gratuity calculation, leave management, and attendance tracking.' },
  { name: 'Purchasing', description: 'Purchase orders with GRN tracking, supplier management, and three-way matching.' },
  { name: 'Sales & Orders', description: 'B2B sales with delivery notes, commissions, promotions, and approval workflows.' },
  { name: 'Trade & Logistics', description: 'Shipment tracking, landed cost allocation, and post-dated cheque register.' },
  { name: 'CRM', description: 'Leads, opportunities, pipeline management, and activity tracking — all integrated with sales.' },
];

export function FeatureGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          overline="Capabilities"
          title="One system. Every department."
          subtitle="15+ integrated modules that share data in real time — no imports, no exports, no double entry."
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
