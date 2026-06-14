import React from 'react';
import { skills } from '@/content/skills';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';
import SkillGroup from './SkillGroup';

export default function Skills() {
  return (
    <FadeInSection>
      <section id="skills" className="py-12 lg:py-16 bg-background">
        <PageContainer className="flex flex-col gap-8">
          <SectionHeading
            title="Skills"
            subtitle="Languages, tools, and concepts I'm working with."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {skills.map((group) => (
              <SkillGroup key={group.label} group={group} />
            ))}
          </div>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
