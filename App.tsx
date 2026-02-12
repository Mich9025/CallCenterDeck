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
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';

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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDE_ORDER.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

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
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gobig-accent blur-[150px] rounded-full mix-blend-screen animate-pulse-fast"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gobig-primary blur-[150px] rounded-full mix-blend-screen animate-pulse-fast" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-white">
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

    </div>
  );
};

export default App;