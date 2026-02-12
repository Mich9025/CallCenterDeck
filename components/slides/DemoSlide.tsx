import React, { useState, useEffect, useRef } from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { Play, Pause, Phone } from 'lucide-react';

const DemoSlide: React.FC<SlideProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { demo } = APP_DATA.slides;
  
  // Audio Playback Control
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
        audio.pause(); // Ensure audio stops when slide unmounts
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(e => {
        console.error("Audio playback failed:", e);
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  // Visualizer Simulation (synced to playing state)
  useEffect(() => {
    if (!isPlaying) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const bars = 40;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width / bars;
      
      for (let i = 0; i < bars; i++) {
        // Create more dynamic movement
        const time = Date.now() / 100;
        const heightMultiplier = Math.sin(time + i * 0.5) * 0.5 + 0.5; // Wave effect
        const randomJitter = Math.random() * 0.3;
        
        const height = (heightMultiplier + randomJitter) * canvas.height * 0.8;
        const x = i * width;
        const y = (canvas.height - height) / 2;
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#00ccff');
        gradient.addColorStop(1, '#00ff9d');
        
        ctx.fillStyle = gradient;
        // Rounded caps
        ctx.beginPath();
        ctx.roundRect(x + 1, y, width - 2, height, 4);
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <audio 
        ref={audioRef} 
        src={demo.audioUrl} 
        preload="auto"
        className="hidden"
      />

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">{demo.title}</h2>
        <p className="text-gray-400">{demo.subtitle}</p>
      </div>

      {/* Phone/Interface Container */}
      <div className="relative w-80 md:w-96 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden p-6 flex flex-col justify-between h-[500px]">
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

        {/* Header */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gobig-primary to-gobig-secondary p-1 animate-pulse">
             <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-4xl">🤖</span>
             </div>
          </div>
          <h3 className="mt-4 text-xl font-bold">{demo.agentName}</h3>
          <p className="text-sm text-gobig-primary animate-pulse">
            {isPlaying ? demo.statusActive : demo.statusIdle}
          </p>
        </div>

        {/* Visualizer */}
        <div className="flex-1 flex items-center justify-center w-full relative">
           <canvas ref={canvasRef} width={300} height={100} className="w-full h-24" />
           {!isPlaying && (
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                 Click al botón verde para iniciar
               </span>
             </div>
           )}
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-4 mb-4">
           <button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                 <span className="text-xl">🔇</span>
              </div>
              <span className="text-[10px]">{demo.buttons.mute}</span>
           </button>
           
           <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className={`flex flex-col items-center justify-center gap-1 transition-transform active:scale-95`}
           >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                 {isPlaying ? <Phone className="fill-white text-white rotate-[135deg]" /> : <Phone className="fill-white text-white" />}
              </div>
           </button>

           <button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                 <span className="text-xl">⌨️</span>
              </div>
              <span className="text-[10px]">{demo.buttons.keyboard}</span>
           </button>
        </div>

      </div>
    </div>
  );
};

export default DemoSlide;