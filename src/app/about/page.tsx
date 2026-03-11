import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'About',
  description: 'Zubda is a UAE-born cloud ERP built for businesses worldwide. Offline-first, compliance-ready, and affordable.',
};

const values = [
  {
    title: 'Reliability first',
    description:
      'Your business cannot wait for a loading spinner. Zubda works offline by default, syncs when connected, and never loses a transaction. Your data is always available, even when the internet is not.',
  },
  {
    title: 'Compliance by design',
    description:
      'VAT returns, WPS payroll files, FTA audit trails — compliance is not an afterthought or an add-on. It is built into every module from the ground up, so you stay compliant without extra effort.',
  },
  {
    title: 'Simplicity over complexity',
    description:
      'Enterprise software does not have to be painful. We strip away the bloat and deliver clean interfaces that your team can learn in hours, not months. Power where you need it, simplicity everywhere else.',
  },
  {
    title: 'Built to last',
    description:
      'We make architectural decisions for the long term. Open standards, portable data, no vendor lock-in. Your business will grow and change — your ERP should be ready for that.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pb-32 bg-zubda-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
              About Zubda
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
              The bottom line for your business
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
              <span className="font-arabic text-zubda-400">زبدة</span> — in Arabic, it means the essence, the cream, the bottom line. We named our company after it because that is exactly what we deliver: the essential tools your business needs, without the noise.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#161616]">
                ERP that just works
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-lg leading-relaxed text-[#525252]">
                <p>
                  Most ERP systems were designed for large enterprises with dedicated IT teams and unlimited budgets. Small and mid-sized businesses in the Gulf region have been left with two options: overpay for software that is too complex, or cobble together spreadsheets and disconnected tools.
                </p>
                <p>
                  We are building a third option. Zubda is a modern, cloud-native ERP that is offline-first, compliance-ready from day one, and priced so that a 5-person trading company gets the same quality software as a 500-person enterprise.
                </p>
                <p>
                  Accounting, inventory, POS, HR, payroll, purchasing, sales — all connected, all syncing, all working even when the Wi-Fi drops. That is the promise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[#f8f9fa]">
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#161616]">
              Principles that guide every decision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((value) => (
              <div key={value.title} className="border-l-2 border-zubda-500 pl-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#161616] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* UAE-born */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
                Where We Come From
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#161616]">
                UAE-born, globally versatile
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-lg leading-relaxed text-[#525252]">
                <p>
                  Zubda was founded in the UAE because we understand the unique challenges of doing business in this region. Multi-currency transactions, VAT compliance with the Federal Tax Authority, WPS payroll requirements, bilingual documentation — these are not edge cases for us, they are core features.
                </p>
                <p>
                  But great software should not be limited by geography. Zubda is designed for businesses anywhere in the world. The same offline-first reliability, clean interface, and modular architecture works whether you are running a retail chain in Dubai, a manufacturing operation in Riyadh, or a distribution company in Nairobi.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-zubda-900 text-white">
        <Container className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-6">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Let&apos;s build something that lasts
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 mb-10 max-w-lg mx-auto">
            Whether you are ready to start your free trial or want to learn more about how Zubda fits your business, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing/"
              className="inline-flex items-center justify-center px-8 py-4 rounded bg-zubda-500 text-white font-semibold hover:bg-zubda-600 transition-colors"
            >
              Start Free Trial
            </Link>
            <a
              href="mailto:hello@zubda.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded border border-gray-600 text-gray-300 font-semibold hover:text-white hover:border-gray-400 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
