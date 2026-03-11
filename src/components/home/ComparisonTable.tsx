import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const features = [
  { label: 'Offline POS', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'UAE VAT (FTA)', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: 'partial' },
  { label: 'WPS Payroll', zubda: true, odoo: false, sap: 'partial', dynamics: 'partial', erpnext: false },
  { label: 'Arabic Invoices', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: 'partial' },
  { label: 'Native Mobile App', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'Double-Entry GL', zubda: true, odoo: true, sap: true, dynamics: true, erpnext: true },
  { label: 'Offline Sync', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'Starting Price', zubda: 'Free', odoo: 'Free*', sap: '$95/u/mo', dynamics: '$70/u/mo', erpnext: 'Free*' },
  { label: 'Go-Live Time', zubda: 'Same day', odoo: 'Weeks', sap: '3-6 months', dynamics: '2-4 months', erpnext: 'Weeks' },
];

type CellValue = boolean | string | 'partial';

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <span className="text-green-500 font-bold">&#10003;</span>;
  if (value === false) return <span className="text-gray-300 dark:text-gray-600">&#10005;</span>;
  if (value === 'partial') return <span className="text-amber-500">~</span>;
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          badge="How We Compare"
          title="Zubda vs. the alternatives"
          subtitle="See how Zubda stacks up against popular ERP systems."
        />

        <AnimateOnScroll>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-4 px-4 font-medium text-gray-500 dark:text-gray-400">Feature</th>
                  <th className="py-4 px-4 font-bold text-zubda-500 bg-zubda-50/50 dark:bg-zubda-950/50 rounded-t-xl">Zubda</th>
                  <th className="py-4 px-4 font-medium text-gray-600 dark:text-gray-400">Odoo</th>
                  <th className="py-4 px-4 font-medium text-gray-600 dark:text-gray-400">SAP B1</th>
                  <th className="py-4 px-4 font-medium text-gray-600 dark:text-gray-400">Dynamics 365</th>
                  <th className="py-4 px-4 font-medium text-gray-600 dark:text-gray-400">ERPNext</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.label} className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? '' : 'bg-gray-50/50 dark:bg-gray-900/50'}`}>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">{f.label}</td>
                    <td className="py-3 px-4 text-center bg-zubda-50/30 dark:bg-zubda-950/30"><CellContent value={f.zubda} /></td>
                    <td className="py-3 px-4 text-center"><CellContent value={f.odoo} /></td>
                    <td className="py-3 px-4 text-center"><CellContent value={f.sap} /></td>
                    <td className="py-3 px-4 text-center"><CellContent value={f.dynamics} /></td>
                    <td className="py-3 px-4 text-center"><CellContent value={f.erpnext} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">* Limited free tier or self-hosted only</p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
