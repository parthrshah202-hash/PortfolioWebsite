import { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "auto-schema-pipeline",
    title: "Auto Schema Pipeline",
    timeframe: "2026 – Present",
    status: "live",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Gemini API", "Embeddings"],
    description:
      "Eliminates manual SQL writing entirely. Uploads a CSV, auto-infers its schema, and uses the Gemini API to generate precise, context-aware queries — delivering insights through a live dashboard and exportable PDF reports. Zero configuration required.",
    links: {
      repo: "https://github.com/parthrshah202-hash/auto-schema-pipeline",
      demo: "https://auto-schema-pipeline.streamlit.app/",
    },
  },
  {
    id: "FinFlow",
    title: "FinFlow",
    timeframe: "2026 – Present",
    status: "in-progress",
    stack: ["Python", "Sentence Transformers", "PGvector", "FASTAPI", "Sematic Search", "Streamlit", "POSTGRESQL"],
    description:
      "Aims to solve a real pain point for CA firms — financial exports from banks, UPI platforms, and brokers all use different schemas. FinFlow ingests PDFs, CSVs, and text exports, then uses sentence transformer embeddings to semantically map unknown column names to a canonical schema — targeting generalization to unseen bank formats without manual configuration. Built with pgvector for embedding storage, confidence scoring to flag uncertain mappings, and a Streamlit dashboard for review and CSV export.",
    links: {},
  },
  {
    id: "confidence-detection-llms",
    title: "Confidence Detection for LLMs",
    timeframe: "2025 – Present",
    status: "research",
    stack: ["Python", "Machine Learning", "NLP", "LLM Evaluation"],
    description:
      "LLMs don't know what they don't know — this project aims to fix that. A research system that estimates response confidence in large language models, flagging uncertain or likely-incorrect outputs before they reach the user, making AI systems more trustworthy and production-safe.",
    links: {},
  },
  {
    id: "ai-coding-mentor",
    title: "AI Coding Mentor",
    timeframe: "2026",
    status: "live",
    stack: ["Python", "Streamlit", "Gemini API"],
    description:
      "Fights the copy-paste problem in DSA learning. An AI-powered hint engine that refuses to give direct answers — instead delivering layered, Socratic hints that guide students toward solutions independently, building real problem-solving ability.",
    links: {
      repo: "https://github.com/parthrshah202-hash/DSA_MENTOR",
      demo: "https://dsamentor.streamlit.app/",
    },
  },
  {
    id: "log-data-pipeline",
    title: "Log Data Pipeline",
    timeframe: "2026",
    status: "live",
    stack: ["Python", "Streamlit"],
    description:
      "A full four-stage data engineering pipeline — ingestion → transformation → analysis → visualization — converting raw server logs into a nine-chart interactive dashboard with automated insight reports. Built from scratch as a freshman to understand how production data systems actually work.",
    links: {
      repo: "https://github.com/parthrshah202-hash/log-data-pipeline",
      demo: "https://log-data-pipeline-3aicicf8mzcz2k2e2k4uch.streamlit.app/",
    },
  },
];
