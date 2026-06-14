import React from 'react';
import { SkillGroup as SkillGroupType } from '@/types/content';
import Tag from '@/components/ui/Tag';

interface SkillGroupProps {
  group: SkillGroupType;
}

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="flex flex-col">
      <h3 className="font-sans font-semibold text-[0.9375rem] text-text-primary mb-3">
        {group.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
