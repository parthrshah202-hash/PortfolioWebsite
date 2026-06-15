import React from 'react';
import { experience } from '@/content/experience';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';
import ExperienceEntry from './ExperienceEntry';

export default function Experience() {
  return (
    <FadeInSection>
      <section id="experience" className="py-12 md:py-16 bg-background">
        <PageContainer className="flex flex-col gap-8">
          <SectionHeading title="Experience & Education" />
          <div className="flex flex-col gap-6">
            {experience.map((item, index) => (
              <ExperienceEntry
                key={`${item.organization}-${item.title}`}
                item={item}
                showDivider={index !== experience.length - 1}
              />
            ))}
          </div>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
