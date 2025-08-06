import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import TargetUsers from './components/TargetUsers';
import Competition from './components/Competition';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useAnimations from './useAnimations';

function App() {
  useAnimations();
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <TargetUsers />
      <Competition />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
