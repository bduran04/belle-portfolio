"use client"

import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image';
import ProjectsList from '@/components/Projects-list';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
         {/* Navigation Bar */}
         <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-50 py-4 px-8 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">
            <Image 
              src="/images/bd-logo-2.png" 
              alt="Logo" 
              width={100}
              height={40}
              className="h-10 w-auto" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('work')} 
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-1.5 bg-gray-800 rounded-full transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-3' : ''}`}></span>
            <span className={`block w-6 h-1.5 bg-gray-800 rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1.5 bg-gray-800 rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1.5 bg-gray-800 rounded-full transition-transform duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-8 shadow-lg">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="py-2 hover:text-emerald-600 transition-colors text-left cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('work')} 
                className="py-2 hover:text-emerald-600 transition-colors text-left cursor-pointer"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="py-2 hover:text-emerald-600 transition-colors text-left cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-20 px-8 min-h-[80vh] flex flex-col justify-center">
        <div className="container mx-auto">
          {/* Text content */}
          <div className="text-center md:text-left mb-14 md:mb-0">
            <p className="text-lg text-gray-600 mb-2">Data Analyst | Software Developer</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Howdy! My Name is Belle
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0">
            Building data-driven applications that solve real-world problems and drive business success.
            </p>
          </div>

          {/* Decorative elements - Mobile version (smaller and repositioned) */}
          <div className="relative mt-20 mb-10 mx-auto md:hidden" style={{ height: '300px', width: '100%', maxWidth: '400px' }}>
            {/* Green circle with purple interior */}
            <div className="absolute left-10 top-0 w-32 h-32 rounded-full bg-emerald-500 z-10">
              <div className="absolute inset-4 rounded-full bg-purple-300 opacity-70"></div>
            </div>

            {/* Yellow star circle */}
            <div className="absolute bottom-10 left-0 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center z-10">
              <div className="text-amber-500 text-2xl">✦</div>
            </div>

            {/* Large yellow circle with pink sunburst */}
            <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-amber-200 z-0">
              <div className="absolute inset-5 rounded-full bg-pink-300 flex items-center justify-center">
                {/* Sunburst pattern */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-14 bg-pink-500"
                    style={{
                      transform: `rotate(${i * 20}deg)`,
                      transformOrigin: 'center',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop version of decorative elements */}
          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-emerald-500">
              <div className="absolute inset-8 rounded-full bg-purple-300 opacity-70"></div>
            </div>
            <div className="absolute bottom-0 right-20 w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
              <div className="text-amber-500 text-4xl">✦</div>
            </div>
            <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-amber-200">
              <div className="absolute inset-8 rounded-full bg-pink-300 flex items-center justify-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-16 bg-pink-500"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                      transformOrigin: 'bottom center',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-8">
        <hr className="border-gray-200" />
      </div>

      {/* Social Media Icons */}
      <section className="py-12 px-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-16">
            <a
              href="https://www.linkedin.com/in/belle-duran-127760204/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bduran04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:bduran04@gmail.com"
              className="text-4xl text-gray-700 hover:text-red-500 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="container mx-auto px-8">
        <hr className="border-gray-200" />
      </div>

      <section id="about" className="py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
              I&aposm passionate about turning data into decisions and code into impactful user experiences. With over 6 years of experience in data analysis and software development, I have honed my skills in creating data-driven applications that solve real-world problems. I bridge the gap between technology and business needs by leveraging SQL, Python, and data visualization to create meaningful software solutions.
              </p>
              <p className="text-lg">
                When I&aposm not coding, you can find me tending my garden or chilling with my kittens, Mittens and Kitsune. Talk to me about your favorite anime or the latest tech trends!
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  SARIMAX
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Pandas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  MatPlotLib
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  NumPy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <div className="container mx-auto px-8">
        <hr className="border-gray-200" />
      </div>

      <section id="work" className="py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My Work</h2>
          <ProjectsList />
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto px-8">
        <hr className="border-gray-200" />
      </div>

      <section id="contact" className="py-20 px-8 bg-pink-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
              Need a full-stack developer who understands data? Lets connect! Contact me using the form or through social media.
              </p>
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-2xl text-gray-700 hover:text-red-500 transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-pink-100">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Made with ♡ by Belle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}