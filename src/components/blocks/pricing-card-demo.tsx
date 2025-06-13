import React, { useState } from 'react';
import { PricingCard } from "@/components/ui/pricing-card";

export function PricingCardBasic() {
  // Simulating user count - you can replace this with actual state management
  const [userCount] = useState(50); // Change this to test discount logic
  const [enterpriseSubscribers] = useState(3); // Track enterprise subscribers

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
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] to-[#1A2428] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Planes que se adaptan a tu negocio
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Elige el plan perfecto para optimizar tu gestión tributaria con Tributar-IA
          </p>
          {userCount <= 100 && (
            <div className="mt-6 inline-block bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
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
            price={699}
            originalPrice={1000}
            userCount={userCount}
            features={enterpriseFeatures}
            buttonText="Contactar Ventas"
            buttonVariant="secondary"
            onButtonClick={() => console.log('Enterprise plan selected')}
            offer={`¡Solo para los primeros 10 suscriptores empresariales! (${enterpriseSubscribers}/10)`}
            enterpriseSubscribers={enterpriseSubscribers}
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-300 mb-4">
            ¿Necesitas un plan personalizado?
          </p>
          <button className="text-blue-400 hover:text-blue-300 font-medium underline">
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