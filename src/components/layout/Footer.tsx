import { useContext } from 'react';
import { Linkedin, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Container from '../ui/Container';
import { LanguageContext } from '../../contexts/LanguageContext';
import LogoBNG from '../img/LOGO-BNG-SEM-NOME.png'; // ajuste a extensão se necessário

const Footer = () => {
  const { translate } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  const social = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/bng-metalmec%C3%A2nica-ltda?originalSubdomain=br' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/bngmetalmecanica/' },
    { icon: <Facebook size={20} />, href: 'http://www.facebook.com/bngmetalmecanica' },
  ];

  const phones = [
    translate('contact.info.phone1'),
    translate('contact.info.phone2'),
    translate('contact.info.phone3'),
  ];

  const emails = [
    translate('contact.info.email1'),
    translate('contact.info.email2'),
    translate('contact.info.email3'),
  ];

  return (
    <footer className="bg-[#042c70] text-white pt-16">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <img
            src={LogoBNG}
            alt="Logo BNG"
            className="mb-4 w-32"
          />
          <p className="text-gray-300 mb-4">{translate('footer.tagline')}</p>
          <div className="flex space-x-4">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#042c70] p-2 rounded-full hover:bg-gray-200 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">{translate('footer.links')}</h3>
          <ul className="space-y-2">
            {['home','about','services','certifications','equipment','clients','contact'].map(id => (
              <li key={id}>
                <a href={`#${id}`} className="text-gray-300 hover:text-white">
                  {translate(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">{translate('footer.services')}</h3>
          <ul className="space-y-2 text-gray-300">
            {['structures','boilermaking','machining','maintenance'].map(key => (
              <li key={key}>{translate(`services.${key}`)}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">{translate('contact.info.title')}</h3>
          <ul className="space-y-6 text-gray-300">
            {/* Address */}
            <li className="flex items-start">
              <MapPin size={20} className="text-white mr-3 mt-1" />
              <div>
                <div className="font-bold">{translate('contact.info.addressLabel')}</div>
                <div className="whitespace-pre-line">{translate('contact.info.address')}</div>
              </div>
            </li>
            {/* Phone */}
            <li className="flex items-start">
              <Phone size={20} className="text-white mr-3 mt-1" />
              <div>
                <div className="font-bold">{translate('contact.info.phoneLabel')}</div>
                <div className="space-y-1">
                  {phones.map((p, i) => <div key={i}>{p}</div>)}
                </div>
              </div>
            </li>
            {/* Email */}
            <li className="flex items-start">
              <Mail size={20} className="text-white mr-3 mt-1" />
              <div>
                <div className="font-bold">{translate('contact.info.emailLabel')}</div>
                <div className="space-y-1">
                  {emails.map((e, i) => (
                    <a key={i} href={`mailto:${e}`} className="block hover:text-white">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        © {year} BNG Metalmecânica. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
