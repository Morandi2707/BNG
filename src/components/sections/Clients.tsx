import {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  memo
} from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ArrowButton from '../ui/ArrowButton';
import { LanguageContext } from '../../contexts/LanguageContext';

// logos
import aliseoLogo from '../img/Aliseo.png';
import technipLogo from '../img/TechnipFMC.webp';
import bakerLogo from '../img/Baker.png';
import prysLogo from '../img/Prysmian.png';
import ocyanLogo from '../img/Ocyan.png';
import subsea7Logo from '../img/Subsea7.png';
import arcLogo from '../img/ArcelorMittal.svg';
import valeLogo from '../img/Vale.png';
import simecLogo from '../img/Simec.png';
import bracellLogo from '../img/Bracell.png';
import sylvamoLogo from '../img/Sylvamo.png';
import suzanoLogo from '../img/Suzano.png';
import petrobrasLogo from '../img/Petrobras.png';

type CategoryKey = 'all' | 'oilgas' | 'offshore' | 'steel' | 'mining' | 'pulp';
interface Client { id: string; name: string; logo: string; category: CategoryKey; href?: string; }

const allClients: Client[] = [
  /* ... seus 13 clientes ... */
   { id:'1', name:'Aliseo', logo:aliseoLogo, category:'oilgas', href:'https://www.aliseosa.com.br/sobre/' },
  { id:'2', name:'TechnipFMC', logo:technipLogo, category:'oilgas', href:'https://www.technipfmc.com' },
  { id:'3', name:'Baker Hughes', logo:bakerLogo, category:'oilgas', href:'https://www.bakerhughes.com' },
  { id:'4', name:'Prysmian', logo:prysLogo, category:'offshore', href:'https://www.prysmiangroup.com' },
  { id:'5', name:'Ocyan', logo:ocyanLogo, category:'offshore', href:'https://www.ocyan.com.br' },
  { id:'6', name:'Subsea7', logo:subsea7Logo, category:'offshore', href:'https://www.subsea7.com' },
  { id:'7', name:'Arcelormittal', logo:arcLogo, category:'steel', href:'https://corporate.arcelormittal.com' },
  { id:'8', name:'Vale', logo:valeLogo, category:'mining', href:'https://www.vale.com' },
  { id:'9', name:'Grupo Simec', logo:simecLogo, category:'steel', href:'https://www.simec.com.br' },
  { id:'10', name:'Bracell', logo:bracellLogo, category:'pulp', href:'https://www.bracell.com' },
  { id:'11', name:'Sylvamo', logo:sylvamoLogo, category:'pulp', href:'https://www.sylvamo.com' },
  { id:'12', name:'Suzano', logo:suzanoLogo, category:'pulp', href:'https://www.suzano.com.br' },
  { id:'13', name:'Petrobras', logo:petrobrasLogo, category:'oilgas', href:'https://petrobras.com.br' },
];

const categoryKeys: CategoryKey[] = ['all','oilgas','offshore','steel','mining','pulp'];
const categoryColors = {
  all: 'from-blue-500 to-purple-500',
  oilgas: 'from-yellow-500 to-orange-600',
  offshore: 'from-teal-400 to-blue-500',
  steel: 'from-gray-500 to-gray-700',
  mining: 'from-amber-500 to-yellow-600',
  pulp: 'from-green-400 to-emerald-500'
};

// hook para obter largura da janela
function useWindowWidth() {
  const [w, setW] = useState(typeof window === 'undefined' ? 0 : window.innerWidth);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return w;
}

// define quantos cards por página
function getPerSlide(width: number) {
  if (width >= 1536) return 6;
  if (width >= 1280) return 5;
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  if (width >= 640) return 2;
  return 1;
}

const ClientCard = memo(function _ClientCard({
  client, isHovered, onHover, onLeave
}: {
  client: Client;
  isHovered: string | null;
  onHover(id: string): void;
  onLeave(): void;
}) {
  const hov = isHovered === client.id;
  return (
    <div
      onMouseEnter={() => onHover(client.id)}
      onMouseLeave={onLeave}
      className="flex-shrink-0 snap-center px-3"
    >
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative flex items-center justify-center bg-white rounded-xl p-6 shadow-md
          transition-transform duration-300 ease-out
          ${hov ? 'scale-110 shadow-xl' : 'hover:scale-105'}
        `}
      >
        <img
          src={client.logo}
          alt={client.name}
          className={`max-h-20 object-contain transition-filter duration-300
            ${hov ? 'filter-none' : 'filter grayscale hover:filter-none'}
          `}
        />
        <div className={`
          absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded
          opacity-0 pointer-events-none transition-opacity duration-200
          ${hov ? 'opacity-90' : ''}
        `}>
          {client.name}
        </div>
      </a>
    </div>
  );
});

export default function Clients() {
  const { translate } = useContext(LanguageContext);
  const [filter, setFilter] = useState<CategoryKey>('all');
  const [hovered, setHovered] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const width = useWindowWidth();
  const perSlide = useMemo(() => getPerSlide(width), [width]);

  const filtered = useMemo(() =>
    filter === 'all'
      ? allClients
      : allClients.filter(c => c.category === filter),
  [filter]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // atualiza setas e página ativa
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
  }, [filtered, width, updateScrollState]);

  const scrollByPage = (dir: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * (dir === 'left' ? -1 : 1), behavior: 'smooth' });
  };

  const goToPage = (page: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(filtered.length / perSlide);
  // Remove o último dot
  const indicatorCount = totalPages > 1 ? totalPages - 1 : 0;

  return (
    <section id='clients' className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Container>
        <SectionTitle
          title={translate('clients.title')}
          subtitle={translate('clients.subtitle')}
          className="text-center mb-12"
        />

        {/* filtros */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categoryKeys.map(key => (
            <button
              key={key}
              onClick={() => { setFilter(key); setCurrentPage(0); }}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition
                ${filter === key
                  ? `bg-gradient-to-r ${categoryColors[key]} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {translate(`clients.category.${key}`)}
            </button>
          ))}
        </div>

        <div className="relative group">
          {/* seta voltar */}
          <ArrowButton
            direction="left"
            onClick={() => scrollByPage('left')}
            disabled={!canScrollLeft}
          />

          {/* container scroll-snap */}
          <div
            ref={containerRef}
            className="relative z-0 flex overflow-x-auto hide-scrollbar scroll-pl-6 snap-x snap-mandatory gap-4 py-4 px-2"
          >
            {filtered.map(client => (
              <ClientCard
                key={client.id}
                client={client}
                isHovered={hovered}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>

          {/* seta avançar */}
          <ArrowButton
            direction="right"
            onClick={() => scrollByPage('right')}
            disabled={!canScrollRight}
          />
        </div>

        {/* indicadores clicáveis, sem o último dot */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: indicatorCount }).map((_, i) => {
            const active = i === currentPage;
            return (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`
                  transition-all duration-300 ease-out
                  ${active
                    ? 'w-8 h-2 bg-blue-600 rounded-full animate-pulse'
                    : 'w-4 h-1 bg-gray-300 rounded-full hover:w-6'}
                `}
              />
            );
          })}
        </div>
      </Container>

      {/* CSS scoped para esconder scrollbar */}
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
