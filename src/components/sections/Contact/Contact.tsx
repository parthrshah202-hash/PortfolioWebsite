"use client";

import React from 'react';
import { siteConfig } from '@/content/site';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';

export default function Contact() {
  return (
    <FadeInSection>
      <section id="contact" className="py-12 md:py-16 lg:py-28 bg-background border-t border-border/45">
        <PageContainer className="flex flex-col items-center text-center gap-10">
          {/* Section Heading */}
          <SectionHeading
            title="Contact"
            className="items-center text-center"
          />

          {/* Networking & Collaboration Statement */}
          <div className="max-w-2xl mx-auto">
            <p className="font-sans text-body md:text-lg text-text-secondary leading-relaxed">
              Open to internships, research collaborations, open-source contributions, and conversations around AI, data science, and software engineering.
            </p>
          </div>

          {/* 3-Column Networking Cards Gutter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-4">
            
            {/* Direct Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/30 border border-border hover:border-accent/40 hover:bg-surface hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-tint text-accent flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-150 mb-1">
                Email
              </h3>
              <span className="font-mono text-xs text-text-secondary tracking-tight break-all">
                {siteConfig.email}
              </span>
            </a>

            {/* GitHub Profile Card */}
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/30 border border-border hover:border-accent/40 hover:bg-surface hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[#181717]/10 dark:bg-white/10 text-text-primary flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-150 mb-1">
                GitHub
              </h3>
              <span className="font-sans text-xs text-text-secondary">
                parthrshah202-hash
              </span>
            </a>

            {/* LinkedIn Network Card */}
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/30 border border-border hover:border-accent/40 hover:bg-surface hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-150 mb-1">
                LinkedIn
              </h3>
              <span className="font-sans text-xs text-text-secondary">
                parthrshah202
              </span>
            </a>

          </div>
        </PageContainer>
      </section>
    </FadeInSection>
  );
}
