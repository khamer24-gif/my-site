
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import Calculator from './components/Calculator';
import Advantages from './components/Advantages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LeadMagnet />
        <Calculator />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
