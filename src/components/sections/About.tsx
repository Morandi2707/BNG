// src/components/About.tsx

import { useContext } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

import oilImg       from '../img/oil.jpg';
import offshoreImg  from '../img/offshore.jpg';
import steelImg     from '../img/steel.jpg';
import miningImg    from '../img/Mining.png';

const industryKeys = ['oil', 'offshore', 'steel', 'mining'] as const;
type IndustryKey = typeof industryKeys[number];

const images: Record<IndustryKey, string> = {
  oil:       oilImg,
  offshore:  offshoreImg,
  steel:     steelImg,
  mining:    miningImg,
};

const About: React.FC = () => {
  const { translate } = useContext(LanguageContext);

  return (
    <section id="about" className="pt-8 pb-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('about.title')}
          subtitle={translate('about.subtitle')}
          className="text-black"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {industryKeys.map((key) => (
            <div
              key={key}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-lg
                transition-shadow
                duration-300

                flex flex-col
                h-full
              "
            >
              <div className="w-full h-48 bg-gray-100 overflow-hidden">
                <img
                  src={images[key]}
                  alt={translate(`about.industry.${key}`)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-black uppercase group-hover:text-[#032F70] transition-colors">
                  {translate(`about.industry.${key}`)}
                </h3>
                <p className="text-gray-600 flex-1">
                  {translate(`about.industry.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
