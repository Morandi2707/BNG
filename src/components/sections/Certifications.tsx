// src/components/Certifications.tsx

import { useState, useContext } from 'react';
import { Medal, CheckCircle, File, FileCog } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

const Certifications = () => {
  const { translate } = useContext(LanguageContext);

  const certs = [
    {
      key: 'iso9001',
      titleKey: 'cert.iso9001.title',
      descKey: 'cert.iso9001.desc',
      benefits: [
        'cert.iso9001.benefit1',
        'cert.iso9001.benefit2',
        'cert.iso9001.benefit3',
        'cert.iso9001.benefit4',
      ],
      technical: [
        'cert.iso9001.tech1',
        'cert.iso9001.tech2',
        'cert.iso9001.tech3',
        'cert.iso9001.tech4',
      ],
      color: '#f5cb0d',
    },
    {
      key: 'iso45001',
      titleKey: 'cert.iso45001.title',
      descKey: 'cert.iso45001.desc',
      benefits: [
        'cert.iso45001.benefit1',
        'cert.iso45001.benefit2',
        'cert.iso45001.benefit3',
        'cert.iso45001.benefit4',
      ],
      technical: [
        'cert.iso45001.tech1',
        'cert.iso45001.tech2',
        'cert.iso45001.tech3',
        'cert.iso45001.tech4',
      ],
      color: '#f5cb0d',
    },
    {
      key: 'sgqf',
      titleKey: 'cert.sgqf.title',
      descKey: 'cert.sgqf.desc',
      benefits: [
        'cert.sgqf.benefit1',
        'cert.sgqf.benefit2',
        'cert.sgqf.benefit3',
        'cert.sgqf.benefit4',
      ],
      technical: [
        'cert.sgqf.tech1',
        'cert.sgqf.tech2',
        'cert.sgqf.tech3',
        'cert.sgqf.tech4',
      ],
      color: '#f5cb0d',
    },
  ];

  const [active, setActive] = useState(0);
  const C = certs[active];

  return (
    <section id="certifications" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title={translate('cert.title')}
          subtitle={translate('cert.subtitle')}
          className="text-black mb-8 text-left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {certs.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-6 rounded-lg transition-all duration-300 text-center ${
                active === i
                  ? 'bg-[#042c70] text-white shadow-lg scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-black'
              }`}
            >
              <h3 className="text-xl font-bold uppercase">
                {translate(c.titleKey)}
              </h3>
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Lado esquerdo: Especificações técnicas */}
            <div className="p-8 text-left">
              <FileCog size={64} color={C.color} className="mb-4" />
              <ul className="space-y-2">
                {C.technical.map((tKey, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle
                      size={18}
                      color={C.color}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <span>{translate(tKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lado direito: Visão geral & Benefícios */}
            <div className="bg-[#042c70] flex flex-col items-start justify-center p-12">
              <Medal size={48} color="#f5cb0d" className="mb-4" />
            
              <p className="text-gray-300 mb-6 text-left">
                {translate(C.descKey)}
              </p>
              <ul className="space-y-2 text-left">
                {C.benefits.map((bKey, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle
                      size={18}
                      color="#f5cb0d"
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <span className="text-white">{translate(bKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
