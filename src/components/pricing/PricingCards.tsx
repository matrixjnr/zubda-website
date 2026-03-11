'use client';

import { useState } from 'react';
import type { PricingTier } from '@/lib/constants';
import { Container } from '@/components/shared/Container';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

interface PricingCardsProps {
  tiers: PricingTier[];
}

export function PricingCards({ tiers }: PricingCardsProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pb-16">
      <Container>
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!annual ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-zubda-500' : 'bg-gray-300 dark:bg-gray-600'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : ''}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
            Annual <span className="text-green-500 text-xs font-bold">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const price = tier.price === 'custom' ? null : (annual ? tier.price.annual : tier.price.monthly);
            const isHighlighted = tier.highlighted;

            return (
              <AnimateOnScroll key={tier.name} delay={i * 75}>
                <div className={`relative rounded-2xl p-8 border h-full flex flex-col ${
                  isHighlighted
                    ? 'border-zubda-500 bg-zubda-50/50 dark:bg-zubda-950/30 shadow-lg shadow-zubda-500/10'
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                }`}>
                  {tier.badge && (
                    <span className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold ${
                      isHighlighted ? 'bg-zubda-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tier.description}</p>

                  <div className="mb-6">
                    {price !== null ? (
                      <>
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <span className="text-gray-500 dark:text-gray-400">/mo</span>
                        {annual && tier.price !== 'custom' && tier.price.monthly > 0 && (
                          <p className="text-xs text-gray-400 mt-1">billed annually</p>
                        )}
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.cta === 'Contact Sales' ? 'mailto:sales@zubda.com' : '/pricing/'}
                    className={`w-full text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      isHighlighted
                        ? 'bg-zubda-500 text-white hover:bg-zubda-600 shadow-md'
                        : 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-zubda-500 hover:text-zubda-500'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
