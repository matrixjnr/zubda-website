import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Zubda privacy policy. Learn how we collect, use, and protect your business data in compliance with DIFC Data Protection Law.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pb-32 bg-zubda-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
              Legal
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed text-gray-400">
              Effective date: March 1, 2026
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-[#525252] mb-12">
              Zubda (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates a cloud-based enterprise resource planning (ERP) platform designed for businesses in the UAE, GCC, and worldwide. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform and services.
            </p>

            <div className="space-y-12">
              {/* Information We Collect */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  1. Information We Collect
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  We collect information necessary to provide and improve our ERP services. This includes:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Account information:</strong> Name, email address, phone number, company name, and role when you register for an account.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Business data:</strong> Financial records, invoices, inventory data, employee information, payroll data, and other business information you enter into the platform. This data belongs to you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Usage data:</strong> Device information, IP addresses, browser type, feature usage patterns, and error logs to help us improve the platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Billing information:</strong> Payment method details, billing address, and transaction history processed through our secure payment providers.</span>
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  2. How We Use Your Information
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Provide, operate, and maintain the Zubda ERP platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Process transactions and manage your subscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Synchronize data across your devices securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Generate compliance reports (VAT returns, WPS files, audit trails)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Provide customer support and respond to inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Improve platform performance, reliability, and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Comply with legal obligations, including UAE Federal Tax Authority requirements</span>
                  </li>
                </ul>
              </div>

              {/* Data Storage & Security */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  3. Data Storage and Security
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  Zubda is a multi-tenant cloud ERP platform. Your business data is logically isolated from other tenants at the database level. We implement industry-standard security measures including:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Encryption in transit (TLS 1.3) and at rest (AES-256)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Strict tenant isolation with row-level security policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Automated backups with point-in-time recovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Access controls and audit logging for all administrative actions</span>
                  </li>
                </ul>
                <p className="text-[#525252] leading-relaxed mt-4">
                  Our offline-first architecture means a copy of your data is also stored locally on your devices in an encrypted SQLite database. This local data remains under your control and is synchronized with our servers when connectivity is available.
                </p>
              </div>

              {/* Data Sharing */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  4. Data Sharing
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal or business data. We may share information only in the following circumstances:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Service providers:</strong> Trusted third-party providers who assist with hosting, payment processing, and customer support, bound by strict data processing agreements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Legal compliance:</strong> When required by law, regulation, or legal process, including UAE Federal Tax Authority audits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, with prior notice to affected users.</span>
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  5. Your Rights
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  In accordance with the DIFC Data Protection Law (DIFC Law No. 5 of 2020) and applicable UAE data protection regulations, you have the right to:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Access the personal data we hold about you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Request correction of inaccurate personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Request deletion of your personal data (subject to legal retention requirements)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Export your business data in standard formats at any time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Object to processing of your personal data for marketing purposes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Withdraw consent where processing is based on consent</span>
                  </li>
                </ul>
                <p className="text-[#525252] leading-relaxed mt-4">
                  Your business data (financial records, invoices, inventory, etc.) belongs to you. You may export all of your data at any time through the platform. Upon account termination, we will delete your data within 90 days, unless retention is required by law.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  6. Cookies
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  We use essential cookies to maintain your session and ensure the platform functions correctly. We may also use analytics cookies to understand how the platform is used. You can control cookie preferences through your browser settings.
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Essential cookies:</strong> Required for authentication, session management, and security. Cannot be disabled.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">Analytics cookies:</strong> Help us understand usage patterns and improve the platform. Can be opted out.</span>
                  </li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  7. Children&apos;s Privacy
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  Zubda is a business software platform and is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  8. Changes to This Policy
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of material changes by posting the updated policy on our website and, where appropriate, by email. The &quot;Effective date&quot; at the top of this page indicates when the policy was last revised. Continued use of the platform after changes constitutes acceptance of the revised policy.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  9. Contact
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                </p>
                <div className="text-[#525252] leading-relaxed space-y-1">
                  <p><strong className="text-[#161616]">Zubda</strong></p>
                  <p>Email: <a href="mailto:privacy@zubda.com" className="text-zubda-500 hover:underline">privacy@zubda.com</a></p>
                  <p>General inquiries: <a href="mailto:hello@zubda.com" className="text-zubda-500 hover:underline">hello@zubda.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
