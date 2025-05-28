import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import logoBNG from '../img/LOGO-BNG-SEM-NOME.png';
import { LanguageContext } from '../../contexts/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { translate } = useContext(LanguageContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'certifications', href: '#certifications' },
    { key: 'equipment', href: '#equipment' },
    { key: 'clients', href: '#clients' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#042c70] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={logoBNG} alt="BNG Metalmecânica" className="h-10 md:h-12" />

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm"
              >
                {translate(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Seleção de idioma desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
          </div>

          {/* Botão de menu mobile */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#042c70] absolute top-full left-0 right-0 shadow-xl">
          <Container>
            <div className="py-2 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-[#f5cb0d] transition-colors px-4 py-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translate(`nav.${item.key}`)}
                </a>
              ))}

              {/* Seleção de idioma mobile */}
              <div className="flex justify-center py-2">
                <LanguageSelector />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
