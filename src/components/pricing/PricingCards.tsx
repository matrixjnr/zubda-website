'use client';

import { useState } from 'react';
import type { PricingTier } from '@/lib/constants';
import { Container } from '@/components/shared/Container';

interface PricingCardsProps {
  tiers: PricingTier[];
}

export function PricingCards({ tiers }: PricingCardsProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pb-24 bg-white">
      <Container>
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm font-medium ${
              !annual ? 'text-[#161616]' : 'text-gray-400'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 transition-colors ${
              annual ? 'bg-zubda-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white transition-transform ${
                annual ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              annual ? 'text-[#161616]' : 'text-gray-400'
            }`}
          >
            Annual{' '}
            <span className="text-zubda-500 text-xs font-semibold">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const price =
              tier.price === 'custom'
                ? null
                : annual
                  ? tier.price.annual
                  : tier.price.monthly;
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.name}
                className={`relative p-8 h-full flex flex-col ${
                  isHighlighted
                    ? 'bg-zubda-900 text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {tier.badge && (
                  <span
                    className={`absolute -top-3 left-6 px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                      isHighlighted
                        ? 'bg-zubda-500 text-white'
                        : 'bg-gray-100 text-[#525252]'
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}

                <h3
                  className={`text-xl font-semibold tracking-tight mb-1 ${
                    isHighlighted ? 'text-white' : 'text-[#161616]'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    isHighlighted ? 'text-gray-400' : 'text-[#525252]'
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mb-6">
                  {price !== null ? (
                    <>
                      <span
                        className={`text-4xl font-semibold tracking-tight ${
                          isHighlighted ? 'text-white' : 'text-[#161616]'
                        }`}
                      >
                        ${price}
                      </span>
                      <span
                        className={isHighlighted ? 'text-gray-400' : 'text-[#525252]'}
                      >
                        /mo
                      </span>
                      {annual &&
                        tier.price !== 'custom' &&
                        tier.price.monthly > 0 && (
                          <p
                            className={`text-xs mt-1 ${
                              isHighlighted ? 'text-gray-500' : 'text-gray-400'
                            }`}
                          >
                            billed annually
                          </p>
                        )}
                    </>
                  ) : (
                    <span
                      className={`text-4xl font-semibold tracking-tight ${
                        isHighlighted ? 'text-white' : 'text-[#161616]'
                      }`}
                    >
                      Custom
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        isHighlighted ? 'text-gray-300' : 'text-[#525252]'
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex-shrink-0 ${
                          isHighlighted ? 'text-zubda-400' : 'text-zubda-500'
                        }`}
                      >
                        &#10003;
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    tier.cta === 'Contact Sales'
                      ? 'mailto:sales@zubda.com'
                      : '/pricing/'
                  }
                  className={`w-full text-center py-3 px-6 rounded font-semibold transition-all ${
                    isHighlighted
                      ? 'bg-zubda-500 text-white hover:bg-zubda-600'
                      : 'border-2 border-[#161616] text-[#161616] hover:border-zubda-500 hover:text-zubda-500'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
