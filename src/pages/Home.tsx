import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Mission from '../components/sections/Mission';
import Services from '../components/sections/Services';
import Certifications from '../components/sections/Certifications';
import Equipment from '../components/sections/Equipment';
import Clients from '../components/sections/Clients';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Mission />
      <Certifications />
      <Equipment />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;