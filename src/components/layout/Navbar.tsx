"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import PageContainer from './PageContainer';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 ease-in-out py-4",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-nav-scrolled"
          : "bg-transparent"
      )}
    >
      <PageContainer className="relative">
        <div className="flex items-center justify-between w-full">
          {/* Logo Name Link */}
          <Link
            href="#hero"
            className="font-serif text-h3 font-semibold text-text-primary hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded-sm"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "relative font-sans text-nav font-medium text-text-secondary hover:text-accent transition-colors duration-150",
                  "after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded-sm"
                )}
              >
                {link.label}
              </a>
            ))}

            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 rounded-full border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent flex items-center justify-center transition-all duration-150 hover:scale-105 ml-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 rounded-full border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent flex items-center justify-center transition-all duration-150"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.2 border border-border rounded bg-surface hover:border-accent transition-colors duration-150 relative cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className={cn(
                "w-4 h-0.5 bg-text-primary transition-all duration-200",
                isOpen ? "rotate-45 translate-y-[5px]" : ""
              )} />
              <span className={cn(
                "w-4 h-0.5 bg-text-primary transition-all duration-150",
                isOpen ? "opacity-0" : ""
              )} />
              <span className={cn(
                "w-4 h-0.5 bg-text-primary transition-all duration-200",
                isOpen ? "-rotate-45 -translate-y-[5px]" : ""
              )} />
            </button>
          </div>
        </div>

        {/* Collapsible Mobile Links Gutter */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out md:hidden overflow-hidden w-full",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4 border-t border-border pt-4 pb-2" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-nav font-medium text-text-secondary hover:text-accent py-1.5 transition-colors duration-150 border-b border-border/10 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </PageContainer>
    </nav>
  );
}
