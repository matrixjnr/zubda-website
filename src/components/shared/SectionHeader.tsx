interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-zubda-50 text-zubda-600 dark:bg-zubda-950 dark:text-zubda-300 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
