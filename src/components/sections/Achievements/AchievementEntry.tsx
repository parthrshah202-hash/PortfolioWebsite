"use client";

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { AchievementItem } from '@/types/content';
import { Code, Award, Cpu, Star, Briefcase, LucideIcon } from 'lucide-react';

interface AchievementEntryProps {
  item: AchievementItem;
  isLeft: boolean;
  isLast?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  award: Award,
  cpu: Cpu,
  star: Star,
  briefcase: Briefcase,
};

export default function AchievementEntry({ item, isLeft, isLast = false }: AchievementEntryProps) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Award;

  // Variants for the card entry
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Variants for the circular nodes
  const nodeVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.15,
      },
    },
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full min-h-[120px]">
      {/* Timeline Bullet Node with Ping Animation */}
      <motion.div
        variants={nodeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="absolute top-6 left-5 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
      >
        <div className="w-5 h-5 rounded-full border-4 border-accent bg-background shadow-md flex items-center justify-center relative">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping" />
        </div>
      </motion.div>

      {/* Card Wrapper with Alternating Alignment */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`w-full pl-10 md:pl-0 flex ${
          isLeft
            ? 'md:w-[calc(50%-2.5rem)] md:mr-auto justify-end'
            : 'md:w-[calc(50%-2.5rem)] md:ml-auto justify-start'
        }`}
      >
        {/* Actual Card */}
        <div className="w-full max-w-xl p-5 md:p-6 rounded-2xl bg-surface/30 border border-border hover:border-accent/40 hover:bg-surface hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 text-left group">
          {/* Decorative Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-tint text-accent shrink-0 group-hover:scale-105 transition-transform duration-300">
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            {/* Header: Title and Timeframe Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
              <h3 className="font-serif text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              
              <span className="bg-accent-tint text-accent font-mono font-semibold text-[0.75rem] px-2 py-0.5 rounded-[4px] whitespace-nowrap self-start sm:self-center">
                {item.year}
              </span>
            </div>

            {/* Issuer Badge */}
            {item.issuer && (
              <span className="font-sans font-medium text-[0.8125rem] text-text-secondary select-none">
                {item.issuer}
              </span>
            )}

            {/* Description */}
            {item.description && (
              <p className="font-sans text-body text-text-secondary leading-relaxed mt-1">
                {item.description}
              </p>
            )}

            {/* Optional Link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.8125rem] font-semibold text-accent hover:underline mt-2 self-start flex items-center gap-1 group/link"
              >
                View Credential
                <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
