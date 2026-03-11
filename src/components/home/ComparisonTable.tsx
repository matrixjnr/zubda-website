import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
  { label: 'Offline POS', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'UAE VAT (FTA)', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: 'partial' },
  { label: 'WPS Payroll', zubda: true, odoo: false, sap: 'partial', dynamics: 'partial', erpnext: false },
  { label: 'Arabic Invoices', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: 'partial' },
  { label: 'Native Mobile App', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'Double-Entry GL', zubda: true, odoo: true, sap: true, dynamics: true, erpnext: true },
  { label: 'Offline Sync', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'Starting Price', zubda: 'Free', odoo: 'Free*', sap: '$95/u/mo', dynamics: '$70/u/mo', erpnext: 'Free*' },
  { label: 'Go-Live Time', zubda: 'Same day', odoo: 'Weeks', sap: '3–6 months', dynamics: '2–4 months', erpnext: 'Weeks' },
];

type CellValue = boolean | string | 'partial';

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <span className="text-zubda-500 font-medium">Yes</span>;
  if (value === false) return <span className="text-gray-300">—</span>;
  if (value === 'partial') return <span className="text-amber-500">Partial</span>;
  return <span className="text-sm font-medium text-[#161616]">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          overline="Comparison"
          title="How Zubda compares"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-[#161616]">
                <th className="text-left py-4 pr-4 font-medium text-[#525252]">Capability</th>
                <th className="py-4 px-4 font-semibold text-[#161616]">Zubda</th>
                <th className="py-4 px-4 font-medium text-[#525252]">Odoo</th>
                <th className="py-4 px-4 font-medium text-[#525252]">SAP B1</th>
                <th className="py-4 px-4 font-medium text-[#525252]">Dynamics 365</th>
                <th className="py-4 px-4 font-medium text-[#525252]">ERPNext</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label} className="border-b border-gray-200">
                  <td className="py-3.5 pr-4 text-[#161616] font-medium">{f.label}</td>
                  <td className="py-3.5 px-4 text-center bg-zubda-50/40"><Cell value={f.zubda} /></td>
                  <td className="py-3.5 px-4 text-center"><Cell value={f.odoo} /></td>
                  <td className="py-3.5 px-4 text-center"><Cell value={f.sap} /></td>
                  <td className="py-3.5 px-4 text-center"><Cell value={f.dynamics} /></td>
                  <td className="py-3.5 px-4 text-center"><Cell value={f.erpnext} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-6">* Limited free tier or self-hosted only</p>
      </Container>
    </section>
  );
}
