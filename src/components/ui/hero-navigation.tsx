import React from 'react';
import { CalculatorIcon } from './calculator-icon';

interface HeroNavigationProps {
  dianiaUrl: string;
}

export const HeroNavigation: React.FC<HeroNavigationProps> = ({ dianiaUrl }) => {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-2">
        <CalculatorIcon className="w-8 h-8" />
        <span className="font-bold text-xl">Tributar-IA</span>
      </div>
      <div className="flex items-center space-x-4">
        <a 
          href={dianiaUrl}
          className="px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
          aria-label="Iniciar sesión en Tributar-IA"
        >
          Iniciar sesión
        </a>
        <a 
          href={dianiaUrl}
          className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          aria-label="Comenzar prueba gratuita de Tributar-IA"
        >
          Prueba Gratis
        </a>
      </div>
    </nav>
  );
};