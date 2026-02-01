"use client";

import Image from "next/image";
import { useState } from "react";

const basePath = process.env.NODE_ENV === 'production' ? '/AreenaMahek' : '';

const projects = [
  // {
  //   title: "AI-Driven Multilingual Chatbot",
  //   description:
  //     "An AI workflow-driven, multilingual chatbot for automated onboarding support and customer assistance. Integrated RAG architecture with vector databases (Milvus, MongoDB Vector Search) to enhance search capabilities and support predictive maintenance analytics.",
  //   tags: ["n8n", "Anthropic", "OpenAI", "RAG", "Milvus", "MongoDB Vector Search", "Next.js", "Golang"],
  //   highlights: [
  //     "Onboarding support automation",
  //     "Multilingual customer assistance",
  //     "Predictive analytics & RAG pipeline integration",
  //   ],
  // },
  {
    title: "ByteBridge - Scalable Data Management Service",
    description:
      "A modular microservice subsystem designed for research data management, improving data accessibility and visualization by 70%. Features scalable storage schema for large user-uploaded datasets with efficient retrieval of derived datasets.",
    tags: ["Django", "REST APIs", "JavaScript", "HTML/CSS", "Microservices", "SQlite"],
    highlights: [
      "Modular subsystem architecture",
      "70% improvement in data accessibility",
      "Scalable storage schema design",
    ],
    github: "https://github.com/AreenaMahek/Neurobazaar_2025",
    image: "/bytebridge.png",
    date: "June 2025",
  },
  {
    title: "Cloud-Based Sentiment Analysis on Big Data",
    description:
      "Performed data acquisition and preprocessing on 10 million Amazon product reviews. Built a scalable data pipeline using AWS EMR for modeling, sentiment analysis, and visualization.",
    tags: ["AWS S3", "AWS Athena", "AWS EMR", "Python", "Big Data", "Data Preprocessing & Modeling"],
    highlights: [
      "10 million product reviews processed",
      "Scalable AWS data pipeline",
      "Sentiment analysis and visualization",
    ],
    image: "/sentiment_analysis.jpeg",
    github: "https://github.com/AreenaMahek/Cloud-Based-Sentiment-Analysis-on-Big-Data-using-AWS-Services-2024",
    date: "Dec 2024",
  },
  {
    title: "Interactive OoD Data Visualization Dashboard",
    description:
      "A low-latency, interactive data visualization platform for research workflows. Features dynamic histogram visualization with adjustable bin sizing and interactive 2D boundary system for OoD data classification.",
    tags: ["Python", "Trame", "Vue.js", "Vuetify", "VTK", "Plotly"],
    highlights: [
      "Dynamic histogram visualization engine",
      "Interactive 2D boundary system (Easy | Medium | Hard)",
      "Performance benchmarking across visualization technologies",
    ],
    github: "https://github.com/AreenaMahek/OoD_Visualizer-2024",
    image: "/ood.jpeg",
    date: "Aug 2024",
  },
  {
    title: "Global YouTube Statistics 2023 Dashboard",
    description:
      "An interactive Tableau Desktop dashboard analyzing global YouTube trends in 2023, incorporating data preprocessing and feature extraction. Enables dynamic filtering by country or channel to surface key KPIs such as revenue, views and subscriber growth for targeted insights.",
    tags: ["Tableau", "Data Visualization", "Data Preprocessing", "Feature Extraction"],
    highlights: [
      "Interactive data visualization",
      "Dynamic filtering by country/channel",
      "KPI analysis for revenue, views, subscribers",
    ],
    image: "/tableau_dashboard.png",
    github: "https://public.tableau.com/app/profile/areena.mahek/viz/MileStone4_Dashboard/Dashboard2",
    date: "June 2024",
  },
  {
    title: "Online Customer Behavior Prediction",
    description:
      "Developed an automated pipeline for online customer behavior prediction including data collection, exploratory data analysis, and feature engineering. Achieved 85% accuracy using ensemble methods.",
    tags: ["Python", "Machine Learning", "Stacking Classifier", "Data Analytics"],
    highlights: [
      "85% prediction accuracy",
      "Automated ML pipeline",
      "Ensemble methods (Stacking Classifier)",
    ],
    image: "/online_customer_behavior.jpeg",
    date: "April 2024",
  },
  {
    title: "NLP Text Summarization & Analysis",
    description:
      "Developed a Flask web application to scrape web and multimedia data, generate summaries using Hugging Face (Transformers, BART, T5) models, and evaluate them against human summaries with 86% ROUGE accuracy.",
    tags: ["Flask", "Python", "Hugging Face", "NLTK", "GPT", "NLP", "BART", "T5"],
    highlights: [
      "86% ROUGE accuracy on summarization",
      "45-62% performance improvement over baseline methods",
      "90% boost in operational efficiency",
    ],
    github: "https://github.com/AreenaMahek/VideoTranscription-TextRecapitulation-2022",
    image: "/summarization&transcription.jpeg",
    date: "Dec 2022",
  }
];

export default function Projects() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Research Projects</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:border-[var(--primary)]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary-light)] transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.github.includes("tableau") ? "View on Tableau" : "View on GitHub"}
                    >
                      {project.github.includes("tableau") ? (
                        <svg
                          className="w-5 h-5 text-[var(--text-muted)] hover:text-[var(--foreground)] cursor-pointer transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11.654 5.227V2.545h1.169v2.682h-1.169zm-2.27 1.2V3.773h1.169v2.654H9.384zm4.692 0V3.773h1.169v2.654h-1.169zM6.573 8.728V6.046h1.169v2.682H6.573zm10.381 0V6.046h1.169v2.682h-1.169zM11.654 11.4V8.718h1.169V11.4h-1.169zm-4.808 1.2V9.946h1.169v2.654H6.846zm10.308 0V9.946h1.169v2.654h-1.169zm-8.038 2.718v-2.654h1.169v2.654H9.116zm5.768 0v-2.654h1.169v2.654h-1.169zM11.654 18.036v-2.682h1.169v2.682h-1.169zm-5.081 1.2v-2.654h1.169v2.654H6.573zm10.381 0v-2.654h1.169v2.654h-1.169zM11.654 21.454v-2.682h1.169v2.682h-1.169z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-[var(--text-muted)] hover:text-[var(--foreground)] cursor-pointer transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </a>
                  )}
                </div>

                {project.date && (
                  <p className="text-xs text-[var(--accent)] mb-3">{project.date}</p>
                )}

                <p className="text-sm text-[var(--text-muted)] mb-4 text-justify">
                  {project.description}
                </p>

                {project.image && (
                  <div
                    className="relative w-full h-40 overflow-hidden rounded-lg cursor-pointer mb-4"
                    onClick={() => setZoomedImage(`${basePath}${project.image}`)}
                  >
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary-light)] rounded text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative w-[90vw] h-[80vh] max-w-4xl">
            <Image
              src={zoomedImage}
              alt="Zoomed project image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={() => setZoomedImage(null)}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
