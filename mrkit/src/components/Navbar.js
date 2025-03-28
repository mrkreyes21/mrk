'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Home, Code, Mail } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // get current path

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const isActive = (path) => pathname === path; 

  const handleEmailPrompt = () => {
    const email = "mmreyes22@up.edu.ph"; 
    const subject = "Inquiry from MRK Website";
    const body = "Hello, I would like to inquire about...";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'w-[90%] max-w-3xl' : 'w-[95%] max-w-4xl'
    }`}>
      <div className={`relative rounded-full backdrop-blur-xl border border-white/10 dark:border-white/5 
        ${scrolled ? 'bg-white/80 dark:bg-black/80 shadow-lg' : 'bg-white/90 dark:bg-black/90 shadow-xl'}`}>
        <div className="flex items-center justify-between px-4 py-2">
          {/* Navigation Tabs */}
          <div className="flex space-x-1">
            <Link 
              href="/"
              className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2
                ${isActive('/') 
                  ? 'text-primary dark:text-primary' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden md:inline">Home</span>
              {isActive('/') && (
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10" />
              )}
            </Link>

            <Link 
              href="/software"
              className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2
                ${isActive('/software') 
                  ? 'text-primary dark:text-primary' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
            >
              <Code className="w-5 h-5" />
              <span className="hidden md:inline">Software</span>
              {isActive('/software') && (
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10" />
              )}
            </Link>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="text-xl font-bold text-[#292926] dark:bg-secondary dark:bg-clip-text dark:text-transparent">
              MRK
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            {/* Email Prompt */}
            <button 
              onClick={handleEmailPrompt}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2
                text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary`}
            >
              <Mail className="w-5 h-5" />
              <span className="hidden md:inline">Contact</span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="relative p-2 rounded-full transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
