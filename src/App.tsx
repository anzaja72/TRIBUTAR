import React from 'react';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import PricingPage from './components/PricingPage';
import { DemoOne } from './components/ui/hero-demo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000] to-[#1A2428] text-white">
      {/* New 3D Hero Section */}
      <DemoOne />
      <Features />
      <Benefits />
      <Services />
      <PricingPage />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;