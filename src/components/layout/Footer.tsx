import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">zubda</span>
              <span className="text-lg font-arabic text-zubda-400">زبدة</span>
            </Link>
            <p className="text-sm mb-4">The bottom line for your business.</p>
            <p className="text-xs text-gray-500">Cloud ERP built for businesses worldwide, with deep roots in the UAE and Gulf region.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing/" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/enterprise/" className="hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link href="/compliance/" className="hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-500 cursor-default">About</span></li>
              <li><span className="text-gray-500 cursor-default">Blog</span></li>
              <li><span className="text-gray-500 cursor-default">Careers</span></li>
              <li><a href="mailto:hello@zubda.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-500 cursor-default">Privacy Policy</span></li>
              <li><span className="text-gray-500 cursor-default">Terms of Service</span></li>
              <li><span className="text-gray-500 cursor-default">Security</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Zubda. All rights reserved.</p>
          <p className="text-xs text-gray-500">Designed and built in the UAE</p>
        </div>
      </div>
    </footer>
  );
}
