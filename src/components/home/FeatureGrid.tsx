import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const features = [
  { icon: '🛒', name: 'Point of Sale', description: 'Fast POS with offline mode. Process sales without internet — syncs when back online.' },
  { icon: '📊', name: 'Accounting & GL', description: 'Full double-entry general ledger. Automatic journal posting from sales, purchases, and expenses.' },
  { icon: '📦', name: 'Inventory', description: 'Multi-location tracking with real-time sync. Stocktakes, transfers, reorder points, and BOM.' },
  { icon: '👥', name: 'HR & Payroll', description: 'WPS-ready payroll with gratuity calc, leave management, attendance, and department tracking.' },
  { icon: '🛍️', name: 'Purchasing', description: 'Purchase orders with GRN tracking, supplier management, and three-way matching.' },
  { icon: '📋', name: 'Sales & Orders', description: 'B2B sales with delivery notes, commissions, promotions, and approval workflows.' },
  { icon: '🚢', name: 'Trade & Logistics', description: 'Shipment tracking, landed cost allocation, and post-dated cheque register.' },
  { icon: '📝', name: 'Quotations', description: 'Professional quotations with tax calc and one-click conversion to sales orders.' },
];

export function FeatureGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          badge="Everything You Need"
          title="One system. Every department."
          subtitle="15+ integrated modules that share data in real time — no imports, no exports, no double entry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.name} delay={i * 75}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-zubda-300 dark:hover:border-zubda-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/features/" className="text-zubda-500 hover:text-zubda-600 font-medium transition-colors">
            See all 15+ modules &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
