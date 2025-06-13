import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Tributar-IA me ayudó a responder un requerimiento en minutos. ¡Imprescindible para mi empresa!",
    author: "Aida Castro",
    role: "Contadora Independiente"
  },
  {
    quote: "Gracias a Tributar-IA, optimizamos los procesos tributarios y evitamos una multa importante.",
    author: "Alma Cobo",
    role: "Gerente Financiero, Dinamic Spa SAS"
  }
];

export function Testimonials() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#1A2428] to-[#0F1419]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-lg shadow-lg backdrop-blur-sm">
              <Quote className="h-8 w-8 text-blue-400 mb-4" />
              <p className="text-lg text-neutral-300 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}