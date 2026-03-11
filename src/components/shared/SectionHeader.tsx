interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ overline, title, subtitle, light }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl mb-16">
      {overline && (
        <p className="text-sm font-medium uppercase tracking-widest text-zubda-500 mb-4">
          {overline}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight mb-5 ${light ? 'text-white' : 'text-[#161616]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-gray-400' : 'text-[#525252]'}`}>{subtitle}</p>
      )}
    </div>
  );
}
