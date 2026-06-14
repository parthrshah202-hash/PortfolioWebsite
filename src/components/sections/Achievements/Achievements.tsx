"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '@/content/achievements';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/layout/PageContainer';
import AchievementEntry from './AchievementEntry';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 lg:py-24 bg-background overflow-hidden">
      <PageContainer className="flex flex-col gap-12">
        <SectionHeading title="Achievements & Certifications" />
        
        <div className="relative w-full flex flex-col gap-12 mt-4">
          {/* Animated Timeline Center/Left Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-2 bottom-2 w-[2px] bg-accent/30 left-7 md:left-1/2 -translate-x-1/2 origin-top"
          />

          {achievements.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <AchievementEntry
                key={`${item.year}-${item.title}`}
                item={item}
                isLeft={isLeft}
                isLast={index === achievements.length - 1}
              />
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
