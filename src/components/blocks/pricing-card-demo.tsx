import React, { useState } from 'react';
import { PricingCard } from "@/components/ui/pricing-card";

export function PricingCardBasic() {
  // Simulating user count - you can replace this with actual state management
  const [userCount] = useState(50); // Change this to test discount logic

  const freemiumFeatures = [
    { text: "Basic tax consultations", included: true },
    { text: "Basic AI responses", included: true },
    { text: "Email support", included: true },
    { text: "Access to legal database", included: false },
    { text: "Advanced document analysis", included: false }
  ];

  const professionalFeatures = [
    { text: "Unlimited usage", included: true },
    { text: "Advanced AI responses", included: true },
    { text: "Full access to legal database", included: true },
    { text: "Visual document analysis", included: true },
    { text: "Priority support", included: true }
  ];

  const enterpriseFeatures = [
    { text: "10 unlimited user accounts", included: true },
    { text: "Custom AI model trained on company data", included: true },
    { text: "Data stored on Tributar-IA servers", included: true },
    { text: "Direct integration with Legal-IA", included: true },
    { text: "HIPAA, GDPR, LGPD compliance", included: true },
    { text: "Personal data protection standards", included: true },
    { text: "24/7 priority support", included: true },
    { text: "Custom integration", included: true },
    { text: "SLA agreement", included: true }
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
            description="Try the platform with no risk"
            price={0}
            userCount={userCount}
            features={freemiumFeatures}
            buttonText="Start for Free"
            buttonVariant="outline"
            onButtonClick={() => console.log('Freemium plan selected')}
            offer="10 free uses included"
          />

          <PricingCard
            title="Professional"
            description="Unlimited use for growing professionals"
            price={15}
            originalPrice={30}
            userCount={userCount}
            features={professionalFeatures}
            buttonText="Upgrade Now"
            popular={true}
            onButtonClick={() => console.log('Professional plan selected')}
            offer="Special launch offer for first 100 users"
          />

          <PricingCard
            title="Enterprise"
            description="Custom plan for high-scale teams with automation"
            price={0}
            userCount={userCount}
            features={enterpriseFeatures}
            buttonText="Contact Sales"
            buttonVariant="secondary"
            onButtonClick={() => console.log('Enterprise plan selected')}
            isCustomPricing={true}
            customDescription="Tailored for companies needing data automation and legal compliance"
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