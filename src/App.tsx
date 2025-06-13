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
    <div className="min-h-screen bg-white">
      {/* New 3D Hero Section - replaces old Hero */}
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