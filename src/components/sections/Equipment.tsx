// src/components/Equipment.tsx

import {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { Truck, X } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ArrowButton from '../ui/ArrowButton';
import { LanguageContext } from '../../contexts/LanguageContext';

// Imagens
import Yey from '../img/guindaste.jpg';
import Munck from '../img/MunckBng.jpg';
import Munck10T from '../img/Munck10T.jpg';
import UnidadeMovel from '../img/UnidadeMovel.jpg';
import CarretaExtensiva from '../img/CarretaExtensiva.jpg';
import CarretaConvecional from '../img/CarretaConvecional.jpg';
import pranchas from '../img/pranchas.jpg';
import CavalosMecanicos from '../img/CavaloMecanicos.jpg';

function useWindowWidth() {
  const [w, setW] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return w;
}

function getPerSlide(width: number) {
  if (width >= 1536) return 4;
  if (width >= 1280) return 3;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  if (width >= 640) return 2;
  return 1;
}

export default function Equipment() {
  const { translate } = useContext(LanguageContext);
  const [selected, setSelected] = useState<string | null>(null);

  // Apenas o grupo de transportes em um array plano para o carousel:
  const transportItems = useMemo(
    () => [
      { key: 'equipment.unidadeMovel', image: UnidadeMovel },
      { key: 'equipment.carretaExtensiva', image: CarretaExtensiva },
      { key: 'equipment.carretaConvencional', image: CarretaConvecional },
      { key: 'equipment.cavalosMecanicos', image: CavalosMecanicos },
      { key: 'equipment.pranchas', image: pranchas },
    ],
    []
  );

  const width = useWindowWidth();
  const perSlide = useMemo(() => getPerSlide(width), [width]);
  const totalPages = Math.ceil(transportItems.length / perSlide);

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth + 10 < scrollWidth);
    setCurrentPage(Math.round(scrollLeft / clientWidth));
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [width, updateScrollState]);

  const scrollByPage = (dir: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({
      left: el.clientWidth * (dir === 'left' ? -1 : 1),
      behavior: 'smooth',
    });
  };

  return (
    <section id="equipment" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('equip.title')}
          className="text-black uppercase mb-8"
        />

        {/* Grupo de guindastes e Munck em grid com cartões padronizados */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Truck size={28} className="text-[#f5cb0d] mr-2" />
            {translate('equip.category.cranes')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: 'equipment.crane110t', image: Yey },
              { key: 'equipment.munck15t', image: Munck },
              { key: 'equipment.munck10t', image: Munck10T },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div
                  className="h-56 w-full cursor-pointer overflow-hidden"
                  onClick={() => setSelected(item.image)}
                >
                  <img
                    src={item.image}
                    alt={translate(item.key)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">{translate(item.key)}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel de transportes com cartões no mesmo estilo */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Truck size={28} className="text-[#f5cb0d] mr-2" />
            {translate('equip.category.transport')}
          </h3>

          <div className="relative group">
            <ArrowButton
              direction="left"
              onClick={() => scrollByPage('left')}
              disabled={!canScrollLeft}
            />
            <div
              ref={containerRef}
              className="relative z-0 flex overflow-x-auto hide-scrollbar scroll-pl-6 snap-x snap-mandatory gap-4 py-4 px-2"
            >
              {transportItems.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 snap-center px-3">
                  {/* Cartão padronizado idêntico ao de cima */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer w-80">
                    <div
                      className="h-56 w-full overflow-hidden"
                      onClick={() => setSelected(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={translate(item.key)}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-center">
                        {translate(item.key)}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ArrowButton
              direction="right"
              onClick={() => scrollByPage('right')}
              disabled={!canScrollRight}
            />
          </div>
        </div>

        {/* Lightbox para visualização em tela cheia */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setSelected(null)}
            >
              <X size={32} className="text-[#f5cb0d]" />
            </button>
            <img
              src={selected}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </Container>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
