import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MaestriaExecutiva from './components/MaestriaExecutiva';
import CursosModulares from './components/CursosModulares';
import CursosPregrabados from './components/CursosPregrabados';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MaestriaExecutiva />
        <CursosModulares />
        <CursosPregrabados />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;