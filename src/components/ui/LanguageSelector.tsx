import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import BrazilFlag from '../img/brazil-flag.svg';
import USAFlag from '../img/usa.png';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={`w-8 h-6 rounded overflow-hidden border ${language === 'pt' ? 'border-white opacity-100 scale-110' : 'border-transparent opacity-70 hover:opacity-100'} transition-all duration-300`}
        aria-label="Português"
      >
        <img 
          src={BrazilFlag} 
          alt="Bandeira do Brasil" 
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`w-8 h-6 rounded overflow-hidden border ${language === 'en' ? 'border-white opacity-100 scale-110' : 'border-transparent opacity-70 hover:opacity-100'} transition-all duration-300`}
        aria-label="English"
      >
        <img 
          src={USAFlag} 
          alt="USA Flag" 
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;