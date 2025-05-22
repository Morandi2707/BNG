import { useState, useContext } from 'react';
import { Badge, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

const Certifications = () => {
  const { translate } = useContext(LanguageContext);

  const certs = [
    {
      key: 'iso45001',
      titleKey: 'cert.iso45001.title',
      descKey:  'cert.iso45001.desc',
      benefits: [
        'cert.iso45001.benefit1',
        'cert.iso45001.benefit2',
        'cert.iso45001.benefit3',
        'cert.iso45001.benefit4',
      ],
      color: '#f5cb0d'
    },
    {
      key: 'sgqf',
      titleKey: 'cert.sgqf.title',
      descKey:  'cert.sgqf.desc',
      benefits: [
        'cert.sgqf.benefit1',
        'cert.sgqf.benefit2',
        'cert.sgqf.benefit3',
        'cert.sgqf.benefit4',
      ],
      color: '#042c70'
    },
    {
      key: 'iso9001',
      titleKey: 'cert.iso9001.title',
      descKey:  'cert.iso9001.desc',
      benefits: [
        'cert.iso9001.benefit1',
        'cert.iso9001.benefit2',
        'cert.iso9001.benefit3',
        'cert.iso9001.benefit4',
      ],
      color: '#f5cb0d'
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
          className="text-black  mb-8"
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
            <div className="p-8 text-center lg:text-left">
              <Badge size={64} color={C.color} className="mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase">
                {translate(C.titleKey)}
              </h3>
              <p className="text-gray-600 mb-6">
                {translate(C.descKey)}
              </p>
              <ul className="space-y-2">
                {C.benefits.map((bKey, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={18} color={C.color} className="mr-2 mt-1" />
                    <span>{translate(bKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#042c70] hidden lg:flex items-center justify-center p-12">
              <div className="text-center text-white">
                <Badge size={48} color="#f5cb0d" />
                <h3 className="text-2xl font-bold mb-4 uppercase">
                  {translate('cert.title')}
                </h3>
                <p className="text-gray-300">
                  {translate('cert.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
