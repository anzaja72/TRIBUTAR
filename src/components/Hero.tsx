import React from 'react';
import { Calculator } from 'lucide-react';

export function Hero() {
  const dianiaUrl = 'https://chat.tributar-ia.co';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          <Calculator className="w-8 h-8" />
          <span className="font-bold text-xl">Tributar-IA</span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href={dianiaUrl}
            className="px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
          >
            Iniciar sesión
          </a>
          <a 
            href={dianiaUrl}
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Prueba Gratis
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-24 text-center">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-wider uppercase mb-6">
            ASISTENTE TRIBUTARIO INTELIGENTE
          </p>
          <h1 className="text-8xl font-serif mb-8">
            Tributar-IA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Resuelve cualquier duda tributaria, redacta respuestas personalizadas y analiza requerimientos en segundos.
          </p>
          <a 
            href={dianiaUrl}
            className="inline-block px-8 py-4 text-lg rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Prueba Gratis
          </a>
        </div>

        {/* Rating Section */}
        <div className="mt-24">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <span className="font-bold text-xl">4.9</span>
              <span className="text-gray-600 ml-2">/ 5</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-xl">4.8</span>
              <span className="text-gray-600 ml-2">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}