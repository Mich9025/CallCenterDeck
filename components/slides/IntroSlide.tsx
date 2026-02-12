import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { Bot, Sparkles } from 'lucide-react';

const IntroSlide: React.FC<SlideProps> = ({ client }) => {
  const { intro } = APP_DATA.slides;

  return (
    <div className="flex flex-col items-start justify-center h-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gobig-primary/30 bg-gobig-primary/10 text-gobig-primary text-xs font-mono uppercase tracking-wider">
        <Sparkles size={12} />
        <span>{intro.tag}</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        {intro.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gobig-primary to-gobig-secondary">{client.name}</span>.
      </h1>

      <div className="space-y-4 text-xl text-gobig-text/80 max-w-2xl">
        <p>
          {intro.welcomePre} <span className="font-bold text-white">{client.company}</span>.
        </p>
        <p>
          {intro.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-lg">
        <div className="p-4 rounded-xl bg-gobig-panel border border-white/5 flex items-center gap-4">
          <div className="p-2 bg-gobig-accent/20 rounded-lg text-gobig-accent">
            <Bot size={24} />
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-mono">{intro.solutionTag}</div>
            <div className="font-semibold">{intro.solutionTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;