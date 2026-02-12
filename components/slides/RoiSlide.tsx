import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { Check, Info } from 'lucide-react';

const RoiSlide: React.FC<SlideProps> = () => {
  const { roi } = APP_DATA.slides;

  return (
    <div className="flex flex-col h-full justify-center items-center w-full max-w-5xl mx-auto">
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {roi.title} <span className="text-gobig-primary">{roi.highlight}</span>
        </h2>
        <p className="text-xl text-gray-400">
          {roi.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {roi.items.map((item, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 rounded-2xl border flex flex-col items-center text-center transition-all duration-300 hover:scale-105 ${
              item.highlight 
                ? 'bg-gobig-panel border-gobig-primary shadow-[0_0_30px_rgba(0,255,157,0.1)]' 
                : 'bg-gobig-panel/50 border-white/10 hover:border-white/20'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-300 mb-4">{item.category}</h3>
            
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {item.value}
            </div>
            
            <div className="text-sm font-mono text-gobig-secondary mb-8">
              {item.unit}
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/5 w-full">
              <p className="text-base text-gray-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-2 text-sm text-gray-500 bg-black/30 px-6 py-3 rounded-full border border-white/5">
        <Info size={16} className="text-gobig-primary" />
        <p>{roi.note}</p>
      </div>
    </div>
  );
};

export default RoiSlide;