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
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-lg text-gray-600 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}