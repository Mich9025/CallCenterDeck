import React from 'react';
import { SlideProps } from '../../types';
import { APP_DATA } from '../../data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ContactSlide: React.FC<SlideProps> = ({ client }) => {
  const { contact } = APP_DATA.slides;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      
      <div className="w-24 h-24 bg-gobig-primary/10 rounded-full flex items-center justify-center mb-4 animate-bounce">
         <span className="text-4xl">🚀</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold">
        {contact.title}
      </h1>
      
      <p className="text-xl text-gray-400 max-w-2xl">
        {contact.description(client.company)}
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg justify-center mt-8">
        <a 
          href={`https://wa.me/${client.phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="group relative px-8 py-4 bg-gobig-primary text-black font-bold rounded-lg overflow-hidden transition-all hover:bg-white hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            {contact.cta} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500 font-mono">
        {contact.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-1 justify-center">
            <CheckCircle2 size={12} className="text-gobig-primary" /> {feature}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ContactSlide;