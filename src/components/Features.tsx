import React from 'react';
import { Clock, FileText, Eye } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Resuelve dudas al instante',
    description: 'Consulta cualquier tema tributario con respuestas claras y precisas.'
  },
  {
    icon: FileText,
    title: 'Redacción automatizada',
    description: 'Crea respuestas personalizadas para requerimientos o notificaciones legales.'
  },
  {
    icon: Eye,
    title: 'Análisis visual',
    description: 'Carga una foto de requerimientos tributarios y obtén un resumen detallado al instante.'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#1A2428] to-[#0F1419]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Características que transforman tu gestión tributaria
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-neutral-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Dashboard Features"
              className="rounded-lg shadow-xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}