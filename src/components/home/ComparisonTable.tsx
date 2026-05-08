import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
  { label: 'Works Offline', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'All-in-One (POS+GL+HR+Inv)', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: true },
  { label: 'Offline Data Sync', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'Native Desktop + Mobile', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'UAE/GCC Tax Compliance', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: 'partial' },
  { label: 'East Africa Tax (KE/UG/TZ)', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'E-Invoicing with QR', zubda: true, odoo: 'partial', sap: true, dynamics: true, erpnext: 'partial' },
  { label: 'WhatsApp Integration', zubda: true, odoo: 'partial', sap: false, dynamics: false, erpnext: false },
  { label: 'Conflict Detection', zubda: true, odoo: false, sap: false, dynamics: false, erpnext: false },
  { label: 'Setup Time', zubda: 'Same day', odoo: '2–4 weeks', sap: '3–6 months', dynamics: '2–4 months', erpnext: '2–4 weeks' },
  { label: 'Implementation Cost', zubda: '$0', odoo: '$2,000+', sap: '$20,000+', dynamics: '$15,000+', erpnext: '$3,000+' },
  { label: 'Solo Operator', zubda: '$39/mo', odoo: '$24/mo*', sap: '$95/mo', dynamics: '$70/mo', erpnext: '$50/mo*' },
  { label: '5-Seat Team', zubda: '$79/mo', odoo: '$120/mo', sap: '$475/mo', dynamics: '$350/mo', erpnext: '$50/mo*' },
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
        <p className="text-xs text-gray-400 mt-6">* ERPNext requires self-hosting and developer setup. Odoo multi-app pricing adds up per user. SAP/D365 require implementation partners.</p>
      </Container>
    </section>
  );
}
