import { useContext } from 'react';
import { Factory, Droplet, Mountain, Anchor } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

const icons = {
  oil: <Droplet size={40} color="#042c70" />,
  offshore: <Anchor size={40} color="#042c70" />,
  steel: <Factory size={40} color="#f5cb0d" />,
  mining: <Mountain size={40} color="#f5cb0d" />,
};

const About = () => {
  const { translate } = useContext(LanguageContext);
  const industries = ['oil','offshore','steel','mining'] as const;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('about.title')}
          subtitle={translate('about.subtitle')}
          className="text-black"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((key) => (
            <div key={key} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{icons[key]}</div>
              <h3 className="text-xl font-bold mb-2 text-black uppercase">
                {translate(`about.industry.${key}`)}
              </h3>
              <p className="text-black">
                {translate(`about.industry.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
