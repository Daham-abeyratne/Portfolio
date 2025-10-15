"use client";

import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function ProjectsPage() {
  const { darkMode } = useTheme();

  const projects = [
    {
      name: "AI Image Recognition System",
      description:
        "Built a CNN-based image classification system achieving 95% accuracy on custom dataset using TensorFlow and Keras.",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      name: "Sentiment Analysis Dashboard",
      description:
        "Real-time sentiment analysis platform for social media data using NLP and interactive visualizations.",
      tech: ["Python", "NLTK", "React", "D3.js"],
      github: "https://github.com",
      demo: null,
    },
    {
      name: "Predictive Analytics Engine",
      description:
        "Machine learning pipeline for sales forecasting with automated feature engineering and model selection.",
      tech: ["Python", "Scikit-learn", "Pandas", "SQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      name: "Chatbot with RAG",
      description:
        "Intelligent chatbot using Retrieval-Augmented Generation for domain-specific question answering.",
      tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
      github: "https://github.com",
      demo: null,
    },
    {
      name: "Customer Churn Predictor",
      description:
        "End-to-end ML solution predicting customer churn with 87% accuracy and actionable insights dashboard.",
      tech: ["Python", "XGBoost", "Streamlit", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      name: "Time Series Forecaster",
      description:
        "LSTM-based forecasting system for multi-variate time series with uncertainty quantification.",
      tech: ["Python", "TensorFlow", "Prophet", "FastAPI"],
      github: "https://github.com",
      demo: null,
    },
  ];

  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const buttonBg = darkMode
    ? "bg-blue-600 hover:bg-blue-700"
    : "bg-blue-600 hover:bg-blue-700";

  const theme = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900';

  const paratheme = darkMode
      ? 'text-gray-300'
      : 'text-black-600';

  return (
    <section className={`py-20 px-4 min-h-screen min-h-screen ${theme} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My Projects
        </h1>
        <p className={`text-center text-lg ${paratheme} mb-12 max-w-2xl mx-auto`}>
          A showcase of my work in AI, machine learning, and data science
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBg} rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className={`${paratheme} mb-4 leading-relaxed`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    } px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  } px-4 py-2 rounded-lg transition flex-1 justify-center`}
                >
                  <Github size={18} />
                  <span className="font-semibold">Code</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${buttonBg} text-white px-4 py-2 rounded-lg transition flex-1 justify-center`}
                  >
                    <ExternalLink size={18} />
                    <span className="font-semibold">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
