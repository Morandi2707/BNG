import { useContext } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

// Importe suas imagens (confira nomes exatos, incluindo case-sensitive)
import estruturaImg   from '../img/EstruturaMetalicas.jpg';
import caldeirariaImg from '../img/Bobinas.jpg';
import usinagemImg    from '../img/Usinagem.jpg';
import manutencaoImg  from '../img/Manutencao.jpg';

const images: Record<string, string> = {
  structures:  estruturaImg,
  caldeiraria: caldeirariaImg,
  machining:   usinagemImg,
  maintenance: manutencaoImg,
};

const Services = () => {
  const { translate } = useContext(LanguageContext);
  const keys = ['structures', 'caldeiraria', 'machining', 'maintenance'] as const;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('services.title')}
          subtitle={translate('services.subtitle')}
          className="text-gray-800"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {keys.map((key) => (
            <div
              key={key}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Imagem com altura fixa para uniformizar */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden">
                <img
                  src={images[key]}
                  alt={translate(`services.${key}`)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#032F70] transition-colors">
                  {translate(`services.${key}`)}
                </h3>
                <p className="text-gray-600 flex-1">
                  {translate(`services.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
