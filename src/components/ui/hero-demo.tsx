import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DivideIcon as LucideIcon, Cpu, ShieldCheck, Layers, Zap, Eye, BookOpenCheck } from "lucide-react";

const features = [
  {
    icon: BookOpenCheck,
    title: "Tributar-IA",
    description: "Asistente tributario con IA entrenada para Colombia. Automatiza análisis DIAN, redacción legal y normatividad actualizada.",
  },
  {
    icon: Cpu,
    title: "Rendimiento",
    description: "Procesamiento de datos ultra-rápido en cualquier situación.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
    description: "Protección avanzada para total tranquilidad.",
  },
  {
    icon: Layers,
    title: "Modularidad",
    description: "Fácil integración con arquitectura existente.",
  },
  {
    icon: Zap,
    title: "Capacidad de respuesta",
    description: "Respuesta instantánea a cada comando.",
  },
];

const DemoOne = () => {
  const dianiaUrl = 'https://chat.tributar-ia.co';

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
            ✨ Herramientas de Nueva Generación
          </Badge>
          
          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Descubre minimalismo y poder en un solo lugar
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Diseñado pensando en estética y rendimiento. Experimenta procesamiento ultra-rápido, seguridad avanzada y diseño intuitivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button 
                className="text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none"
                onClick={() => window.open(dianiaUrl, '_blank')}
              >
                Comenzar
              </Button>
              <Button 
                className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-none"
                onClick={() => window.open(dianiaUrl, '_blank')}
              >
                Saber Más
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
            >
              <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
              <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
              <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute inset-0'>
        <Scene />
      </div>
    </div>
  );
};

export { DemoOne };
