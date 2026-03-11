import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const testimonials = [
  {
    quote: 'Zubda transformed how we manage our retail operations. The offline POS means we never miss a sale.',
    name: 'Coming Soon',
    title: 'Retail Business Owner',
    company: 'UAE Retail',
  },
  {
    quote: 'Finally, an ERP that understands UAE compliance from day one. No more patching together plugins.',
    name: 'Coming Soon',
    title: 'Finance Manager',
    company: 'Trading Company',
  },
  {
    quote: 'The multi-device sync is incredible. Our warehouse and office are always on the same page.',
    name: 'Coming Soon',
    title: 'Operations Director',
    company: 'Distribution Business',
  },
];

export function SocialProof() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeader
          badge="Trusted by Businesses"
          title="What our customers say"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}, {t.company}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* TODO: Replace with real testimonials */}
        <p className="text-center text-sm text-gray-400 mt-8">Join businesses across the UAE, GCC, and beyond</p>
      </Container>
    </section>
  );
}
