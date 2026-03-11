import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary: 'bg-zubda-500 text-white hover:bg-zubda-600',
  secondary: 'border border-gray-300 text-[#161616] hover:border-zubda-500 hover:text-zubda-500',
  ghost: 'text-zubda-500 hover:text-zubda-600',
};

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function Button({ variant = 'primary', size = 'md', href, children, className = '' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
