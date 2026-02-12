import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { Mic, Zap, BarChart3, Database } from 'lucide-react';

const SolutionSlide: React.FC<SlideProps> = () => {
  const { solution } = APP_DATA.slides;
  
  const icons = [
    <Mic className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <Database className="w-6 h-6" />,
    <BarChart3 className="w-6 h-6" />
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {solution.title} <span className="text-gobig-primary">{solution.highlight}</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          {solution.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {solution.features.map((feature, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-gobig-panel border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gobig-secondary/20 to-gobig-primary/20 flex items-center justify-center text-gobig-primary border border-gobig-primary/20">
              {icons[idx]}
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSlide;