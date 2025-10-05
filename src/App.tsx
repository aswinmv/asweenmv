import { useState, useEffect, lazy, Suspense } from 'react';

const WorkSection = lazy(() => import('./components/WorkSection'));
const PersonalSection = lazy(() => import('./components/PersonalSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'personal', label: 'Personal' },
    { id: 'contact', label: 'Contact' }
  ];

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
              {navigationItems.map(({ id, label }) => (
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
          <Suspense fallback={<div className="py-8"><div className="max-w-2xl h-96 animate-pulse bg-gray-50 rounded-lg"></div></div>}>
            <WorkSection />
          </Suspense>

          {/* Personal */}
          <Suspense fallback={<div className="py-8"><div className="max-w-2xl h-64 animate-pulse bg-gray-50 rounded-lg"></div></div>}>
            <PersonalSection />
          </Suspense>

          {/* Contact */}
          <Suspense fallback={<div className="py-8"><div className="max-w-2xl h-48 animate-pulse bg-gray-50 rounded-lg"></div></div>}>
            <ContactSection />
          </Suspense>
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