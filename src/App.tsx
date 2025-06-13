import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;