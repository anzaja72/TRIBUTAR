import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Separator } from './separator';
import { Check, Star, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  period?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant?: 'default' | 'outline' | 'secondary';
  popular?: boolean;
  onButtonClick?: () => void;
  className?: string;
  userCount?: number;
  offer?: string;
  isCustomPricing?: boolean;
  customDescription?: string;
  enterpriseSubscribers?: number;
}

export function PricingCard({
  title,
  description,
  price: basePriceInput,
  originalPrice,
  period = '/mes',
  features,
  buttonText,
  buttonVariant = 'default',
  popular = false,
  onButtonClick,
  className = '',
  userCount = 0,
  offer,
  isCustomPricing = false,
  customDescription,
  enterpriseSubscribers = 0
}: PricingCardProps) {
  // Discount logic for first 100 users (only for Professional plan)
  const shouldShowDiscount = userCount <= 100 && title === 'Profesional';
  
  // Enterprise special pricing logic
  const isEnterpriseSpecial = title === 'Empresarial' && enterpriseSubscribers < 10;
  
  const displayOriginal = shouldShowDiscount ? (originalPrice || basePriceInput * 2) : originalPrice;
  const displayPrice = shouldShowDiscount ? basePriceInput : basePriceInput;

  return (
    <motion.div
      whileHover={{ scale: popular ? 1.05 : 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`relative transition-all duration-300 hover:shadow-xl bg-white/5 border-white/10 backdrop-blur-sm ${
        popular 
          ? 'border-blue-400/50 shadow-lg ring-2 ring-blue-400/20' 
          : 'hover:border-white/20'
      } ${className}`}>
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Más Popular
            </Badge>
          </div>
        )}

        {shouldShowDiscount && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge variant="destructive" className="bg-red-500 text-white px-3 py-1 shadow-lg animate-pulse">
              50% DESC
            </Badge>
          </div>
        )}

        {isEnterpriseSpecial && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge variant="destructive" className="bg-orange-500 text-white px-3 py-1 shadow-lg animate-pulse">
              30% DESC
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
          <CardDescription className="text-base mt-2 text-neutral-300">{description}</CardDescription>
          
          {/* Price Display */}
          <div className="mt-6">
            {isCustomPricing ? (
              <div className="text-center">
                <span className="text-2xl font-bold text-white">Precio personalizado</span>
                <p className="text-sm text-neutral-300 mt-2">Contactar Ventas</p>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                {displayOriginal && (
                  <span className="text-2xl font-semibold text-neutral-500 line-through">
                    ${displayOriginal}
                  </span>
                )}
                <span className="text-4xl font-bold text-white">
                  ${displayPrice}
                </span>
                {period && displayPrice > 0 && (
                  <span className="text-neutral-400 text-lg">{period}</span>
                )}
              </div>
            )}
          </div>

          {/* Offer/Description */}
          {offer && (
            <p className="text-sm text-blue-400 font-medium mt-2">
              {offer}
            </p>
          )}

          {customDescription && (
            <p className="text-sm text-neutral-300 mt-2">
              {customDescription}
            </p>
          )}
        </CardHeader>
        
        <Separator className="mx-6 bg-white/10" />
        
        <CardContent className="space-y-4 pt-6">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                  feature.included 
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-400/30'
                }`}>
                  {feature.included ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <X className="w-3 h-3" />
                  )}
                </div>
                <span className={`text-sm leading-relaxed ${
                  feature.included 
                    ? 'text-white' 
                    : 'text-neutral-500 line-through'
                }`}>
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-6">
          <Button 
            className="w-full bg-white text-black hover:bg-white/90 transition-all duration-200 font-medium"
            size="lg"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}