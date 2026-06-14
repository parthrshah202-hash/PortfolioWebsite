"use client";
import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  variant?: 'default' | 'filled' | 'muted';
  className?: string;
}

const getIconSlug = (label: string): string | null => {
  const clean = label.trim().toLowerCase();

  const explicitMap: Record<string, string> = {
    'c++': 'cplusplus',
    'sql': 'sqlite',
    'git & github': 'github',
    // Append brand colors or black (000) so they don't render invisible white on light backgrounds
    'vs code': 'visualstudiocode/007ACC',
    'rag': 'openai/412991',
    'llm applications': 'openai/412991',
    'embeddings & vector databases': 'pinecone/000000',
    // Fallbacks for general concepts using prominent domain tools
    'machine learning': 'scikitlearn/F7931E',
    'nlp': 'huggingface/FFD21E',
    'data analytics': 'pandas/150458',
    'data pipelines': 'apacheairflow/0173B2',
    'rest apis': 'postman/FF6C37'
  };

  if (explicitMap[clean]) {
    return explicitMap[clean];
  }

  const commonSlugs: Record<string, string> = {
    python: 'python',
    docker: 'docker',
    postgresql: 'postgresql',
    mysql: 'mysql',
    mongodb: 'mongodb',
    git: 'git',
    github: 'github',
    linux: 'linux',
    aws: 'amazonaws',
    gcp: 'googlecloud',
    pandas: 'pandas',
    numpy: 'numpy',
    tensorflow: 'tensorflow',
    pytorch: 'pytorch',
    'scikit-learn': 'scikitlearn',
    fastapi: 'fastapi',
    flask: 'flask',
    react: 'react',
    javascript: 'javascript',
    html: 'html5',
    css: 'css3',
    tableau: 'tableau',
    'power bi': 'powerbi',
    spark: 'apachespark',
    kafka: 'apachekafka',
    airflow: 'apacheairflow',
    redis: 'redis',
    kubernetes: 'kubernetes',
    streamlit: 'streamlit',
    hackerrank: 'hackerrank',
    leetcode: 'leetcode',
  };

  return commonSlugs[clean] || null;
};

export default function Tag({ label, className }: TagProps) {
  const iconSlug = getIconSlug(label);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 justify-center font-mono font-medium text-[0.75rem] uppercase tracking-[0.04em] rounded-sm px-3 py-1 border border-border text-text-primary bg-transparent transition-all duration-150",
        className
      )}
    >
      {iconSlug && (
        <img
          src={`https://cdn.simpleicons.org/${iconSlug}`}
          alt={`${label} icon`}
          // added onerror to hide the image element gracefully if a 404 happens
          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
          className="w-4 h-4 object-contain shrink-0"
          loading="lazy"
        />
      )}
      <span>{label}</span>
    </span>
  );
}