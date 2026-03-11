export interface Module {
  id: string;
  name: string;
  icon: string; // emoji
  shortDescription: string;
  features: string[];
  connections: string[];
}

export const modules: Module[] = [
  {
    id: 'pos',
    name: 'Point of Sale',
    icon: '🛒',
    shortDescription: 'Fast checkout with offline mode. Process sales without internet — syncs automatically when connectivity returns.',
    features: [
      'Barcode scanning and product lookup',
      'Cash, card, and split payments',
      'Works completely offline',
      'Receipt printing with tax invoice QR',
      'Automatic inventory deduction',
      'Automatic GL journal posting',
    ],
    connections: ['inventory', 'accounting', 'sales'],
  },
  {
    id: 'accounting',
    name: 'Accounting & GL',
    icon: '📊',
    shortDescription: 'Full double-entry general ledger with automatic journal posting from every business transaction.',
    features: [
      'Chart of accounts with UAE-standard seed',
      'Automatic journal entries from sales, purchases, expenses',
      'Bank reconciliation with CSV import',
      'Fiscal year management with period closing',
      'Trial balance and financial statements',
      'Fixed asset register with depreciation',
      'Cost center tracking and allocation',
      'Budget management with variance analysis',
    ],
    connections: ['pos', 'sales', 'purchasing', 'hr', 'inventory'],
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    icon: '📦',
    shortDescription: 'Multi-location stock tracking with real-time sync across all devices.',
    features: [
      'Multi-location stock balances',
      'Stock transfers between locations',
      'Stocktake sessions with variance posting',
      'Automatic reorder point alerts',
      'Stock movements with full audit trail',
      'Weighted average and FIFO valuation',
      'Serial and batch tracking',
    ],
    connections: ['pos', 'purchasing', 'sales', 'bom'],
  },
  {
    id: 'hr',
    name: 'HR & Payroll',
    icon: '👥',
    shortDescription: 'UAE WPS-ready payroll with leave management, attendance tracking, and department organization.',
    features: [
      'Employee master with department assignment',
      'Configurable salary components',
      'Monthly payroll generation',
      'UAE WPS file export (SIF format)',
      'Leave management with approval workflow',
      'Attendance tracking',
      'End-of-service gratuity calculation',
      'Automatic GL posting for payroll',
    ],
    connections: ['accounting'],
  },
  {
    id: 'purchasing',
    name: 'Purchasing',
    icon: '🛍️',
    shortDescription: 'Purchase orders with GRN tracking, supplier management, and automatic stock receipt.',
    features: [
      'Purchase order lifecycle management',
      'Goods Received Notes (GRN)',
      'Three-way matching (PO vs GRN vs Invoice)',
      'Supplier master with contact details',
      'Automatic stock receipt on GRN confirmation',
      'Automatic GL posting',
    ],
    connections: ['inventory', 'accounting', 'trade'],
  },
  {
    id: 'sales',
    name: 'Sales & Orders',
    icon: '📋',
    shortDescription: 'B2B sales order management with delivery notes, commissions, and approval workflows.',
    features: [
      'Sales order lifecycle management',
      'Delivery notes with line tracking',
      'Commission rules and payout tracking',
      'Promotion rules engine',
      'Customer credit management',
      'Approval workflows',
      'Multi-currency support',
    ],
    connections: ['inventory', 'accounting', 'quotations'],
  },
  {
    id: 'quotations',
    name: 'Quotations',
    icon: '📝',
    shortDescription: 'Professional quotation generation with automatic conversion to sales orders.',
    features: [
      'Professional quotation creation',
      'Line items with tax calculation',
      'One-click conversion to sales order',
      'Version tracking',
      'PDF generation and sharing',
    ],
    connections: ['sales', 'products'],
  },
  {
    id: 'trade',
    name: 'Trade & Logistics',
    icon: '🚢',
    shortDescription: 'Import/export document handling with shipment tracking and landed cost allocation.',
    features: [
      'Shipment tracking and management',
      'Landed cost allocation across purchase lines',
      'Post-dated cheque (PDC) register',
      'Import/export documentation',
      'Payment milestones',
    ],
    connections: ['purchasing', 'inventory', 'accounting'],
  },
  {
    id: 'bom',
    name: 'Bill of Materials',
    icon: '🔧',
    shortDescription: 'BOM definition with component breakdown and assembly order management.',
    features: [
      'Multi-level BOM definition',
      'Component cost rollup',
      'Assembly order management',
      'Component availability checking',
    ],
    connections: ['inventory', 'products', 'accounting'],
  },
  {
    id: 'products',
    name: 'Products & Variants',
    icon: '🏷️',
    shortDescription: 'Product catalog with variants, specifications, barcodes, and price lists.',
    features: [
      'Product master with SKU management',
      'Product variants and attributes',
      'Barcode and QR code support',
      'Date-effective price lists',
      'Category hierarchy',
      'Product specifications',
    ],
    connections: ['pos', 'inventory', 'sales', 'purchasing'],
  },
  {
    id: 'reports',
    name: 'Reports & Analytics',
    icon: '📈',
    shortDescription: 'Comprehensive financial and operational reports across all modules.',
    features: [
      'Profit and loss statement',
      'Balance sheet',
      'Cash flow statement',
      'VAT return summary (FTA Form 201)',
      'Sales and inventory reports',
      'Stock valuation and aging',
      'Payroll summaries',
    ],
    connections: ['accounting', 'sales', 'inventory', 'hr'],
  },
  {
    id: 'expenses',
    name: 'Expenses',
    icon: '💳',
    shortDescription: 'Expense recording and categorization with automatic GL posting.',
    features: [
      'Expense recording and categorization',
      'Automatic GL journal posting',
      'Expense approval workflow',
      'Category-based reporting',
    ],
    connections: ['accounting'],
  },
  {
    id: 'credit-notes',
    name: 'Credit & Debit Notes',
    icon: '🔄',
    shortDescription: 'Credit and debit note issuance with automatic accounting entries and invoice allocation.',
    features: [
      'Credit note issuance for returns',
      'Debit note for supplier adjustments',
      'Automatic reversing journal entries',
      'Allocation against open invoices',
    ],
    connections: ['sales', 'purchasing', 'accounting'],
  },
  {
    id: 'returns',
    name: 'Returns & Warranty',
    icon: '↩️',
    shortDescription: 'Sales return processing with warranty tracking and stock reversal.',
    features: [
      'Sales return processing',
      'Warranty tracking per product',
      'Automatic stock reversal',
      'Return reason tracking',
    ],
    connections: ['pos', 'sales', 'inventory'],
  },
  {
    id: 'sync',
    name: 'Offline Sync Engine',
    icon: '🔄',
    shortDescription: 'Intelligent sync that works offline-first. Commands up, facts down — every device stays consistent.',
    features: [
      'Full offline operation for all modules',
      'Automatic sync when online',
      'Conflict detection and resolution',
      'Device-level sequence tracking',
      'Transaction-boundary consistency',
      'Multi-device coordination',
    ],
    connections: ['all'],
  },
];

export interface PricingTier {
  name: string;
  price: { monthly: number; annual: number } | 'custom';
  description: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  limits: { users: string; locations: string; products: string };
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Trial',
    price: { monthly: 0, annual: 0 },
    description: 'Try everything free for 14 days.',
    badge: 'Free',
    features: ['All modules included', 'Up to 3 users', 'Up to 3 devices', 'Full offline sync', 'Email support'],
    limits: { users: '3', locations: '1', products: 'Unlimited' },
    cta: 'Start Free Trial',
  },
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    description: 'For solo operators and small shops.',
    features: ['POS + Inventory + Accounting', '1 user', '1 device', 'Up to 500 products', 'UAE VAT reports', 'Email support'],
    limits: { users: '1', locations: '1', products: '500' },
    cta: 'Get Started',
  },
  {
    name: 'Business',
    price: { monthly: 99, annual: 79 },
    description: 'For growing businesses with a team.',
    badge: 'Most Popular',
    highlighted: true,
    features: ['Everything in Starter', '3 users, 3 devices', 'Unlimited products', 'HR & Payroll (WPS)', 'Purchasing with GRN', 'Sales orders & quotations', 'Bank reconciliation', 'Fixed assets', 'Priority support'],
    limits: { users: '3', locations: '3', products: 'Unlimited' },
    cta: 'Get Started',
  },
  {
    name: 'Trade',
    price: { monthly: 199, annual: 159 },
    description: 'For trading companies and importers.',
    features: ['Everything in Business', '5 users, 5 devices', 'Multi-currency support', 'Trade & logistics module', 'Landed cost allocation', 'PDC register', 'Commissions & promotions', 'Phone + email support'],
    limits: { users: '5', locations: '5', products: 'Unlimited' },
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: { monthly: 399, annual: 319 },
    description: 'For multi-location operations.',
    features: ['Everything in Trade', '10+ users, 10 devices', 'Multi-location inventory', 'BOM & assembly', 'Stock transfers', 'Cost center tracking', 'Advanced analytics', 'Approval workflows', 'Dedicated support'],
    limits: { users: '10+', locations: '10', products: 'Unlimited' },
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'custom',
    description: 'For large operations needing custom solutions.',
    badge: 'Custom',
    features: ['Everything in Pro', 'Unlimited users & devices', 'Unlimited locations', 'Dedicated infrastructure', 'Custom integrations', 'SLA guarantee', 'On-site training', 'Dedicated account manager'],
    limits: { users: 'Unlimited', locations: 'Unlimited', products: 'Unlimited' },
    cta: 'Contact Sales',
  },
];

export interface Competitor {
  name: string;
  offlinePos: boolean | 'partial';
  uaeVat: boolean | 'partial';
  wpsPayroll: boolean | 'partial';
  arabicInvoices: boolean | 'partial';
  nativeApp: boolean | 'partial';
  doubleEntryGl: boolean;
  offlineSync: boolean;
  startingPrice: string;
  implementationTime: string;
}

export const competitors: Competitor[] = [
  { name: 'Odoo', offlinePos: false, uaeVat: 'partial', wpsPayroll: false, arabicInvoices: 'partial', nativeApp: false, doubleEntryGl: true, offlineSync: false, startingPrice: 'Free (limited)', implementationTime: 'Weeks' },
  { name: 'SAP Business One', offlinePos: false, uaeVat: true, wpsPayroll: 'partial', arabicInvoices: true, nativeApp: false, doubleEntryGl: true, offlineSync: false, startingPrice: '$95/user/mo', implementationTime: '3-6 months' },
  { name: 'Dynamics 365 BC', offlinePos: false, uaeVat: true, wpsPayroll: 'partial', arabicInvoices: true, nativeApp: false, doubleEntryGl: true, offlineSync: false, startingPrice: '$70/user/mo', implementationTime: '2-4 months' },
  { name: 'ERPNext', offlinePos: false, uaeVat: 'partial', wpsPayroll: false, arabicInvoices: 'partial', nativeApp: false, doubleEntryGl: true, offlineSync: false, startingPrice: 'Free (self-host)', implementationTime: 'Weeks' },
];

export const navLinks = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Enterprise', href: '/enterprise/' },
  { label: 'Compliance', href: '/compliance/' },
];

export interface ComplianceArea {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export const complianceAreas: ComplianceArea[] = [
  {
    title: 'FTA VAT Compliance',
    icon: '🏛️',
    description: 'Full UAE Federal Tax Authority VAT compliance built into every transaction.',
    features: [
      '5% standard VAT rate built into all transactions',
      'Tax-inclusive and tax-exclusive pricing',
      'VAT return summary (FTA Form 201)',
      'Tax Registration Number (TRN) on all invoices',
      'Zero-rated and exempt supply support',
      'Tax groups for multi-rate scenarios',
      'Reverse charge mechanism for imports',
    ],
  },
  {
    title: 'Tax Invoices with QR',
    icon: '📄',
    description: 'FTA-compliant tax invoices with QR codes encoding seller TRN, amount, and VAT.',
    features: [
      'Compliant tax invoice format per FTA',
      'QR code with TLV-encoded seller data',
      'Simplified tax invoices (under AED 10,000)',
      'Arabic + English bilingual support',
      'Sequential invoice numbering',
      'Credit/debit note referencing',
    ],
  },
  {
    title: 'WPS Payroll',
    icon: '💰',
    description: 'UAE Wage Protection System integration with SIF file generation.',
    features: [
      'WPS SIF file generation for UAE banks',
      'Salary component breakdown',
      'End-of-service gratuity (UAE labor law)',
      'Payroll run with approval workflow',
      'Monthly payroll reports',
      'Bank IBAN and labour card tracking',
    ],
  },
  {
    title: 'Arabic Language Support',
    icon: '🌍',
    description: 'Arabic text support for products, customers, documents, and invoices.',
    features: [
      'Arabic product names and descriptions',
      'Arabic customer and supplier names',
      'Bilingual tax invoices (AR + EN)',
      'Arabic date formatting',
      'Right-to-left text rendering for documents',
    ],
  },
  {
    title: 'Multi-Currency',
    icon: '💱',
    description: 'AED as default with full multi-currency support for international trade.',
    features: [
      'AED as default currency',
      'Multi-currency invoicing and payments',
      'Exchange rate management',
      'Forex gain/loss journal entries',
      'Period-end revaluation',
    ],
  },
  {
    title: 'Data Security',
    icon: '🔒',
    description: 'Enterprise-grade data isolation with full audit trails.',
    features: [
      'Tenant-level data isolation',
      'JWT-based authentication',
      'Role-based access control',
      'Full audit trail for financial transactions',
      'Encrypted data at rest and in transit',
    ],
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const pricingFaqs: FAQ[] = [
  { question: 'Can I switch plans anytime?', answer: 'Yes. Upgrade or downgrade anytime. Changes take effect on your next billing cycle.' },
  { question: 'Is there a contract or commitment?', answer: 'No contracts. Pay monthly or save 20% with annual billing. Cancel anytime.' },
  { question: 'What payment methods do you accept?', answer: 'Credit/debit cards (Visa, Mastercard), and bank transfers for annual plans.' },
  { question: 'Do prices include VAT?', answer: 'Prices shown are exclusive of UAE VAT (5%). VAT will be added at checkout for UAE customers.' },
  { question: 'What happens when my trial ends?', answer: 'Your data is preserved. Choose a plan to continue, or your account moves to read-only mode.' },
  { question: 'Can I get a custom plan?', answer: 'Yes. Contact our sales team for Enterprise plans with custom limits, integrations, and SLA.' },
];
