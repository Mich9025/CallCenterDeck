import React, { ReactNode } from 'react';

interface DeckProps {
  children: ReactNode;
}

const Deck: React.FC<DeckProps> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-center p-4 md:p-12">
      <div className="w-full h-full relative perspective-1000">
        {/* We can add transition group logic here if we add framer-motion later, 
            for now just render children directly which handles the switch */}
        {children}
      </div>
    </div>
  );
};

export default Deck;