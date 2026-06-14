import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TextLink({ href, children, className, ...props }: TextLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  
  const linkClasses = cn(
    "relative inline text-text-primary hover:text-accent transition-colors duration-200",
    "after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded-sm",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses} {...props}>
      {children}
    </Link>
  );
}
