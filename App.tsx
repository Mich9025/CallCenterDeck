import React, { useState, useEffect, useCallback } from 'react';
import { APP_DATA } from './data';
import { SlideType } from './types';
import Deck from './components/Deck';
import IntroSlide from './components/slides/IntroSlide';
import DiagnosisSlide from './components/slides/DiagnosisSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import TechStackSlide from './components/slides/TechStackSlide';
import DemoSlide from './components/slides/DemoSlide';
import RoiSlide from './components/slides/RoiSlide';
import ContactSlide from './components/slides/ContactSlide';
import { Menu, X, ChevronRight, ChevronLeft, Play } from 'lucide-react';

const SLIDE_ORDER = [
  SlideType.INTRO,
  SlideType.DIAGNOSIS,
  SlideType.SOLUTION,
  SlideType.TECH_STACK,
  SlideType.DEMO,
  SlideType.ROI,
  SlideType.CONTACT
];

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDE_ORDER.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      const handleStart = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setHasStarted(true);
        }
      };
      window.addEventListener('keydown', handleStart);
      return () => window.removeEventListener('keydown', handleStart);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasStarted, nextSlide, prevSlide]);

  const CurrentSlideComponent = () => {
    const commonProps = {
      isActive: true,
      client: APP_DATA.client,
      nextSlide,
      prevSlide
    };

    switch (SLIDE_ORDER[currentSlideIndex]) {
      case SlideType.INTRO: return <IntroSlide {...commonProps} />;
      case SlideType.DIAGNOSIS: return <DiagnosisSlide {...commonProps} />;
      case SlideType.SOLUTION: return <SolutionSlide {...commonProps} />;
      case SlideType.TECH_STACK: return <TechStackSlide {...commonProps} />;
      case SlideType.DEMO: return <DemoSlide {...commonProps} />;
      case SlideType.ROI: return <RoiSlide {...commonProps} />;
      case SlideType.CONTACT: return <ContactSlide {...commonProps} />;
      default: return <IntroSlide {...commonProps} />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gobig-dark text-gobig-text font-sans selection:bg-gobig-primary selection:text-black">
      {/* Background Elements (Always present) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gobig-accent blur-[150px] rounded-full mix-blend-screen animate-pulse-fast"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gobig-primary blur-[150px] rounded-full mix-blend-screen animate-pulse-fast" style={{ animationDelay: '1s' }}></div>
      </div>

      {!hasStarted ? (
        // LANDING SCREEN
        <div className="relative z-50 w-full h-full flex flex-col items-center justify-center animate-in fade-in duration-700">
          <div className="flex flex-col items-center gap-8 p-8 text-center max-w-2xl">
            <img 
               src={APP_DATA.company.logo} 
               alt={APP_DATA.company.name} 
               className="h-16 md:h-20 w-auto mb-8 animate-float" 
             />
             
             <div className="space-y-4">
                <p className="text-gray-400 uppercase tracking-[0.2em] text-sm font-mono">
                  {APP_DATA.landing.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  {APP_DATA.client.company}
                </h1>
                <p className="text-gobig-primary/80 font-mono text-sm">
                  {APP_DATA.landing.title}
                </p>
             </div>

             <button 
               onClick={() => setHasStarted(true)}
               className="group mt-12 px-8 py-4 bg-transparent border border-white/20 hover:border-gobig-primary hover:bg-gobig-primary/10 rounded-full transition-all duration-300 flex items-center gap-4"
             >
                <span className="text-white font-bold tracking-wider uppercase text-sm group-hover:text-gobig-primary transition-colors">
                  {APP_DATA.landing.buttonText}
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-gobig-primary group-hover:scale-110 transition-all">
                  <Play size={12} fill="currentColor" />
                </div>
             </button>
          </div>
          
          <div className="absolute bottom-8 text-xs text-gray-600 font-mono">
            {APP_DATA.landing.footer}
          </div>
        </div>
      ) : (
        // MAIN APP
        <>
          {/* Header / Nav */}
          <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-white animate-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-2">
               <img 
                 src={APP_DATA.company.logo} 
                 alt={APP_DATA.company.name} 
                 className="h-8 w-auto" 
               />
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm font-mono opacity-70">
               <span>{currentSlideIndex + 1}</span>
               <span className="w-10 h-[1px] bg-white/50"></span>
               <span>{SLIDE_ORDER.length}</span>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </header>

          {/* Main Content Area */}
          <main className="relative z-10 w-full h-full flex items-center justify-center">
            <Deck>
               <CurrentSlideComponent />
            </Deck>
          </main>

          {/* Navigation Overlay Controls */}
          <div className="fixed bottom-8 right-8 z-50 flex gap-4">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="p-4 rounded-full border border-white/10 bg-black/50 hover:bg-gobig-primary/20 hover:border-gobig-primary transition-all disabled:opacity-30 backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === SLIDE_ORDER.length - 1}
              className="p-4 rounded-full border border-white/10 bg-black/50 hover:bg-gobig-primary/20 hover:border-gobig-primary transition-all disabled:opacity-30 backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="fixed bottom-0 left-0 h-1 bg-gobig-panel w-full z-50">
            <div 
              className="h-full bg-gradient-to-r from-gobig-accent to-gobig-primary transition-all duration-500 ease-out"
              style={{ width: `${((currentSlideIndex + 1) / SLIDE_ORDER.length) * 100}%` }}
            ></div>
          </div>
        </>
      )}

    </div>
  );
};

export default App;