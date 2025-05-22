import { useState, useContext } from 'react';
import { Truck, X } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

// Imagens
import Yey from '../img/guindaste.webp';
import Munck from '../img/MunckBng.jpg';
import Munck10T from '../img/Munck10T.jpg';
import UnidadeMovel from '../img/UnidadeMovel.jpg';
import CarretaExtensiva from '../img/CarretaExtensiva.jpg';
import CarretaConvecional from '../img/CarretaConvecional.jpg';

const Equipment = () => {
  const { translate } = useContext(LanguageContext);
  const [selected, setSelected] = useState<string | null>(null);

  const equipment = [
    {
      categoryKey: 'equip.category.cranes',
      items: [
        { key: 'equipment.crane110t', image: Yey },
        { key: 'equipment.munck15t', image: Munck },
        { key: 'equipment.munck10t', image: Munck10T },
      ],
    },
    {
      categoryKey: 'equip.category.transport',
      items: [
        { key: 'equipment.unidadeMovel', image: UnidadeMovel },
        { key: 'equipment.carretaExtensiva', image: CarretaExtensiva },
        { key: 'equipment.carretaConvencional', image: CarretaConvecional },
        {
          key: 'equipment.cavalosMecanicos',
          image: 'https://images.pexels.com/photos/2552086/pexels-photo-2552086.jpeg',
        },
        {
          key: 'equipment.pranchas',
          image: 'https://images.pexels.com/photos/2538162/pexels-photo-2538162.jpeg',
        },
      ],
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={translate('equip.title')}
          className="text-black uppercase mb-8"
        />
        {equipment.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Truck size={28} className="text-[#f5cb0d] mr-2" />
              {translate(group.categoryKey)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div
                    className="h-56 cursor-pointer overflow-hidden"
                    onClick={() => setSelected(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={translate(item.key)}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold">{translate(item.key)}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
    </section>
  );
};

export default Equipment;
