import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calculator, Book, FileText, LineChart, Calendar, BookOpen, FileCheck, RefreshCw, Building, ShieldAlert, HelpCircle, PenTool as Tool, Globe, GraduationCap } from 'lucide-react';

interface Service {
  title: string;
  icon: React.ElementType;
  items: string[];
}

const services: Service[] = [
  {
    title: 'Cálculos y Liquidaciones',
    icon: Calculator,
    items: [
      'Liquidación de impuestos (Renta, IVA, ICA, etc.)',
      'Cálculo de retenciones en la fuente',
      'Determinación de bases gravables',
      'Cálculo de sanciones e intereses moratorios',
      'Conversión y actualización de valores en UVT'
    ]
  },
  {
    title: 'Análisis y Asesoría Normativa',
    icon: Book,
    items: [
      'Interpretación del Estatuto Tributario',
      'Análisis de decretos reglamentarios',
      'Revisión de conceptos DIAN',
      'Identificación de beneficios tributarios aplicables',
      'Orientación sobre deducciones y exenciones',
      'Análisis de resoluciones y doctrina tributaria'
    ]
  },
  {
    title: 'Procedimientos Tributarios',
    icon: FileText,
    items: [
      'Guía en procesos de declaración',
      'Orientación en correcciones de declaraciones',
      'Asesoría en respuesta a requerimientos DIAN',
      'Explicación de procedimientos de devolución',
      'Orientación en procesos de fiscalización'
    ]
  },
  {
    title: 'Planeación Tributaria',
    icon: LineChart,
    items: [
      'Análisis comparativo entre regímenes tributarios',
      'Identificación de oportunidades de optimización fiscal',
      'Evaluación de impacto tributario en decisiones empresariales',
      'Recomendaciones para minimizar carga tributaria legal'
    ]
  },
  {
    title: 'Obligaciones Formales',
    icon: Calendar,
    items: [
      'Calendario tributario y vencimientos',
      'Requisitos de facturación electrónica',
      'Obligaciones de información exógena',
      'Requerimientos de registro y actualización RUT'
    ]
  },
  {
    title: 'Análisis Contable-Tributario',
    icon: BookOpen,
    items: [
      'Revisión de registros contables con impacto tributario',
      'Conciliaciones fiscales',
      'Determinación de diferencias temporarias y permanentes',
      'Análisis de depreciaciones y amortizaciones'
    ]
  },
  {
    title: 'Asistencia en Documentación',
    icon: FileCheck,
    items: [
      'Ayuda en preparación de respuestas a la DIAN',
      'Orientación en documentación soporte',
      'Guía en preparación de papeles de trabajo',
      'Formatos y plantillas tributarias'
    ]
  },
  {
    title: 'Actualizaciones y Cambios Normativos',
    icon: RefreshCw,
    items: [
      'Información sobre reformas tributarias',
      'Actualización de tarifas y bases',
      'Cambios en procedimientos y requisitos',
      'Nuevas disposiciones y normativas'
    ]
  },
  {
    title: 'Análisis Sectorial',
    icon: Building,
    items: [
      'Tratamientos tributarios específicos por sector',
      'Beneficios sectoriales',
      'Obligaciones especiales por actividad económica'
    ]
  },
  {
    title: 'Gestión de Riesgos Tributarios',
    icon: ShieldAlert,
    items: [
      'Identificación de contingencias fiscales',
      'Recomendaciones para mitigación de riesgos',
      'Análisis de exposición tributaria'
    ]
  },
  {
    title: 'Consultas Específicas',
    icon: HelpCircle,
    items: [
      'Respuesta a dudas puntuales sobre normativa',
      'Aclaración de conceptos tributarios',
      'Orientación en casos particulares'
    ]
  },
  {
    title: 'Herramientas y Cálculos',
    icon: Tool,
    items: [
      'Simuladores tributarios',
      'Calculadoras de impuestos',
      'Plantillas de trabajo',
      'Formatos de control'
    ]
  },
  {
    title: 'Información Internacional',
    icon: Globe,
    items: [
      'Convenios de doble imposición',
      'Precios de transferencia básicos',
      'Operaciones internacionales'
    ]
  },
  {
    title: 'Educación Tributaria',
    icon: GraduationCap,
    items: [
      'Explicación de conceptos básicos',
      'Actualizaciones normativas',
      'Mejores prácticas tributarias',
      'Casos prácticos y ejemplos'
    ]
  }
];

export function Services() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const dianiaUrl = 'https://chat.tributar-ia.co';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2428] to-[#0F1419] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          ¿Cómo puedo ayudarte con tu gestión tributaria?
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg shadow-lg overflow-hidden transition-all duration-300 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-6 flex items-center justify-between bg-transparent hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <service.icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                {openSections.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-neutral-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-400" />
                )}
              </button>
              
              {openSections.includes(index) && (
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="h-2 w-2 mt-2 rounded-full bg-blue-400 mr-3" />
                        <span className="text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={dianiaUrl}
            className="inline-block px-8 py-4 text-lg rounded-full bg-white text-black hover:bg-white/90 transition-colors"
          >
            Hacer prueba gratuita
          </a>
        </div>
      </div>
    </div>
  );
}