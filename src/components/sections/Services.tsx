import { useContext } from 'react';
import { Layers, Cpu, Wrench, Settings } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

const icons = {
  structures: <Layers size={48} className="text-[#042c70]" />,
  boilermaking: <Wrench size={48} className="text-[#042c70]" />,
  machining: <Cpu size={48} className="text-[#042c70]" />,
  maintenance: <Settings size={48} className="text-[#042c70]" />,
};

const Services = () => {
  const { translate } = useContext(LanguageContext);
  const keys = ['structures','boilermaking','machining','maintenance'] as const;

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title={translate('services.title')}
          subtitle={translate('services.subtitle')}
          className="text-black"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key) => (
            <div key={key} className="p-4 border rounded text-center hover:shadow-lg transition">
              <div className="mb-2">{icons[key]}</div>
              <h3 className="text-2xl font-bold mb-2">{translate(`services.${key}`)}</h3>
              <p className="text-gray-600">{translate(`services.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
