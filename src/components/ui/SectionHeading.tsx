import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2 className="font-serif text-h2 font-semibold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-meta text-text-secondary font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
