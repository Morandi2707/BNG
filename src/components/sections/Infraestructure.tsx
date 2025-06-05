import React, { useState, useEffect, useRef, useContext } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

// Importe suas 5 imagens
import SedeBng from '../img/SedeBng.jpg';
import Infra2 from '../img/FeuRosa.jpg';
import Infra3 from '../img/Infra.jpg';
import Infra4 from '../img/Portos.jpg';
import Infra5 from '../img/plasma.jpg';
import Infra6 from '../img/adm.webp';
import Pintura from '../img/Pintura.jpg'; 
import Infra7 from '../img/Porto.jpg';
import Infra8 from '../img/EmbarcaçãoBobina.jpg';
import Infra9 from '../img/Porturaio.jpg';

// Hook: detecta quando o elemento entra na viewport
function useOnScreen<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5, ...options }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options]);

  return { ref, isVisible };
}

// Contador animado em azul-900
const CountUpOnView: React.FC<{ end: number; suffix: string }> = ({ end, suffix }) => {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start: number | null = null;
    const duration = 1500;
    const step = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-5xl font-extrabold text-blue-900">
      {value.toLocaleString()}
      <span className="text-xl">{suffix}</span>
    </div>
  );
};

export default function Infrastructure() {
  const { translate } = useContext(LanguageContext);
  const [hoveredInfra, setHoveredInfra] = useState<string | null>(null);
  const [hoveredPort, setHoveredPort] = useState<string | null>(null);

  const infrastructureImages = [SedeBng, Infra2, Infra6, Infra5, Pintura];
  const portAreaImages = [Infra3, Infra4, Infra7, Infra9, Infra8];

  return (
    <>
      {/* Seção de Infraestrutura */}
      <section id="infrastructure" className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            title={translate('infrastructure.title')}
            className="mb-6 text-gray-800"
          />

          {/* Texto explicativo aprimorado */}
          <div className="max-w-2xl mx-auto text-center text-gray-700 text-lg mb-12">
            <p>{translate('infrastructure.description')}</p>
          </div>

          {/* Números animados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <CountUpOnView end={70000} suffix="m²" />
              <p className="mt-2 text-gray-600 uppercase tracking-wide">
                {translate('infrastructure.totalAreaLabel')}
              </p>
            </div>
            <div>
              <CountUpOnView end={36000} suffix="m²" />
              <p className="mt-2 text-gray-600 uppercase tracking-wide">
                {translate('infrastructure.builtAreaLabel')}
              </p>
            </div>
            <div>
              <CountUpOnView end={600} suffix={translate('infrastructure.capacitySuffix')} />
              <p className="mt-2 text-gray-600 uppercase tracking-wide">
                {translate('infrastructure.processingCapacityLabel')}
              </p>
            </div>
          </div>

          {/* Galeria de imagens da Infraestrutura */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {infrastructureImages.map((src, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredInfra(`${idx}`)}
                onMouseLeave={() => setHoveredInfra(null)}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow h-48"
              >
                <img
                  src={src}
                  alt={`${translate('infrastructure.title')} ${idx + 1}`}
                  className={`w-full h-full object-cover transform duration-300 ${
                    hoveredInfra === `${idx}` ? 'scale-105' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Seção de Área Portuária */}
      <section id="areaportuaria" className="py-20 bg-white border-t border-gray-200">
        <Container>
          <SectionTitle
            title={translate('infrastructure.portAreaTitle')}
            className="mb-6 text-gray-800"
          />

          <div className="max-w-2xl mx-auto text-center text-gray-700 text-lg mb-12">
            <p>{translate('infrastructure.desc2')}</p>
          </div>

          {/* Galeria de imagens da Área Portuária */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {portAreaImages.map((src, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredPort(`${idx}`)}
                onMouseLeave={() => setHoveredPort(null)}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow h-48"
              >
                <img
                  src={src}
                  alt={`${translate('infrastructure.portAreaTitle')} ${idx + 1}`}
                  className={`w-full h-full object-cover transform duration-300 ${
                    hoveredPort === `${idx}` ? 'scale-105' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
