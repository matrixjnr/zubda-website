import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Zubda terms of service. Read the terms governing your use of the Zubda cloud ERP platform.',
};

export default function TermsPage() {
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
              Terms of Service
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
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Zubda cloud ERP platform (&quot;Service&quot;) operated by Zubda (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>

            <div className="space-y-12">
              {/* 1. Acceptance of Terms */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  By creating an account or using the Zubda platform, you confirm that you are at least 18 years of age, have the legal authority to bind the organization you represent, and agree to comply with these Terms. These Terms constitute a legally binding agreement between you (and the organization you represent) and Zubda.
                </p>
              </div>

              {/* 2. Account Registration */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  2. Account Registration
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  To use the Service, you must register an account and provide accurate, complete information. You are responsible for:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Maintaining the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>All activity that occurs under your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Promptly notifying us of any unauthorized use of your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Ensuring all users within your organization comply with these Terms</span>
                  </li>
                </ul>
              </div>

              {/* 3. Subscription & Billing */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  3. Subscription and Billing
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  Zubda offers subscription-based plans as described on our pricing page. By subscribing, you agree to the following:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Subscriptions are billed in advance on a monthly or annual basis, depending on the plan selected</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>All fees are quoted in US Dollars (USD) or UAE Dirhams (AED) as displayed at the time of purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Free trials, if offered, convert to paid subscriptions at the end of the trial period unless cancelled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>We reserve the right to modify pricing with 30 days advance notice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Refunds are handled on a case-by-case basis at our discretion</span>
                  </li>
                </ul>
              </div>

              {/* 4. Data Ownership */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  4. Data Ownership
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  You retain full ownership of all business data you enter into the Zubda platform (&quot;Your Data&quot;). By using the Service, you grant us a limited license to host, process, and transmit Your Data solely for the purpose of providing the Service. We will not access Your Data except as necessary to:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Provide and maintain the Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Respond to support requests you initiate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Comply with applicable law</span>
                  </li>
                </ul>
                <p className="text-[#525252] leading-relaxed mt-4">
                  You may export Your Data at any time through the platform&apos;s built-in export functionality. Upon termination, we will retain Your Data for 90 days to allow retrieval, after which it will be permanently deleted unless retention is required by law.
                </p>
              </div>

              {/* 5. Acceptable Use */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  5. Acceptable Use
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Violate any applicable laws, regulations, or third-party rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Transmit malicious code, viruses, or any harmful software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Attempt to gain unauthorized access to other accounts, systems, or networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Interfere with the Service&apos;s integrity, performance, or availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Reverse engineer, decompile, or disassemble any part of the Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Resell, sublicense, or redistribute the Service without our written consent</span>
                  </li>
                </ul>
              </div>

              {/* 6. Availability & SLA */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  6. Availability and Service Level
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  We strive to maintain 99.9% uptime for our cloud services, excluding scheduled maintenance windows. Our offline-first architecture ensures that core functionality remains available on your devices even when the cloud service is temporarily unavailable.
                </p>
                <p className="text-[#525252] leading-relaxed">
                  Scheduled maintenance will be communicated at least 48 hours in advance. We are not liable for interruptions caused by factors outside our reasonable control, including internet outages, force majeure events, or third-party service failures. Enterprise customers may negotiate custom SLA terms.
                </p>
              </div>

              {/* 7. Limitation of Liability */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  7. Limitation of Liability
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  To the maximum extent permitted by applicable law:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>Our total liability for any claims arising from or related to the Service shall not exceed the fees paid by you in the 12 months preceding the claim</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption</span>
                  </li>
                </ul>
              </div>

              {/* 8. Indemnification */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  8. Indemnification
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Zubda and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from or related to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any applicable law or third-party rights; or (d) Your Data or content you submit to the Service.
                </p>
              </div>

              {/* 9. Termination */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  9. Termination
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  Either party may terminate this agreement as follows:
                </p>
                <ul className="space-y-3 text-[#525252] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">By you:</strong> You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zubda-500 mt-1 flex-shrink-0">&#8212;</span>
                    <span><strong className="text-[#161616]">By us:</strong> We may suspend or terminate your access if you materially breach these Terms and fail to remedy the breach within 30 days of written notice. We may also terminate immediately in cases of fraud, illegal activity, or actions that threaten the security of the platform.</span>
                  </li>
                </ul>
                <p className="text-[#525252] leading-relaxed mt-4">
                  Upon termination, your right to use the Service ceases immediately. We will make Your Data available for export for 90 days following termination, after which it will be permanently deleted.
                </p>
              </div>

              {/* 10. Governing Law */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  10. Governing Law
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Dubai International Financial Centre (DIFC), United Arab Emirates, without regard to its conflict of law provisions. The DIFC courts shall have exclusive jurisdiction over any disputes arising from or related to these Terms or your use of the Service.
                </p>
              </div>

              {/* 11. Dispute Resolution */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  11. Dispute Resolution
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  Before initiating formal legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation for a period of 30 days. If negotiation fails, either party may submit the dispute to mediation administered by the DIFC-LCIA Arbitration Centre. If mediation does not resolve the dispute within 60 days, either party may pursue resolution through the DIFC courts.
                </p>
              </div>

              {/* 12. Modifications */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  12. Modifications
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through a notice on the platform at least 30 days before they take effect. Your continued use of the Service after the effective date of modified Terms constitutes acceptance. If you do not agree with the changes, you must stop using the Service and cancel your subscription before the changes take effect.
                </p>
              </div>

              {/* 13. Contact */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-4">
                  13. Contact
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="text-[#525252] leading-relaxed space-y-1">
                  <p><strong className="text-[#161616]">Zubda</strong></p>
                  <p>Email: <a href="mailto:legal@zubda.com" className="text-zubda-500 hover:underline">legal@zubda.com</a></p>
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
