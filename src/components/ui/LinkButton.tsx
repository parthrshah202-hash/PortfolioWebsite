import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'subtle';
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({ href, variant = 'primary', children, className, ...props }: LinkButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  const buttonClasses = cn(
    "inline-flex items-center justify-center font-sans text-nav font-medium transition-colors duration-150 rounded-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variant === 'primary'
      ? "border border-accent text-accent bg-transparent hover:bg-accent-tint px-4 py-2"
      : "text-text-secondary hover:text-accent bg-transparent px-2 py-1",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses} {...props}>
      {children}
    </Link>
  );
}
