"use client";

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = canvas.width = canvas.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.offsetHeight || window.innerHeight;

    // Mouse coordinates tracking
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120, // Connection reach distance
    };

    // Watch visibility to pause loops when scrolled out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles array
    const maxParticles = Math.min(50, Math.floor((width * height) / 14000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, // Extremely slow drifting movement
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.2 + 0.8,
      });
    }

    // Dynamic color parsing to adapt on dark/light mode toggles
    let accentColor = '#AC5029';
    let textColor = 'rgba(107, 102, 97, 0.12)';

    const updateColors = () => {
      if (typeof window === 'undefined') return;
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue('--color-accent').trim() || '#AC5029';
      accentColor = accent;

      const rawText = style.getPropertyValue('--color-text-secondary').trim() || '#6B6661';
      if (rawText.startsWith('#')) {
        const r = parseInt(rawText.slice(1, 3), 16);
        const g = parseInt(rawText.slice(3, 5), 16);
        const b = parseInt(rawText.slice(5, 7), 16);
        textColor = `rgba(${r}, ${g}, ${b}, 0.12)`;
      } else {
        textColor = 'rgba(107, 102, 97, 0.12)';
      }
    };

    updateColors();
    // Periodically update colors to catch dark mode changes instantly
    const colorInterval = setInterval(updateColors, 1000);

    const animate = () => {
      if (!isVisible || shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Update and draw floating nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Clamp inside bounds
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = accentColor + '20'; // ~12% opacity hex code
        ctx.fill();
      });

      // Draw connection vectors
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connector to mouse cursor pointer
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Append hex alpha opacity
            const hexAlpha = Math.floor(alpha * 255).toString(16).padStart(2, '0');
            ctx.strokeStyle = accentColor.startsWith('#') ? `${accentColor}${hexAlpha}` : accentColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connectors between floating particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const hexAlpha = Math.floor(alpha * 255).toString(16).padStart(2, '0');
            ctx.strokeStyle = accentColor.startsWith('#') ? `${accentColor}${hexAlpha}` : textColor;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (shouldReduceMotion) {
      // Static render if user prefers reduced motion
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = accentColor + '15';
        ctx.fill();
      });
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(colorInterval);
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-60"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
