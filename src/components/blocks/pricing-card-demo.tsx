import React, { useState } from 'react';
import { PricingCard } from "@/components/ui/pricing-card";

export function PricingCardBasic() {
  // Simulating user count - you can replace this with actual state management
  const [userCount] = useState(50); // Change this to test discount logic

  const freemiumFeatures = [
    { text: "Consultas tributarias básicas", included: true },
    { text: "Respuestas básicas de IA", included: true },
    { text: "Soporte por email", included: true },
    { text: "Acceso a base de datos legal", included: false },
    { text: "Análisis avanzado de documentos", included: false }
  ];

  const professionalFeatures = [
    { text: "Uso ilimitado", included: true },
    { text: "Respuestas avanzadas de IA", included: true },
    { text: "Acceso completo a base de datos legal", included: true },
    { text: "Análisis visual de documentos", included: true },
    { text: "Soporte prioritario", included: true }
  ];

  const enterpriseFeatures = [
    { text: "10 cuentas de usuario ilimitadas", included: true },
    { text: "Modelo de IA personalizado entrenado con datos de la empresa", included: true },
    { text: "Datos almacenados en servidores de Tributar-IA", included: true },
    { text: "Integración directa con Legal-IA", included: true },
    { text: "Cumplimiento HIPAA, GDPR, LGPD", included: true },
    { text: "Estándares de protección de datos personales", included: true },
    { text: "Soporte prioritario 24/7", included: true },
    { text: "Integración personalizada", included: true },
    { text: "Acuerdo de nivel de servicio (SLA)", included: true }
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
              🎉 ¡Oferta de lanzamiento especial para los primeros 100 usuarios!
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Freemium"
            description="Prueba la plataforma sin riesgo"
            price={0}
            userCount={userCount}
            features={freemiumFeatures}
            buttonText="Comenzar Gratis"
            buttonVariant="outline"
            onButtonClick={() => console.log('Freemium plan selected')}
            offer="10 usos gratuitos incluidos"
          />

          <PricingCard
            title="Profesional"
            description="Uso ilimitado para profesionales en crecimiento"
            price={15}
            originalPrice={30}
            userCount={userCount}
            features={professionalFeatures}
            buttonText="Actualizar Ahora"
            popular={true}
            onButtonClick={() => console.log('Professional plan selected')}
            offer="Oferta especial de lanzamiento para los primeros 100 usuarios"
          />

          <PricingCard
            title="Empresarial"
            description="Plan personalizado para equipos de gran escala con automatización"
            price={0}
            userCount={userCount}
            features={enterpriseFeatures}
            buttonText="Contactar Ventas"
            buttonVariant="secondary"
            onButtonClick={() => console.log('Enterprise plan selected')}
            isCustomPricing={true}
            customDescription="Diseñado para empresas que necesitan automatización de datos y cumplimiento legal"
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
        price={15}
        originalPrice={30}
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