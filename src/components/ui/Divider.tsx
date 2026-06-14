import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <hr className={cn("border-t border-border w-full my-6", className)} />
  );
}
