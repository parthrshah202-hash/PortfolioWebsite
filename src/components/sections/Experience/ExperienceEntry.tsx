import React from 'react';
import { ExperienceItem } from '@/types/content';
import Tag from '@/components/ui/Tag';
import Divider from '@/components/ui/Divider';

interface ExperienceEntryProps {
  item: ExperienceItem;
  showDivider?: boolean;
}

export default function ExperienceEntry({ item, showDivider = true }: ExperienceEntryProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Title row */}
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-serif text-h3 font-semibold text-text-primary">
          {item.title}
        </h3>
        <Tag
          label={item.type === 'education' ? 'Education' : 'Experience'}
          variant="default"
        />
      </div>

      {/* Meta Row */}
      <div className="font-sans text-meta text-text-secondary">
        {item.organization} <span className="mx-1.5">&middot;</span> {item.dateRange}
      </div>

      {/* Description */}
      {item.description && (
        <p className="font-sans text-body text-text-secondary leading-relaxed max-w-[65ch]">
          {item.description}
        </p>
      )}

      {showDivider && <Divider className="my-4" />}
    </div>
  );
}
