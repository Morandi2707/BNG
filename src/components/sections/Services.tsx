import React, { useState, useContext, useEffect } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

// Importe suas imagens (confira nomes exatos, incluindo case-sensitive)
import caldeirariaImg from '../img/Bobinas.jpg';
import estruturaImg   from '../img/EstruturaMetalicas.jpg';
import usinagemImg    from '../img/Usinagem.jpg';
import manutencaoImg  from '../img/Manutencao.jpg';

const images: Record<string, string> = {
  caldeiraria: caldeirariaImg,
  structures:  estruturaImg,
  machining:   usinagemImg,
  maintenance: manutencaoImg,
};

const Services = () => {
  const { translate } = useContext(LanguageContext);
  const keys = ['caldeiraria', 'machining', 'maintenance', 'structures'] as const;
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'modal-backdrop') {
      closeModal();
    }
  };

  const openModal = (key: string) => {
    setActiveKey(key);
    requestAnimationFrame(() => setIsModalVisible(true));
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setActiveKey(null), 200);
  };

  // Prevenir scroll do body quando modal estiver aberto
  useEffect(() => {
    if (activeKey) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeKey]);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('services.title')}
          subtitle={translate('services.subtitle')}
          className="text-gray-800 text-center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {keys.map((key) => (
            <div
              key={key}
              className="w-80 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Imagem */}
              <div className="h-48 w-full overflow-hidden rounded-t-xl">
                <img
                  src={images[key]}
                  alt={translate(`services.${key}`)}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {translate(`services.${key}`)}
                </h3>
                <p className="text-gray-600 mb-6 text-sm flex-grow">
                  {translate(`services.${key}.shortDesc`)}
                </p>
                <button
                  onClick={() => openModal(key)}
                  className="mt-auto w-full py-2 bg-[#032F70] text-white rounded-md hover:bg-[#021F50] transition-colors duration-200 text-sm font-medium"
                >
                  {translate('services.seeMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeKey && (
          <div
            id="modal-backdrop"
            onClick={handleBackdropClick}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-200 ${
              isModalVisible ? 'bg-opacity-50' : 'bg-opacity-0'
            }`}
          >
            <div 
              className={`bg-white rounded-xl w-11/12 md:w-3/4 lg:w-1/2 shadow-lg overflow-hidden transition-all duration-200 transform ${
                isModalVisible 
                  ? 'scale-100 opacity-100' 
                  : 'scale-95 opacity-0'
              }`}
            >
              <div className="relative h-56 w-full">
                <img
                  src={images[activeKey]}
                  alt={translate(`services.${activeKey}`)}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-[#032F70] bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  {translate(`services.${activeKey}`)}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {translate(`services.${activeKey}.fullDesc`)}
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-[#032F70] text-white rounded-md hover:bg-[#021F50] transition-colors duration-200"
                  >
                    {translate('services.close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Services;