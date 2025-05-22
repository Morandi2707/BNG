import { useContext } from 'react';
import { Target, Eye, Award, Shield, Users, Leaf, Lightbulb } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

const iconsValue = {
  commitment: <Target size={28} className="text-[#f5cb0d]" />,
  ethics:     <Award size={28} className="text-[#f5cb0d]" />,
  safety:     <Shield size={28} className="text-[#f5cb0d]" />,
  human:      <Users size={28} className="text-[#f5cb0d]" />,
  environment:<Leaf size={28} className="text-[#f5cb0d]" />,
  innovation: <Lightbulb size={28} className="text-[#f5cb0d]" />,
};

const Mission = () => {
  const { translate } = useContext(LanguageContext);
  const values = ['commitment','ethics','safety','human','environment','innovation'] as const;

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle title={translate('mission.title')} className="text-black uppercase mb-12" />
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-4">
            <Target size={32} className="text-[#f5cb0d] mr-4" />
            <h3 className="text-2xl font-bold">{translate('mission.mission')}</h3>
          </div>
          <p className="text-gray-600 mb-6">{translate('mission.mission.desc')}</p>
          <div className="flex items-center">
            <Eye size={32} className="text-[#f5cb0d] mr-4" />
            <h3 className="text-2xl font-bold">{translate('mission.vision')}</h3>
          </div>
          <p className="text-gray-600">{translate('mission.vision.desc')}</p>
        </div>

        <SectionTitle title={translate('values.title')} className="text-black uppercase mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((key) => (
            <div key={key} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-3">
                {iconsValue[key]}
                <h4 className="ml-2 font-semibold">{translate(`values.${key}`)}</h4>
              </div>
              <p className="text-gray-600">{translate(`values.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mission;
