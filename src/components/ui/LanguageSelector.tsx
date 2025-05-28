import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import BrazilFlag from '../img/brazil-flag.png';
import USAFlag from  '../img/usa.png';
import ChinaFlag from '../img/china.png';

// LanguageSelector.tsx
const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const buttons = [
    { code: 'pt', label: 'Português', flag: BrazilFlag, aria: 'Português' },
    { code: 'en', label: 'English', flag: USAFlag, aria: 'English' },
    { code: 'zh', label: '中文', flag: ChinaFlag, aria: '中文' },
  ] as const;

  return (
    <div className="flex space-x-2">
      {buttons.map(({ code, flag, aria }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={
            `w-8 h-6 rounded overflow-hidden border transition-all duration-300 ` +
            (language === code
              ? 'border-white opacity-100 scale-110'
              : 'border-transparent opacity-70 hover:opacity-100')
          }
          aria-label={aria}
        >
          <img
            src={flag}
            alt={`${aria} flag`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback caso não carregue
              (e.currentTarget as HTMLImageElement).src = flag;
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default React.memo(LanguageSelector);
