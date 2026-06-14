import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectStatus } from '@/types/content';

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusConfig = {
  live: {
    label: 'Live',
    styles: 'bg-accent-tint text-accent border-transparent',
  },
  'in-progress': {
    label: 'In Progress',
    styles: 'border-accent text-accent bg-transparent',
  },
  research: {
    label: 'Research',
    styles: 'border-text-secondary text-text-secondary bg-transparent',
  },
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  if (!config) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono text-tag font-medium uppercase rounded-sm border px-2 py-0.5 transition-colors duration-150",
        config.styles,
        className
      )}
    >
      {config.label}
    </span>
  );
}
