"use client";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const accentColor = darkMode ? "text-blue-200" : "text-blue-700";

  const goToProjects = () => {
    setCurrentPage("projects");
    setMobileMenuOpen(false);
    router.push("/projects");
  };

  const goToHome = (sectionId?: string) => {
    setCurrentPage("home");
    setMobileMenuOpen(false);
    
    router.push("/");
    
    // Wait for navigation and page load
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, scroll directly
    if (currentPage === "home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    } else {
      // If we're on another page, navigate home first
      goToHome(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-[10px] w-[90%] left-[5%] right-[5%] z-50 ${
        darkMode ? "bg-gray-800/50" : "bg-white/50 text-blue-700"
      } backdrop-blur-sm shadow-md transition-colors duration-300 border-0 rounded-xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold ${accentColor}`}>Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-gray-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-600 transition"
            >
              About
            </button>
            <button
              onClick={goToProjects}
              className="hover:text-gray-600 transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-600 transition"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-900/50" : "bg-white/50"
          } backdrop-blur-sm transition-colors duration-300 border-t-0 rounded-b-xl flex content-center w-full`}
        >
          <div className="px-4 py-2 space-y-2 flex flex-col items-center w-full">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-center py-2 hover:text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-center py-2 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={goToProjects}
              className="block w-full text-center py-2 hover:text-blue-600"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-center py-2 hover:text-blue-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}