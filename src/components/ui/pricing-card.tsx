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
  userCount = 0
}: PricingCardProps) {
  // Discount logic for first 100 users
  const displayOriginal = userCount <= 100 ? (originalPrice || basePriceInput * 2) : undefined;
  const displayPrice = userCount <= 100 ? Math.floor(basePriceInput / 2) : basePriceInput;
  const isDiscounted = userCount <= 100;

  return (
    <motion.div
      whileHover={{ scale: popular ? 1.05 : 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`relative transition-all duration-300 hover:shadow-xl ${
        popular 
          ? 'border-primary shadow-lg ring-2 ring-primary/20' 
          : 'hover:border-primary/50'
      } ${className}`}>
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Más Popular
            </Badge>
          </div>
        )}

        {isDiscounted && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge variant="destructive" className="bg-red-500 text-white px-3 py-1 shadow-lg animate-pulse">
              50% OFF
            </Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
          <CardDescription className="text-base mt-2 text-gray-600">{description}</CardDescription>
          
          <div className="mt-6 flex items-center justify-center space-x-2">
            {displayOriginal && (
              <span className="text-2xl font-semibold text-gray-400 line-through">
                ${displayOriginal}
              </span>
            )}
            <span className="text-4xl font-bold text-gray-900">
              ${displayPrice}
            </span>
            {period && (
              <span className="text-muted-foreground text-lg">{period}</span>
            )}
          </div>

          {isDiscounted && (
            <p className="text-sm text-green-600 font-medium mt-2">
              ¡Oferta especial para los primeros 100 usuarios!
            </p>
          )}
        </CardHeader>
        
        <Separator className="mx-6" />
        
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
                    ? 'bg-green-100 text-green-600 border border-green-200' 
                    : 'bg-red-50 text-red-400 border border-red-200'
                }`}>
                  {feature.included ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <X className="w-3 h-3" />
                  )}
                </div>
                <span className={`text-sm leading-relaxed ${
                  feature.included 
                    ? 'text-gray-700' 
                    : 'text-gray-400 line-through'
                }`}>
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-6">
          <Button 
            className={`w-full transition-all duration-200 ${
              popular 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg' 
                : ''
            }`}
            variant={popular ? 'default' : buttonVariant}
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