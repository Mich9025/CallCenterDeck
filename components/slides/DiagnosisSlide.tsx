import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react';

const DiagnosisSlide: React.FC<SlideProps> = ({ client }) => {
  const { diagnosis } = APP_DATA.slides;

  const getIcon = (key: string) => {
    switch (key) {
      case 'clock': return <Clock size={24} />;
      case 'users': return <Users size={24} />;
      case 'trending': return <TrendingDown size={24} />;
      default: return <AlertTriangle size={24} />;
    }
  };

  return (
    <div className="flex flex-col h-full justify-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">{diagnosis.title} <span className="text-red-500">{diagnosis.highlight}</span></h2>
        <p className="text-xl text-gray-400">
          {diagnosis.description(client.company, client.volume)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diagnosis.cards.map((card, idx) => (
          <div key={idx} className="group p-6 bg-gobig-panel border border-white/5 hover:border-red-500/50 rounded-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
              {getIcon(card.iconKey)}
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-400">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 border-l-4 border-gobig-primary bg-gobig-primary/5 italic text-lg">
        "{client.painPoint}" — {diagnosis.painPointLabel}
      </div>
    </div>
  );
};

export default DiagnosisSlide;