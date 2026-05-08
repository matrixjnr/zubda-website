import Link from 'next/link';
import { Container } from '@/components/shared/Container';

export function HeroSection() {
  return (
    <section className="bg-zubda-900 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zubda-500/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[80px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zubda-500/10 border border-zubda-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-zubda-400">
                Trusted across the Middle East, Africa &amp; Europe
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.08]">
              Your business,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zubda-400 to-blue-400">
                distilled.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              The offline-first ERP that runs your entire business. POS, inventory, accounting, HR, and trade. Works even when the internet does not.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Link
                href="/pricing/"
                className="group px-8 py-3.5 text-base font-medium bg-zubda-500 text-white rounded-lg hover:bg-zubda-400 transition-all hover:shadow-lg hover:shadow-zubda-500/25"
              >
                Start free trial
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              <Link
                href="mailto:sales@zubda.app"
                className="px-8 py-3.5 text-base font-medium border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Talk to sales
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>No credit card required</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>30 days free</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>macOS, Windows, Linux, iOS, Android &amp; Web</span>
            </div>
          </div>

          {/* Right: Product preview card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-zubda-500/20 to-blue-500/10 rounded-2xl blur-2xl" />

              <div className="relative bg-[#0d1b2a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-zubda-500">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <span className="text-xs font-semibold text-white ml-2">Zubda</span>
                  <span className="text-[10px] text-white/60 ml-1">Your Business, Distilled</span>
                </div>

                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Revenue', value: '47,250', trend: '+12%', color: 'from-green-500/20 to-green-500/5' },
                      { label: 'Orders', value: '156', trend: '+8%', color: 'from-blue-500/20 to-blue-500/5' },
                      { label: 'Receivables', value: '12,840', trend: '-3%', color: 'from-orange-500/20 to-orange-500/5' },
                    ].map((kpi) => (
                      <div key={kpi.label} className={`bg-gradient-to-br ${kpi.color} rounded-lg p-3 border border-white/5`}>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">{kpi.label}</p>
                        <p className="text-lg font-bold text-white mt-1">{kpi.value}</p>
                        <p className="text-[10px] text-green-400 mt-0.5">{kpi.trend}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Sales Trend</p>
                    <div className="flex items-end gap-1 h-16">
                      {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-zubda-500 to-zubda-400 rounded-sm opacity-80" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {['POS', 'Inventory', 'Accounting', 'HR', 'Trade', 'E-Invoice', 'CRM'].map((m) => (
                      <span key={m} className="px-2 py-0.5 text-[9px] font-medium bg-white/5 text-gray-400 rounded border border-white/5">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '20+', label: 'Integrated Modules' },
              { value: '30+', label: 'Reports' },
              { value: '30+', label: 'Currencies' },
              { value: '6', label: 'Platforms' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
