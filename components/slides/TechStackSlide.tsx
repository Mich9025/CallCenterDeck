import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';

const TechStackSlide: React.FC<SlideProps> = () => {
  const { tech } = APP_DATA.slides;

  return (
    <div className="flex flex-col h-full items-center justify-center w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{tech.title}</h2>
        <p className="text-gray-400">{tech.subtitle}</p>
      </div>

      <div className="relative w-full max-w-5xl bg-gobig-panel/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Diagram Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* User Side */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {tech.labels.user}
            </div>
            <span className="text-xs font-mono text-gray-500">{tech.labels.userSub}</span>
          </div>

          {/* Connection Line 1 */}
          <div className="flex-1 h-[2px] w-full md:w-auto bg-gray-700 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1/2 h-full bg-gobig-secondary animate-[slideRight_1.5s_linear_infinite]"></div>
          </div>

          {/* Twilio */}
          <div className="flex flex-col items-center gap-2 p-4 border border-gobig-secondary/50 bg-gobig-secondary/10 rounded-xl min-w-[120px]">
            <span className="font-bold text-gobig-secondary">{tech.labels.gateway}</span>
            <span className="text-[10px] uppercase font-mono">{tech.labels.gatewaySub}</span>
          </div>

          {/* Connection Line 2 */}
          <div className="flex-1 h-[2px] w-full md:w-auto bg-gray-700 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1/2 h-full bg-gobig-primary animate-[slideRight_1s_linear_infinite]"></div>
          </div>

          {/* AI Core */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gobig-primary to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col items-center gap-4 p-6 bg-black rounded-xl border border-white/10 min-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-bold text-white tracking-wider">{tech.labels.aiName}</span>
              </div>
              <div className="flex gap-2 text-xs font-mono text-gray-400">
                <span className="px-2 py-1 bg-white/5 rounded">{tech.labels.aiSub1}</span>
                <span className="px-2 py-1 bg-white/5 rounded">{tech.labels.aiSub2}</span>
              </div>
            </div>
          </div>

          {/* Connection Line 3 */}
          <div className="flex-1 h-[2px] w-full md:w-auto bg-gray-700 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1/2 h-full bg-gobig-accent animate-[slideRight_2s_linear_infinite]"></div>
          </div>

          {/* Backend */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 p-3 bg-gobig-panel border border-white/10 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-mono">{tech.labels.storage}</span>
            </div>
             <div className="flex items-center gap-3 p-3 bg-gobig-panel border border-white/10 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-sm font-mono">{tech.labels.webhook}</span>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-8 flex gap-8 text-sm text-gray-500 font-mono">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-gobig-secondary rounded-full"></div>
           <span>{tech.labels.legend[0]}</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-gobig-primary rounded-full"></div>
           <span>{tech.labels.legend[1]}</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-gobig-accent rounded-full"></div>
           <span>{tech.labels.legend[2]}</span>
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default TechStackSlide;