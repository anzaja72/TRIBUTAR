import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Contexto",
    description: "Sistema tributario colombiano preconfigurado.",
  },
  {
    icon: ShieldCheck,
    title: "Precisión",
    description: "Información tributaria colombiana precisa y actualizada.",
  },
  {
    icon: Layers,
    title: "Seguridad",
    description: "Reduce errores e información inventada en temas fiscales.",
  },
  {
    icon: Zap,
    title: "Lenguaje",
    description: "Entiende la jerga tributaria colombiana sin problemas.",
  },
];

export const DemoOne = () => {
  const dianiaUrl = 'https://chat.tributar-ia.co';

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#000] to-[#1A2428] text-white flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* 3D Background Scene - positioned absolutely and contained within this section */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      
      {/* Content Layer */}
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
            ✨ Herramientas de Nueva Generación
          </Badge>
          
          <div className="space-y-6 flex items-center justify-center flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tight max-w-4xl leading-none">
              TRIBUTAR-IA
            </h1>
            <p className="text-lg text-neutral-300 max-w-2xl">
              Resuelve cualquier duda tributaria, redacta respuestas personalizadas y analiza requerimientos en segundos.
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
    </section>
  );
};