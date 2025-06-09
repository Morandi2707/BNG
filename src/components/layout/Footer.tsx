// src/components/layout/Footer.tsx
import { useContext } from 'react';
import { Phone, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Container from '../ui/Container';
import { LanguageContext } from '../../contexts/LanguageContext';
import LogoBNG from '../img/LOGO-BNG-SEM-NOME.png';

const Footer = () => {
  const { translate } = useContext(LanguageContext);
  const year = new Date().getFullYear();
  const phoneNumber = '3182-2899';

  const social = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/bng-metalmec%C3%A2nica-ltda?originalSubdomain=br' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/bngmetalmecanica/' },
    { icon: <Facebook size={20} />, href: 'http://www.facebook.com/bngmetalmecanica' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@bngmetalmecanica' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#042c70] text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline Column */}
          <div className="col-span-1">
            <div className="flex flex-col items-center md:items-start">
              {/* Logo aumentada */}
              <img src={LogoBNG} alt="BNG Metalmecânica" className="h-20 mb-4" />
              <p className="text-sm text-center md:text-left">
                {translate('footer.tagline')}
              </p>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
              {translate('footer.links')}
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, '#home')}
                  className="hover:text-white block"
                >
                  {translate('nav.home')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="hover:text-white block"
                >
                  {translate('nav.services')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="hover:text-white block"
                >
                  {translate('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Telefone Column */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
              {translate('contact.info.phoneLabel')}
            </h4>
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={20} className="mr-2" />
              <span className="text-white">{phoneNumber}</span>
            </div>
          </div>

          {/* Social Column */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
              Social
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright Section */}
      <div className="w-full bg-[#042c70] py-4">
        <Container>
          <div className="flex justify-center items-center">
            <p className="text-white text-sm">
              {translate('footer.copyright').replace('{{year}}', String(year))}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
