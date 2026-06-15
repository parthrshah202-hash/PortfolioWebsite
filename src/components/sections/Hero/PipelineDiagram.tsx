"use client";

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Database, GitBranch, Brain, BarChart3 } from 'lucide-react';

interface PipelineDiagramProps {
  className?: string;
}

export default function PipelineDiagram({ className = '' }: PipelineDiagramProps) {
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    {
      id: 'data',
      title: 'Data Ingestion',
      subtitle: 'Structured DBs, logs & stream telemetry',
      icon: Database,
      color: 'var(--color-node-data)',
      bgColor: 'var(--color-node-data-bg)',
      glowColor: 'var(--color-node-data-glow)',
    },
    {
      id: 'pipeline',
      title: 'Processing Pipeline',
      subtitle: 'Real-time cleaning & feature extraction',
      icon: GitBranch,
      color: 'var(--color-node-pipeline)',
      bgColor: 'var(--color-node-pipeline-bg)',
      glowColor: 'var(--color-node-pipeline-glow)',
    },
    {
      id: 'model',
      title: 'AI & ML Modeling',
      subtitle: 'Training, evaluation & low-latency serving',
      icon: Brain,
      color: 'var(--color-node-model)',
      bgColor: 'var(--color-node-model-bg)',
      glowColor: 'var(--color-node-model-glow)',
    },
    {
      id: 'insight',
      title: 'Actionable Insights',
      subtitle: 'Predictive analytics & decision dashboards',
      icon: BarChart3,
      color: 'var(--color-node-insight)',
      bgColor: 'var(--color-node-insight-bg)',
      glowColor: 'var(--color-node-insight-glow)',
    },
  ];

  // Container variants to stagger child card entries
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  // Individual node card animation variants
  const nodeVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Connector line drawing variants
  const lineVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.75, // Animates after the nodes start appearing
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`w-full flex flex-col md:flex-row items-center justify-between gap-4 py-8 md:py-12 px-2 select-none ${className}`}
    >
      {nodes.map((node, index) => {
        const NodeIcon = node.icon;
        const isLast = index === nodes.length - 1;

        return (
          <React.Fragment key={node.id}>
            {/* Process Flow Card Node */}
            <motion.div
              variants={nodeVariants}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      scale: 1.025,
                      borderColor: node.color,
                      boxShadow: `0 10px 30px -10px ${node.glowColor}`,
                    }
              }
              className="flex-1 w-full md:w-auto min-w-[200px] max-w-[260px] md:max-w-none flex flex-row md:flex-col items-center md:items-start p-4 md:p-5 rounded-2xl bg-surface border border-border transition-all duration-300 relative group"
            >
              {/* Icon container with distinct accent colors */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition-colors duration-300 md:mb-4"
                style={{
                  backgroundColor: node.bgColor,
                  color: node.color,
                }}
              >
                <NodeIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Node Title & Subtitle */}
              <div className="ml-4 md:ml-0 flex flex-col text-left">
                <h3 className="font-serif text-lg font-bold text-text-primary mb-1 transition-colors duration-300">
                  {node.title}
                </h3>
                <p className="font-sans text-xs text-text-secondary leading-normal">
                  {node.subtitle}
                </p>
              </div>
            </motion.div>

            {/* Connecting Lines */}
            {!isLast && (
              <div className="flex items-center justify-center w-12 h-10 md:h-auto flex-shrink-0">
                {/* Horizontal flow arrow on desktop */}
                <svg
                  className="w-full h-8 hidden md:block"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <marker
                      id={`arrow-${node.id}`}
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 2 L 6 5 L 0 8 Z" fill={node.color} />
                    </marker>
                  </defs>
                  <motion.path
                    d="M 4 12 H 42"
                    stroke={node.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    markerEnd={`url(#arrow-${node.id})`}
                    variants={lineVariants}
                  />
                </svg>

                {/* Vertical flow arrow on mobile */}
                <svg
                  className="h-10 w-6 block md:hidden"
                  viewBox="0 0 24 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <marker
                      id={`arrow-v-${node.id}`}
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 2 L 6 5 L 0 8 Z" fill={node.color} />
                    </marker>
                  </defs>
                  <motion.path
                    d="M 12 4 V 34"
                    stroke={node.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    markerEnd={`url(#arrow-v-${node.id})`}
                    variants={lineVariants}
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}
