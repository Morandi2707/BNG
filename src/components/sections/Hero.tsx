import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import wallpaper from '../img/1920x1080-BNG-WALLPAPER4k.jpg';
import Button    from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  const { translate } = useContext(LanguageContext);
  return (
    <section
      id="home"
      className="relative text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">{translate('hero.title')}</h1>
              <p className="text-xl mb-8">{translate('hero.subtitle')}</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="#services">
                  {translate('hero.button.services')}
                </Button>
                <Button variant="outline" size="lg" href="#contact">
                  {translate('hero.button.contact')}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
