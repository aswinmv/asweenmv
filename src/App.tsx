import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['about', 'work', 'personal', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-900 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40" role="navigation" aria-label="Main navigation">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200"
              aria-label="Go to top of page"
            >
              Aswin MV
            </button>
            <div className="hidden sm:flex space-x-8" role="menubar">
              {[
                { id: 'about', label: 'About' },
                { id: 'work', label: 'Work' },
                { id: 'personal', label: 'Personal' },
                { id: 'blogs', label: 'Blogs' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1 ${
                    activeSection === id
                      ? 'text-gray-900 border-b border-gray-900 pb-1'
                      : 'text-gray-600'
                  }`}
                  role="menuitem"
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="pt-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header/Hero */}
          <header className="py-4 sm:py-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Aswin MV
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
                Product Designer & Creative Strategist
              </p>
            </div>
          </header>

          {/* About */}
          <section id="about" className="py-8" aria-labelledby="about-heading">
            <div className="max-w-2xl">
              <h2 id="about-heading" className="text-2xl font-semibold text-gray-900 mb-8">About</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  I'm Aswin MV, currently working as a lead designer at Whoots. With over 3 years of 
                  graphic design experience, I've worked with clients across India, the 
                  Middle East, and Australia. I combine creativity with strategy to design 
                  experiences that inspire and connect with people.
                </p>
              </div>
            </div>
          </section>

          {/* Work */}
          <section id="work" className="py-8" aria-labelledby="work-heading">
            <div className="max-w-2xl">
              <h2 id="work-heading" className="text-2xl font-semibold text-gray-900 mb-8">Work</h2>
              
              <div className="space-y-8">
                <article className="border-l-2 border-gray-200 pl-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Designer at Whoots
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">Current Role</p>
                    <p className="text-gray-700 leading-relaxed">
                      Creating innovative design solutions and strategic creative direction for 
                      diverse projects, focusing on user-centered experiences that drive engagement.
                    </p>
                  </div>
                </article>

                <article className="border-l-2 border-gray-200 pl-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Freelance Graphic Designer
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">3+ Years Experience</p>
                    <p className="text-gray-700 leading-relaxed">
                      Collaborated with international clients across India, the Middle East, and 
                      Australia, delivering creative solutions for diverse industries and markets.
                    </p>
                  </div>
                </article>

                <article className="border-l-2 border-gray-200 pl-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Core Skills
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">Expertise Areas</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Product Design', 'Graphic Design', 'Creative Strategy', 'Illustration', 'UX/UI', 'Figma', 'SMM'].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>

                <div className="pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Projects</h3>
                  <div className="space-y-4">
                    <div className="group">
                      <a 
                        href="https://behance.net/aswinmv" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        aria-label="View portfolio on Behance (opens in new tab)"
                      >
                        <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                          View Portfolio on Behance
                        </span>
                      </a>
                    </div>
                    <div className="group">
                      <a 
                        href="https://dribbble.com/aswinmv" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        aria-label="View work on Dribbble (opens in new tab)"
                      >
                        <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                          Creative Work on Dribbble
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Personal */}
          <section id="personal" className="py-8" aria-labelledby="personal-heading">
            <div className="max-w-2xl">
              <h2 id="personal-heading" className="text-2xl font-semibold text-gray-900 mb-8">Personal</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Beyond Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beyond design, I enjoy music, gaming, cricket, illustration, and writing. 
                    These passions fuel my creativity and keep me inspired.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Currently</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      Reading about design systems and creative processes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      Exploring new illustration techniques and digital art
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      Following cricket seasons and local gaming communities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-8 pb-16" aria-labelledby="contact-heading">
            <div className="max-w-2xl">
              <h2 id="contact-heading" className="text-2xl font-semibold text-gray-900 mb-8">Get in touch</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm always interested in hearing about new projects, opportunities, or just 
                  connecting with fellow designers and creatives. Drop me a line!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:aswinmv.ux@gmail.com"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                    aria-label="Send email to aswinmv.ux@gmail.com"
                  >
                    <Mail size={18} aria-hidden="true" />
                    <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                      aswinmv.ux@gmail.com
                    </span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/aswinmv-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                    <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                      LinkedIn
                    </span>
                  </a>

                  <a 
                    href="https://x.com/Avillmilk?t=WK_jOQ2lvR0cKX_zeBEyAw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                    aria-label="Visit X (Twitter) profile (opens in new tab)"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                    <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                      X (Twitter)
                    </span>
                  </a>

                  <a 
                    href="https://github.com/aswinmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-sm px-1 py-1"
                    aria-label="Visit GitHub profile (opens in new tab)"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                    <span className="border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-200">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8" role="contentinfo">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aswin MV. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Designed & built with care
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;