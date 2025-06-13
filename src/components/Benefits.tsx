import React from 'react';
import { Clock, Shield, Brain } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Ahorra tiempo',
    description: 'Reduce un 60% el tiempo en análisis tributario.'
  },
  {
    icon: Shield,
    title: 'Cumplimiento garantizado',
    description: 'Evita errores y multas con guías siempre actualizadas.'
  },
  {
    icon: Brain,
    title: 'Mayor claridad',
    description: 'Recibe explicaciones fáciles de entender sobre temas complejos.'
  }
];

export function Benefits() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Beneficios de usar Dian-IA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}