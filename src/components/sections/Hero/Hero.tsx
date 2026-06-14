"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { siteConfig } from "@/content/site";
import { fadeInHero } from "@/lib/motion";
import PageContainer from "@/components/layout/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import HeroBackground from "./HeroBackground";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full py-8 md:py-12 bg-background flex items-center min-h-[calc(100vh-4.5rem)] md:min-h-[calc(100vh-5rem)] overflow-hidden"
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      <HeroBackground />

      <PageContainer className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInHero}
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 items-center w-full"
        >
          {/* Left Text Block */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">
            {/* Status Line */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-sans text-meta text-text-secondary">
                {siteConfig.statusLine}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-text-primary tracking-tighter leading-none mb-4">
              {siteConfig.name}
            </h1>

            {/* Role */}
            <p className="text-xl md:text-2xl font-medium text-text-primary mb-3">
              {siteConfig.role}
            </p>


            {/* Typing Tagline - Fixed height container */}
            <div className="font-sans text-lg md:text-xl text-text-secondary min-h-[85px] md:min-h-[95px] h-auto w-full mb-6 flex items-center overflow-visible py-2">
              <Typewriter
                words={[
                  siteConfig.tagline,
                  "Building real-world data systems.",
                  "Turning logs into insights.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2800}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start w-full">
              <LinkButton href="#projects" variant="primary">
                View Projects
              </LinkButton>
              <LinkButton
                href="/resume/Parth_Shah_Resume.pdf"
                variant="primary"
              >
                Download Resume
              </LinkButton>
              <LinkButton href="#contact" variant="subtle">
                Get in Touch
              </LinkButton>
            </div>
          </div>

          {/* Profile Photo Wrapper */}
          <div className="flex justify-center items-center w-full mt-6 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-accent via-purple-500 to-pink-500 rounded-[3rem] opacity-20 blur-3xl" />
              <Image
                src="/profile.png"
                alt="Parth Shah"
                width={280}
                height={280}
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-3xl object-cover border-8 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}