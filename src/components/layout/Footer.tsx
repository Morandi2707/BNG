// src/components/layout/Footer.tsx
import { useContext } from 'react';
import { Linkedin, Instagram, Facebook, Phone } from 'lucide-react';
import Container from '../ui/Container';
import { LanguageContext } from '../../contexts/LanguageContext';
import LogoBNG from '../img/LOGO-BNG-SEM-NOME.png';
import EGLogo from '../img/EG-logo.png';

const Footer = () => {
  const { translate } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  const social = [
    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/company/bng-metalmec%C3%A2nica-ltda?originalSubdomain=br' },
    { icon: <Instagram size={16} />, href: 'https://www.instagram.com/bngmetalmecanica/' },
    { icon: <Facebook size={16} />, href: 'http://www.facebook.com/bngmetalmecanica' }
  ];

  const phone = translate('contact.info.phone1');

  return (
    <footer className="bg-[#042c70] text-white py-4">  {/* reduzido de py-8 para py-4 */}
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-2">  {/* gap reduzido */}
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-1">  {/* espaçamentos internos menores */}
          <img src={LogoBNG} alt="Logo BNG" className="w-20" />  {/* tamanho levemente reduzido */}
          <p className="text-gray-300 text-xs">{translate('footer.tagline')}</p>
          <div className="flex space-x-1">  {/* espaçamento menor */}
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#042c70] p-1 rounded-full hover:bg-gray-200 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-1 text-xs">{translate('footer.links')}</h3>
          <ul className="space-y-1 text-gray-300 text-xs">
            {['home', 'about', 'services', 'certifications', 'equipment', 'clients', 'contact'].map(id => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-white">
                  {translate(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-1 text-xs">{translate('footer.services')}</h3>
          <ul className="space-y-1 text-gray-300 text-xs">
            {['structures', 'boilermaking', 'machining', 'maintenance'].map(key => (
              <li key={key}>
                {translate(`services.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Apenas Telefone */}
        <div>
          <h3 className="font-bold mb-1 text-xs">{translate('contact.info.phoneLabel')}</h3>
          <div className="flex items-center text-gray-300 text-xs">
            <Phone size={14} className="text-white mr-1" />  {/* ícone menor */}
            <span>{phone}</span>
          </div>
        </div>
      </Container>

      {/* Copyright + Logo EG */}
      <div className="border-t border-gray-700 mt-2 pt-1 text-center text-gray-400 flex items-center justify-center gap-1 text-xs">  {/* texto e espaçamentos ~ menores */}
        {translate('footer.copyright').replace('{{year}}', String(year))}
      </div>
    </footer>
  );
};

export default Footer;
