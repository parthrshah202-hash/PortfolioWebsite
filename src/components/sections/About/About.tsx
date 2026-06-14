import React from 'react';
import { siteConfig } from '@/content/site';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';

export default function About() {
  return (
    <FadeInSection>
      <section id="about" className="pt-12 lg:pt-16 pb-24 bg-background">
        <PageContainer className="flex flex-col gap-6">
          <SectionHeading title="About" />
          <p className="font-sans text-body text-text-secondary leading-relaxed max-w-[65ch]">
            {siteConfig.bio}
          </p>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
