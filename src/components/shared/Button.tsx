import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary: 'bg-zubda-500 text-white hover:bg-zubda-600 shadow-md hover:shadow-lg',
  secondary: 'border-2 border-zubda-500 text-zubda-500 hover:bg-zubda-50 dark:hover:bg-zubda-950',
  ghost: 'text-zubda-500 hover:text-zubda-600 hover:underline',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({ variant = 'primary', size = 'md', href, children, className = '' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
