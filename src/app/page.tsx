"use client"
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import Name3D from '../../components/Name3D';
import Image from "next/image";
import { useTheme } from '../../context/ThemeContext';

const Portfolio = () => {
  type VisibilityState = {
    hero : boolean;
    about : boolean;
    contact : boolean;
  };

  const { darkMode } = useTheme(); // Correctly destructuring darkMode
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<VisibilityState>({hero:false,about:false,contact:false,});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    'Python', 'SQL', 'React', 'Next.js',
    'Machine Learning','Pandas', 'NumPy','HTML','SymPy'
  ];

  const projects = [
    {
      name: 'AI Image Recognition System',
      description: 'Built a CNN-based image classification system achieving 95% accuracy on custom dataset using TensorFlow and Keras.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      name: 'Sentiment Analysis Dashboard',
      description: 'Real-time sentiment analysis platform for social media data using NLP and interactive visualizations.',
      tech: ['Python', 'NLTK', 'React', 'D3.js'],
      github: 'https://github.com',
      demo: null
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'Machine learning pipeline for sales forecasting with automated feature engineering and model selection.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'SQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      name: 'Chatbot with RAG',
      description: 'Intelligent chatbot using Retrieval-Augmented Generation for domain-specific question answering.',
      tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
      github: 'https://github.com',
      demo: null
    },
    {
      name: 'Customer Churn Predictor',
      description: 'End-to-end ML solution predicting customer churn with 87% accuracy and actionable insights dashboard.',
      tech: ['Python', 'XGBoost', 'Streamlit', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      name: 'Time Series Forecaster',
      description: 'LSTM-based forecasting system for multi-variate time series with uncertainty quantification.',
      tech: ['Python', 'TensorFlow', 'Prophet', 'FastAPI'],
      github: 'https://github.com',
      demo: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    setFormData({ name: '', email: '', message: '' });
  };

  const theme = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900';

  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const accentColor = darkMode ? 'text-blue-200' : 'text-blue-700';
  const buttonBg = darkMode ? 'bg-blue-600 hover:bg-blue-900' : 'bg-blue-600 hover:bg-blue-900';

  return (
    <div className={`min-h-screen ${theme} transition-colors duration-300`}>
      {/* Navbar - You should import your Navbar component here */}

      <div className="pt-16">
          <>
            <section id="hero" className="min-h-screen flex justify-center px-4" data-animate>
              <div className={`max-w-4xl text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className='h-[320px] lg:h-[400px] w-[99%] lg:w-[550px] lg:mt-10'>
                  <div className="h-[350px] lg:h-[400px] w-[99%] lg:w-[550px] mt-0">
                    <Name3D />
                  </div>
                </div>
                <p className={`text-1xl sm:text-xl md:text-3xl mb-4 font-semibold opacity-50 ${darkMode ? 'text-blue-400' : 'text-black'}`}>
                  Bsc(Hons) AI and Data Science
                </p>
                <p className={`text-lg sm:text-xl mb-12 ${darkMode ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto`}>
                  Solving problems with data and intelligent systems
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className={`${buttonBg} text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </section>

            <section id="about" className="py-20 px-4 pb-35" data-animate>
              <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`${cardBg} rounded-2xl p-8 shadow-xl`}>
                    <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                      <Image src="/dp.png" width={200} height={200} className="rounded-full object-cover border-1 border-0 shadow-lg" alt="Profile picture"/>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-lg mb-6 leading-relaxed lg:text-justify text-left">
                      I'm a passionate Data Science and AI student dedicated to leveraging machine learning and artificial intelligence to solve real-world problems. With a strong foundation in mathematics and programming, I create intelligent systems that transform data into actionable insights.
                    </p>
                    <p className="lg:text-lg mb-8 leading-relaxed lg:text-justify text-left">
                      My journey in AI has equipped me with expertise in deep learning, natural language processing, and computer vision. I thrive on building end-to-end solutions that bridge the gap between cutting-edge research and practical applications.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'} px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-110`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="py-20 px-4" data-animate>
              <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={`${cardBg} rounded-2xl p-8 shadow-xl`}>
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <button
                        type="submit"
                        className={`w-full ${buttonBg} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                  <div className={`${cardBg} rounded-2xl p-8 shadow-xl flex flex-col justify-center`}>
                    <h3 className="text-2xl font-bold mb-6 pl-4 pb-4">Connect With Me</h3>
                    <div className="space-y-4">
                      <a href="mailto:dahamabeyratney@gmail.com" className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition`}>
                        <Mail className={accentColor} size={24} />
                        <span>dahamabeyratney@gmail.com</span>
                      </a>
                      <a href="https://github.com/Daham-abeyratne" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition`}>
                        <Github className={accentColor} size={24} />
                        <span>github.com/Daham-abeyratne</span>
                      </a>
                      <a href="https://www.linkedin.com/in/daham-abeyratne/" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-4 p-4 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition`}>
                        <Linkedin className={accentColor} size={24} />
                        <span>linkedin.com/daham-abeyratne</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
      </div>
    </div>
  );
};

export default Portfolio;