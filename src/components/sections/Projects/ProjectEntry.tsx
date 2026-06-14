import React from 'react';
import { Project } from '@/types/content';
import FadeInSection from '@/components/motion/FadeInSection';
import StatusBadge from '@/components/ui/StatusBadge';
import Tag from '@/components/ui/Tag';
import LinkButton from '@/components/ui/LinkButton';

interface ProjectEntryProps {
  project: Project;
}

interface ThumbnailConfig {
  backgroundImage: string;
  badgeText: string;
}

const getThumbnailConfig = (projectId: string): ThumbnailConfig => {
  switch (projectId) {
    case 'auto-schema-pipeline':
      return {
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><rect width='60' height='60' fill='none'/><path d='M 0 10 L 60 10 M 0 30 L 60 30 M 0 50 L 60 50 M 20 0 L 20 60 M 40 0 L 40 60' stroke='rgba(255,255,255,0.08)' stroke-width='1'/></svg>\"), linear-gradient(135deg, #1e3a8a 0%, #4f46e5 100%)",
        badgeText: "Python + SQL + AI",
      };
    case 'universal-data-ingestion':
      return {
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><rect width='40' height='40' fill='none'/><path d='M 0 20 Q 10 5, 20 20 T 40 20' stroke='rgba(255,255,255,0.08)' fill='none' stroke-width='1.5'/><path d='M 0 10 Q 10 25, 20 10 T 40 10' stroke='rgba(255,255,255,0.04)' fill='none' stroke-width='1'/></svg>\"), linear-gradient(135deg, #064e3b 0%, #059669 100%)",
        badgeText: "ETL Ingestion + ML",
      };
    case 'confidence-detection-llms':
      return {
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><rect width='50' height='50' fill='none'/><circle cx='10' cy='10' r='3' fill='rgba(255,255,255,0.15)'/><circle cx='40' cy='20' r='4' fill='rgba(255,255,255,0.1)'/><circle cx='20' cy='40' r='3.5' fill='rgba(255,255,255,0.12)'/><line x1='10' y1='10' x2='40' y2='20' stroke='rgba(255,255,255,0.05)' stroke-width='1'/><line x1='40' y1='20' x2='20' y2='40' stroke='rgba(255,255,255,0.05)' stroke-width='1'/><line x1='20' y1='40' x2='10' y2='10' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></svg>\"), linear-gradient(135deg, #78350f 0%, #d97706 100%)",
        badgeText: "NLP + ML Research",
      };
    case 'ai-coding-mentor':
      return {
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><rect width='40' height='40' fill='none'/><text x='5' y='15' fill='rgba(255,255,255,0.08)' font-family='monospace' font-size='10'>{ }</text><text x='25' y='30' fill='rgba(255,255,255,0.08)' font-family='monospace' font-size='10'>&lt;/&gt;</text></svg>\"), linear-gradient(135deg, #311b92 0%, #6200ea 100%)",
        badgeText: "DSA Hints Engine",
      };
    case 'log-data-pipeline':
    default:
      return {
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'><rect width='60' height='40' fill='none'/><line x1='5' y1='10' x2='35' y2='10' stroke='rgba(255,255,255,0.07)' stroke-width='2'/><line x1='5' y1='20' x2='45' y2='20' stroke='rgba(255,255,255,0.05)' stroke-width='2'/><line x1='5' y1='30' x2='25' y2='30' stroke='rgba(255,255,255,0.07)' stroke-width='2'/><circle cx='50' cy='10' r='1.5' fill='rgba(255,255,255,0.12)'/><circle cx='55' cy='30' r='1.5' fill='rgba(255,255,255,0.12)'/></svg>\"), linear-gradient(135deg, #374151 0%, #111827 100%)",
        badgeText: "Log Analytics",
      };
  }
};

const SCREENSHOT_MAP: Record<string, string> = {
  'auto-schema-pipeline': '/images/projects/auto-schema-dashboard.png',
  'log-data-pipeline': '/images/projects/logdata-dashboard.png',
  'ai-coding-mentor': '/images/projects/coding-mentor-dashboard.png',
};

export default function ProjectEntry({ project }: ProjectEntryProps) {
  const hasLinks = !!(project.links.repo || project.links.demo);
  const { backgroundImage, badgeText } = getThumbnailConfig(project.id);
  const screenshotUrl = SCREENSHOT_MAP[project.id];

  return (
    <FadeInSection>
      <div className="rounded-md border border-transparent hover:border-border hover:bg-surface hover:shadow-lg hover:translate-y-[-6px] transition-all duration-300 ease-out flex flex-col overflow-hidden bg-surface/30 group">
        {/* Project Visual Thumbnail Area */}
        <div className="w-full h-[200px] relative overflow-hidden bg-surface select-none">
          {screenshotUrl ? (
            <img
              src={screenshotUrl}
              alt={`${project.title} dashboard screenshot`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              style={{ backgroundImage }}
            />
          )}

          {/* Floating Tech Pill Badge */}
          <div className="absolute top-4 right-4 z-10 bg-background/95 backdrop-blur-sm text-text-primary text-[0.6875rem] font-mono font-medium tracking-wider uppercase px-2.5 py-1 border border-border rounded-sm shadow-sm select-none">
            {badgeText}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col gap-4 flex-grow">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-serif text-h3 font-semibold text-text-primary">
                {project.title}
              </h3>
              <StatusBadge status={project.status} />
            </div>
            <span className="font-sans text-meta text-text-secondary shrink-0">
              {project.timeframe}
            </span>
          </div>

          {/* Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech} label={tech} variant="default" />
            ))}
          </div>

          {/* Description */}
          <p className="font-sans text-body text-text-secondary leading-relaxed max-w-[65ch]">
            {project.description}
          </p>

          {/* Links Row */}
          {hasLinks && (
            <div className="flex flex-wrap gap-4 mt-2">
              {project.links.repo && (
                <LinkButton href={project.links.repo} variant="subtle">
                  View on GitHub
                </LinkButton>
              )}
              {project.links.demo && (
                <LinkButton href={project.links.demo} variant="primary">
                  Try the Demo
                </LinkButton>
              )}
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
}
