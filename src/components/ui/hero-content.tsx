import React, { Suspense } from 'react';

// Lazy load the rating component
const Rating = React.lazy(() => 
  import('./rating').then(module => ({ default: module.Rating }))
);

interface HeroContentProps {
  dianiaUrl: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ dianiaUrl }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 text-center">
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-wider uppercase mb-6">
          ASISTENTE TRIBUTARIO INTELIGENTE
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-none">
          Tributar-IA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Resuelve cualquier duda tributaria, redacta respuestas personalizadas y analiza requerimientos en segundos.
        </p>
        <a 
          href={dianiaUrl}
          className="inline-block px-8 py-4 text-lg rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          aria-label="Comenzar a usar Tributar-IA gratis"
        >
          Comenzar Gratis
        </a>
      </div>

      {/* Lazy loaded rating section with fallback */}
      <Suspense fallback={
        <div className="mt-24 h-20 flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
            <div className="h-6 w-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      }>
        <Rating />
      </Suspense>
    </div>
  );
};