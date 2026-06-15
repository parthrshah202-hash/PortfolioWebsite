import React from 'react';
import { projects } from '@/content/projects';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';
import ProjectEntry from './ProjectEntry';

export default function Projects() {
  return (
    <FadeInSection>
      <section id="projects" className="py-12 md:py-16 bg-background">
        <PageContainer className="flex flex-col gap-8">
          <SectionHeading
            title="Projects"
            subtitle="A selection of things I've built and am building."
          />
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
