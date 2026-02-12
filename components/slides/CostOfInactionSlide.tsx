import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { AlertOctagon, TrendingUp, UserMinus } from 'lucide-react';

const CostOfInactionSlide: React.FC<SlideProps> = () => {
  const { costOfInaction } = APP_DATA.slides;
  
  const getIcon = (idx: number) => {
    switch(idx) {
      case 0: return <AlertOctagon size={28} />;
      case 1: return <TrendingUp size={28} />;
      case 2: return <UserMinus size={28} />;
      default: return <AlertOctagon size={28} />;
    }
  };

  return (
    <div className="flex flex-col h-full justify-center items-center w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {costOfInaction.title} <span className="text-red-500">{costOfInaction.highlight}</span>
        </h2>
        <p className="text-xl text-gray-400">
          {costOfInaction.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {costOfInaction.cards.map((card, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 rounded-2xl border border-white/10 bg-gobig-panel/40 hover:bg-gobig-panel hover:border-red-500/30 transition-all duration-300 flex flex-col"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

            <div className="mb-6 flex items-start justify-between">
               <div className="p-3 bg-red-500/10 text-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                 {getIcon(idx)}
               </div>
               <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
                 Riesgo Alto
               </div>
            </div>

            <h3 className="text-xl font-bold text-gray-200 mb-2">{card.title}</h3>
            
            <div className="text-3xl font-bold text-white mb-1 tracking-tight">
              {card.value}
            </div>
            <div className="text-xs font-mono text-red-400 mb-6 uppercase tracking-wider">
              {card.unit}
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostOfInactionSlide;