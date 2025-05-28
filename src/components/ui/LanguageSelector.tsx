import { useState, useContext, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { LanguageContext } from '../../contexts/LanguageContext';
import BrazilFlag from '../img/brazil-flag.png';
import USAFlag from '../img/usa.png';
import ChinaFlag from '../img/china.png';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: 'pt',
      flag: BrazilFlag,
      alt: 'Bandeira do Brasil',
      label: 'Português',
      shortLabel: 'PT'
    },
    {
      code: 'en',
      flag: USAFlag,
      alt: 'USA Flag',
      label: 'English',
      shortLabel: 'EN'
    },
    {
      code: 'zh',
      flag: ChinaFlag,
      alt: 'China Flag',
      label: '中文',
      shortLabel: 'ZH'
    }
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 transition-all duration-300 group min-w-[80px]"
        aria-label="Selecionar idioma"
      >
        <div className="w-6 h-4 rounded overflow-hidden border border-white/20">
          <img 
            src={currentLang.flag} 
            alt={currentLang.alt} 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white font-medium text-sm hidden sm:inline">
          {currentLang.shortLabel}
        </span>
        <ChevronDown 
          size={14} 
          className={`text-white/70 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className={`
          absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 
          overflow-hidden z-50 min-w-[160px] animate-in fade-in slide-in-from-top-2 duration-200
        `}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-150
                ${language === lang.code 
                  ? 'bg-[#042c70] text-white' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-[#042c70]'
                }
              `}
            >
              <div className={`
                w-7 h-5 rounded overflow-hidden border-2 transition-all duration-200
                ${language === lang.code 
                  ? 'border-[#f5cb0d] shadow-sm' 
                  : 'border-gray-200'
                }
              `}>
                <img 
                  src={lang.flag} 
                  alt={lang.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <span className="font-medium text-sm">{lang.label}</span>
                <span className={`
                  text-xs uppercase tracking-wide
                  ${language === lang.code ? 'text-white/70' : 'text-gray-500'}
                `}>
                  {lang.shortLabel}
                </span>
              </div>
              
              {language === lang.code && (
                <div className="w-2 h-2 bg-[#f5cb0d] rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;