// src/components/sections/Infrastructure.tsx

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useContext } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ArrowButton from '../ui/ArrowButton';
import { LanguageContext } from '../../contexts/LanguageContext';

const infraImages = [
  '/images/infra1.jpg',
  '/images/infra2.jpg',
  '/images/infra3.jpg',
  '/images/infra4.jpg',
  '/images/infra5.jpg',
  '/images/infra6.jpg',
];

type ImageItem = { id: string; src: string };

export default function Infrastructure() {
  const { language, translate } = useContext(LanguageContext);
  const [hovered, setHovered] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    if (width >= 1024) return 2;
    if (width >= 640) return 1;
    return 1;
  }

  const width = useWindowWidth();
  const perSlide = useMemo(() => getPerSlide(width), [width]);
  const images = useMemo<ImageItem[]>(
    () => infraImages.map((src, idx) => ({ id: `${idx}`, src })),
    []
  );
  const totalPages = Math.ceil(images.length / perSlide);

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

  const goToPage = (page: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section id="infrastructure" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('infrastructure.title')}
          subtitle={translate('infrastructure.subtitle')}
          className="text-black"
        />

        {/* Grandes números */}
        <div className="mt-8 mb-12 flex flex-col items-center justify-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-16">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-900">
              17 500 m²
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl mt-1">
              {language === 'pt' ? 'Área total' : 'Total Area'}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-900">
              {language === 'pt' ? '300 toneladas/mês' : '300 tons/month'}
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl mt-1">
              {language === 'pt' ? 'Capacidade de processamento' : 'Processing Capacity'}
            </p>
          </div>
        </div>

        {/* Carrossel */}
        <div className="relative group">
          <ArrowButton
            direction="left"
            onClick={() => scrollByPage('left')}
            disabled={!canScrollLeft}
          />
          <div
            ref={containerRef}
            className="relative z-0 flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 py-4 px-2"
          >
            {images.map((image) => (
              <div
                key={image.id}
                onMouseEnter={() => setHovered(image.id)}
                onMouseLeave={() => setHovered(null)}
                className="flex-shrink-0 snap-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-64 h-40"
              >
                <img
                  src={image.src}
                  alt={`${translate('infrastructure.title')} ${+image.id + 1}`}
                  className={`object-cover w-full h-full transition-transform duration-300 ${
                    hovered === image.id ? 'scale-105' : ''
                  }`}
                />
              </div>
            ))}
          </div>
          <ArrowButton
            direction="right"
            onClick={() => scrollByPage('right')}
            disabled={!canScrollRight}
          />
        </div>

        {/* Indicadores de página: removido o segundo dot */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages })
            .filter((_, i) => i !== 1) // <— remove o dot de índice 1
            .map((_, i) => {
              // precisamos recalcular a página alvo: se i>=1, então original index i+1
              const originalIndex = i >= 1 ? i + 1 : i;
              const active = originalIndex === currentPage;
              return (
                <button
                  key={originalIndex}
                  onClick={() => goToPage(originalIndex)}
                  aria-label={`Go to page ${originalIndex + 1}`}
                  className={`cursor-pointer transition-all duration-300 ease-out ${
                    active
                      ? 'w-8 h-2 bg-blue-600 rounded-full animate-pulse'
                      : 'w-4 h-1 bg-gray-300 rounded-full hover:w-6 hover:bg-gray-400'
                  }`}
                />
              );
            })}
        </div>
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
