"use client";

import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import PipelineDiagram from '../Hero/PipelineDiagram';
import FadeInSection from '@/components/motion/FadeInSection';

export default function Workflow() {
  return (
    <FadeInSection>
      <section id="workflow" className="py-12 md:py-16 bg-background">
        <PageContainer className="flex flex-col items-center justify-center w-full">
          <PipelineDiagram />
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
