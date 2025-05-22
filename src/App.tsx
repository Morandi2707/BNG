import { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header              from './components/layout/Header';
import Footer              from './components/layout/Footer';
import Hero                from './components/sections/Hero';
import About               from './components/sections/About';
import Services            from './components/sections/Services';
import Mission             from './components/sections/Mission';
import Certifications      from './components/sections/Certifications';
import Equipment           from './components/sections/Equipment';
import Clients             from './components/sections/Clients';
import Contact             from './components/sections/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <LanguageProvider>
        <Hero />
      <Header isScrolled={isScrolled} />
      <main className="pt-16">
        <About />
        <Services />
        <Mission />
        <Certifications />
        <Equipment />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
