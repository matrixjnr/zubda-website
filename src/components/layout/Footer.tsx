import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zubda-900 text-gray-400 border-t border-zubda-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-white tracking-tight">zubda</span>
              <span className="text-sm font-arabic text-zubda-400">زبدة</span>
            </Link>
            <p className="text-sm leading-relaxed mb-3">Cloud ERP built for businesses worldwide, with deep roots in the UAE and Gulf region.</p>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-5">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features/" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing/" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/enterprise/" className="hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link href="/compliance/" className="hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about/" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="mailto:hello@zubda.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:sales@zubda.com" className="hover:text-white transition-colors">Sales</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-5">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zubda-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Zubda. All rights reserved.</p>
          <p className="text-xs text-gray-600">Designed and built in the UAE</p>
        </div>
      </div>
    </footer>
  );
}
