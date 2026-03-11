import Link from 'next/link';
import { Container } from '@/components/shared/Container';

const metrics = [
  { value: 'Same day', label: 'Go-live time' },
  { value: '$0', label: 'Implementation cost' },
  { value: '6', label: 'Platforms supported' },
  { value: 'Free', label: 'To start' },
];

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f9fa]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
            Get started
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#161616] tracking-tight mb-5">
            Go live today. Not in six months.
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed">
            No consultants. No lengthy implementation. Sign up, configure your business, and start operating — all in the same day. Your data stays yours, syncs everywhere, works offline.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="bg-[#f8f9fa] p-8 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#161616] tracking-tight mb-1">{m.value}</div>
              <div className="text-sm text-[#525252]">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/pricing/"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium bg-zubda-500 text-white hover:bg-zubda-600 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </Container>
    </section>
  );
}
