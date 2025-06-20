import React from 'react';
import { HeroNavigation } from './ui/hero-navigation';
import { HeroContent } from './ui/hero-content';

export function Hero() {
  const dianiaUrl = 'https://chat.tributar-ia.co';

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <HeroNavigation dianiaUrl={dianiaUrl} />

      {/* Main Content with scoped gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50">
        <HeroContent dianiaUrl={dianiaUrl} />
      </div>
    </div>
  );
}