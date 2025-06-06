// src/components/Mission.tsx
import { useContext } from 'react';
import {
  Target,
  Eye,
  Award,
  Shield,
  Users,
  Leaf,
  Lightbulb,
  User,
  FileText,
  DownloadCloud,
  Handshake,
  ThumbsUp
} from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';
import policyPdf from '../files/politica-sgi.pdf'

const iconsValue = {
  commitment:  <Target size={28} className="text-[#f5cb0d]" />,
  ethics:      <Award size={28} className="text-[#f5cb0d]" />,
  safety:      <Shield size={28} className="text-[#f5cb0d]" />,
  human:       <Users size={28} className="text-[#f5cb0d]" />,
  environment: <Leaf size={28} className="text-[#f5cb0d]" />,
  innovation:  <Lightbulb size={28} className="text-[#f5cb0d]" />,
  cliente:     <User size={28} className="text-[#f5cb0d]" />,
  negocio:     <Handshake size={28} className="text-[#f5cb0d]" />,
  qualidade:    <ThumbsUp size={28} className="text-[#f5cb0d]" />,
};

const Mission = () => {
  const { translate } = useContext(LanguageContext);
  const values = [
    'commitment',
    'ethics',
    'safety',
    'human',
    'environment',
    'innovation',
    'cliente',
    'negocio',
    'qualidade'
  ] as const;

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('mission.title')}
          className="text-black uppercase mb-12"
        />

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          {/* Missão */}
          <div className="flex items-center mb-4">
            <Target size={32} className="text-[#f5cb0d] mr-4" />
            <h3 className="text-2xl font-bold">
              {translate('mission.mission')}
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            {translate('mission.mission.desc')}
          </p>

          {/* Visão */}
          <div className="flex items-center mb-4">
            <Eye size={32} className="text-[#f5cb0d] mr-4" />
            <h3 className="text-2xl font-bold">
              {translate('mission.vision')}
            </h3>
          </div>
          <p className="text-gray-600">
            {translate('mission.vision.desc')}
          </p>

          {/* Política do SGI */}
          <div className="flex items-center mt-8 mb-4">
            <FileText size={32} className="text-[#f5cb0d] mr-4" />
            <h3 className="text-2xl font-bold">
              {translate('mission.policyTitle')}
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            {translate('mission.policyDesc')}
          </p>
          <a
  href={policyPdf}
  download="politica-sgi.pdf"
  className="inline-flex items-center px-4 py-2 bg-[#f5cb0d] text-white font-medium rounded hover:bg-[#d4ab09] transition"
>
  <DownloadCloud size={20} className="mr-2" />
  {translate('mission.policyButton')}
</a>

        </div>

        <SectionTitle
          title={translate('values.title')}
          className="text-black uppercase mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((key) => (
            <div
              key={key}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                {iconsValue[key]}
                <h4 className="ml-2 font-semibold">
                  {translate(`values.${key}`)}
                </h4>
              </div>
              <p className="text-gray-600">
                {translate(`values.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mission;
