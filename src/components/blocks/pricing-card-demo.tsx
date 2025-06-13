import React, { useState } from 'react';
import { PricingCard } from "@/components/ui/pricing-card";

export function PricingCardBasic() {
  // Simulating user count - you can replace this with actual state management
  const [userCount] = useState(50); // Change this to test discount logic

  const basicFeatures = [
    { text: "Consultas tributarias ilimitadas", included: true },
    { text: "Análisis de requerimientos DIAN", included: true },
    { text: "Redacción de respuestas básicas", included: true },
    { text: "Soporte por email", included: true },
    { text: "Acceso a biblioteca normativa", included: false },
    { text: "Consultas telefónicas", included: false },
    { text: "Revisión de declaraciones", included: false }
  ];

  const proFeatures = [
    { text: "Todo lo del plan Básico", included: true },
    { text: "Acceso completo a biblioteca normativa", included: true },
    { text: "Redacción avanzada de respuestas", included: true },
    { text: "Análisis visual de documentos", included: true },
    { text: "Consultas telefónicas prioritarias", included: true },
    { text: "Revisión completa de declaraciones", included: true },
    { text: "Alertas normativas personalizadas", included: true }
  ];

  const enterpriseFeatures = [
    { text: "Todo lo del plan Pro", included: true },
    { text: "Consultor tributario dedicado", included: true },
    { text: "Capacitación personalizada", included: true },
    { text: "Integración con sistemas contables", included: true },
    { text: "Reportes ejecutivos mensuales", included: true },
    { text: "Soporte 24/7", included: true },
    { text: "SLA garantizado", included: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Planes que se adaptan a tu negocio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para optimizar tu gestión tributaria con Tributar-IA
          </p>
          {userCount <= 100 && (
            <div className="mt-6 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              🎉 ¡Oferta de lanzamiento! 50% de descuento para los primeros 100 usuarios
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Básico"
            description="Perfecto para profesionales independientes"
            price={30}
            userCount={userCount}
            features={basicFeatures}
            buttonText="Comenzar Gratis"
            buttonVariant="outline"
            onButtonClick={() => console.log('Basic plan selected')}
          />

          <PricingCard
            title="Profesional"
            description="Ideal para empresas medianas"
            price={60}
            userCount={userCount}
            features={proFeatures}
            buttonText="Elegir Pro"
            popular={true}
            onButtonClick={() => console.log('Pro plan selected')}
          />

          <PricingCard
            title="Empresarial"
            description="Para grandes organizaciones"
            price={120}
            userCount={userCount}
            features={enterpriseFeatures}
            buttonText="Contactar Ventas"
            buttonVariant="secondary"
            onButtonClick={() => console.log('Enterprise plan selected')}
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium underline">
            Contáctanos para una solución a medida
          </button>
        </div>
      </div>
    </div>
  );
}

export function PricingCardSingle() {
  return (
    <div className="max-w-sm mx-auto">
      <PricingCard
        title="Plan Profesional"
        description="Todo lo que necesitas para tu gestión tributaria"
        price={60}
        userCount={50} // This will trigger the discount
        features={[
          { text: "Consultas ilimitadas", included: true },
          { text: "Análisis de documentos", included: true },
          { text: "Soporte prioritario", included: true },
          { text: "Integración avanzada", included: false }
        ]}
        buttonText="Comenzar Ahora"
        popular={true}
        onButtonClick={() => console.log('Single card clicked')}
      />
    </div>
  );
}