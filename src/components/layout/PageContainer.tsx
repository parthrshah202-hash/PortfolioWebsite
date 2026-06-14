import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("w-full max-w-[1024px] mx-auto px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
