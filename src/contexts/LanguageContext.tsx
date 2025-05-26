import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Translations = {
  [key: string]: {
    pt: string;
    en: string;
  };
};

export const TRANSLATIONS: Translations = {
  // Navegação / Header
  'nav.home':           { pt: 'Home',              en: 'Home' },
  'nav.about':          { pt: 'Sobre',             en: 'About' },
  'nav.services':       { pt: 'Serviços',          en: 'Services' },
  'nav.certifications': { pt: 'Certificações',     en: 'Certifications' },
  'nav.equipment':      { pt: 'Equipamentos',      en: 'Equipment' },
  'nav.clients':        { pt: 'Clientes',          en: 'Clients' },
  'nav.contact':        { pt: 'Contato',           en: 'Contact' },
  'button.contact':     { pt: 'Fale Conosco',      en: 'Contact Us' },

  // Hero
  'hero.title':           { pt: 'BNG METALMECÂNICA', en: 'BNG METALMECÂNICA' },
  'hero.subtitle':        { pt: 'Soluções metalmecânicas de alta qualidade para as maiores empresas do Brasil.', en: 'High-quality metalworking solutions for the largest companies in Brazil.' },
  'hero.button.services': { pt: 'Conheça Nossos Serviços', en: 'Discover Our Services' },
  'hero.button.contact':  { pt: 'Entre em Contato',         en: 'Contact Us' },

  // About
  'about.title':            { pt: 'SOBRE A BNG',       en: 'ABOUT BNG' },
  'about.subtitle':         { pt: 'Fundada em 1998,      Sediada no município da Serra – ES. Orientada à fabricação, montagem e serviços industriais, incluindo usinagem de peças, componentes e usinagem de campo. Atua nos setores de siderurgia, óleo e gás, mineração e estaleiros, sempre prezando por produtos e serviços de qualidade.', en: 'Founded in 1998, Headquartered in Serra, Espírito Santo – Brazil. Specialized in manufacturing, assembly, and industrial services, including machining of parts, components, and on-site machining. Serves the steel, oil & gas, mining, and shipyard sectors, always committed to delivering high-quality products and services.' },
  'about.industry.oil':           { pt: 'ÓLEO E GÁS',       en: 'OIL & GAS' },
  'about.industry.oil.desc':      { pt: 'Serviços especializados para o setor de óleo e gás, com foco em segurança e qualidade.', en: 'Specialized services for the oil and gas sector, focusing on safety and quality.' },
  'about.industry.offshore':      { pt: 'ESTALEIROS & OFFSHORE', en: 'SHIPYARDS & OFFSHORE' },
  'about.industry.offshore.desc': { pt: 'Estruturas e componentes para aplicações marítimas e plataformas offshore.', en: 'Structures and components for marine applications and offshore platforms.' },
  'about.industry.steel':         { pt: 'SIDERURGIA',       en: 'STEEL' },
  'about.industry.steel.desc':    { pt: 'Atuação em indústrias siderúrgicas com soluções completas para equipamentos e estruturas.', en: 'Operations in steel industries with complete solutions for equipment and structures.' },
  'about.industry.mining':        { pt: 'MINERAÇÃO',        en: 'MINING' },
  'about.industry.mining.desc':   { pt: 'Soluções resistentes e duráveis para o ambiente exigente da mineração.', en: 'Resistant and durable solutions for the demanding mining environment.' },

  // Services
  'services.title':         { pt: 'NOSSOS SERVIÇOS',   en: 'OUR SERVICES' },
  'services.subtitle':      { pt: 'Oferecemos soluções completas em metalurgia para diversos setores industriais, com equipes qualificadas e equipamentos modernos.', en: 'We offer complete metallurgy solutions for various industrial sectors, with qualified teams and modern equipment.' },
  'services.structures':         { pt: 'Estruturas Metálicas', en: 'Metal Structures' },
  'services.structures.desc':    { pt: 'Fabricação e montagem de estruturas metálicas para diversos setores industriais, com projetos personalizados e alta resistência.', en: 'Manufacturing and assembly of metal structures for various industrial sectors, with customized projects and high resistance.' },
  'services.caldeiraria':       { pt: 'Caldeiraria',       en: 'Boilermaking' },
  'services.caldeiraria.desc':  { pt: 'Serviços de caldeiraria pesada e leve, incluindo fabricação de tanques, vasos de pressão, silos e outros equipamentos industriais.', en: 'Heavy and light boilermaking services, including manufacturing of tanks, pressure vessels, silos and other industrial equipment.' },
  'services.machining':          { pt: 'Usinagem',          en: 'Machining' },
  'services.machining.desc':     { pt: 'Usinagem de peças e componentes com precisão, utilizando equipamentos modernos e tecnologia avançada para garantir a qualidade.', en: 'Precision machining of parts and components, using modern equipment and advanced technology to ensure quality.' },
  'services.maintenance':        { pt: 'Montagem e Manutenção', en: 'Assembly & Maintenance' },
  'services.maintenance.desc':   { pt: 'Serviços completos de montagem e manutenção industrial, com equipes especializadas para atendimento eficiente e seguro.', en: 'Complete industrial assembly and maintenance services, with specialized teams for efficient and safe service.' },

  // Mission & Values
  'mission.title':          { pt: 'NOSSA MISSÃO',      en: 'OUR MISSION' },
  'mission.mission':        { pt: 'MISSÃO',            en: 'MISSION' },
  'mission.mission.desc':   { pt: 'Garantir a disponibilidade e performance dos equipamentos dos nossos clientes, buscando a fidelização através de serviços de qualidade e atendimento diferenciado, com equipes qualificadas e comprometidas com a segurança, meio ambiente e resultados.', en: 'Ensure the availability and performance of our customers\' equipment, seeking loyalty through quality services and differentiated service, with qualified teams committed to safety, environment and results.' },
  'mission.vision':         { pt: 'VISÃO',             en: 'VISION' },
  'mission.vision.desc':    { pt: 'Ser reconhecida como referência em soluções metalmecânicas no Brasil, criando valor para clientes, colaboradores e acionistas, através da excelência operacional, inovação e sustentabilidade.', en: 'To be recognized as a reference in metalworking solutions in Brazil, creating value for customers, employees and shareholders, through operational excellence, innovation and sustainability.' },
  'values.title':           { pt: 'NOSSOS VALORES',    en: 'OUR VALUES' },
  'values.commitment':      { pt: 'COMPROMISSO',       en: 'COMMITMENT' },
  'values.commitment.desc': { pt: 'Cumprimos os prazos e especificações acordados com os clientes.', en: 'We meet the deadlines and specifications agreed with customers.' },
  'values.ethics':          { pt: 'ÉTICA',             en: 'ETHICS' },
  'values.ethics.desc':     { pt: 'Atuamos com integridade e transparência em todas as relações de negócio.', en: 'We act with integrity and transparency in all business relationships.' },
  'values.safety':          { pt: 'SEGURANÇA',         en: 'SAFETY' },
  'values.safety.desc':     { pt: 'Priorizamos a segurança dos colaboradores e a qualidade dos serviços.', en: 'We prioritize employee safety and service quality.' },
  'values.human':           { pt: 'VALORIZAÇÃO HUMANA', en: 'HUMAN VALUE' },
  'values.human.desc':      { pt: 'Investimos no crescimento e bem-estar de nossa equipe.', en: 'We invest in the growth and well-being of our team.' },
  'values.environment':     { pt: 'MEIO AMBIENTE',     en: 'ENVIRONMENT' },
  'values.environment.desc':{ pt: 'Adotamos práticas sustentáveis em todos os nossos processos.', en: 'We adopt sustainable practices in all our processes.' },
  'values.innovation':      { pt: 'INOVAÇÃO',          en: 'INNOVATION' },
  'values.innovation.desc': { pt: 'Buscamos constantemente novas soluções e tecnologias para aprimorar nossos serviços.', en: 'We constantly seek new solutions and technologies to improve our services.' },

  // Certifications
  'cert.title':             { pt: 'NOSSAS CERTIFICAÇÕES', en: 'OUR CERTIFICATIONS' },
  'cert.subtitle':          { pt: 'Comprometidos com a excelência, mantemos as mais importantes certificações do setor, garantindo qualidade e segurança em todos os nossos serviços.', en: 'Committed to excellence, we maintain the most important certifications in the sector, ensuring quality and safety in all our services.' },
  'cert.iso45001.title':    { pt: 'ISO 45001:2018',      en: 'ISO 45001:2018' },
  'cert.iso45001.desc':     { pt: 'Certificação internacional para Sistemas de Gestão de Saúde e Segurança Ocupacional, demonstrando nosso compromisso com a segurança dos colaboradores.', en: 'International certification for Occupational Health and Safety Management Systems, demonstrating our commitment to employee safety.' },
  'cert.iso45001.benefit1': { pt: 'Ambiente de trabalho mais seguro', en: 'Safer work environment' },
  'cert.iso45001.benefit2': { pt: 'Redução de acidentes de trabalho', en: 'Reduced workplace accidents' },
  'cert.iso45001.benefit3': { pt: 'Conformidade com requisitos legais', en: 'Compliance with legal requirements' },
  'cert.iso45001.benefit4': { pt: 'Melhoria contínua dos processos de segurança', en: 'Continuous improvement of safety processes' },
  'cert.sgqf.title':        { pt: 'SGQF',                en: 'SGQF' },
  'cert.sgqf.desc':         { pt: 'Sistema de Gestão da Qualidade em Fornecimento, garantindo conformidade com os padrões exigidos pelas grandes indústrias brasileiras.', en: 'Supply Quality Management System, ensuring compliance with standards required by major Brazilian industries.' },
  'cert.sgqf.benefit1':     { pt: 'Garantia de fornecimento com qualidade', en: 'Quality supply assurance' },
  'cert.sgqf.benefit2':     { pt: 'Processos padronizados e consistentes', en: 'Standardized and consistent processes' },
  'cert.sgqf.benefit3':     { pt: 'Rastreabilidade completa dos materiais', en: 'Full material traceability' },
  'cert.sgqf.benefit4':     { pt: 'Qualificação para grandes projetos industriais', en: 'Qualification for large industrial projects' },
  'cert.iso9001.title':     { pt: 'ISO 9001:2015',      en: 'ISO 9001:2015' },
  'cert.iso9001.desc':      { pt: 'Certificação para Sistemas de Gestão da Qualidade, atestando nosso compromisso com a excelência em processos e satisfação do cliente.', en: 'Certification for Quality Management Systems, attesting to our commitment to process excellence and customer satisfaction.' },
  'cert.iso9001.benefit1':  { pt: 'Padronização de processos', en: 'Process standardization' },
  'cert.iso9001.benefit2':  { pt: 'Melhoria contínua',   en: 'Continuous improvement' },
  'cert.iso9001.benefit3':  { pt: 'Aumento da satisfação do cliente', en: 'Increased customer satisfaction' },
  'cert.iso9001.benefit4':  { pt: 'Redução de não-conformidades', en: 'Reduction of non-conformities' },
  'cert.qualityBanner.title':{ pt: 'QUALIDADE CERTIFICADA', en: 'CERTIFIED QUALITY' },
  'cert.qualityBanner.desc': { pt: 'Nossas certificações demonstram nosso compromisso com a excelência, garantindo aos nossos clientes que todos os serviços são executados seguindo os mais rigorosos padrões internacionais de qualidade e segurança.', en: 'Our certifications demonstrate our commitment to excellence, ensuring that all services are performed following the most rigorous international quality and safety standards.' },

  // Clients
  'clients.title':          { pt: 'NOSSOS CLIENTES',    en: 'OUR CLIENTS' },
  'clients.subtitle':       { 
    pt: 'Temos o orgulho de atender as maiores empresas do Brasil, contribuindo para o sucesso de seus projetos e operações.',
    en: 'We are proud to serve the largest companies in Brazil, contributing to the success of their projects and operations.'
  },
  'clients.category.all':       { pt: 'TODOS OS CLIENTES',        en: 'ALL CLIENTS' },
  'clients.category.oilgas':    { pt: 'ÓLEO E GÁS',               en: 'OIL & GAS' },
  'clients.category.offshore':  { pt: 'ESTALEIROS E OFFSHORE',    en: 'SHIPYARDS & OFFSHORE' },
  'clients.category.steel':     { pt: 'SIDERURGIA',               en: 'STEEL' },
  'clients.category.mining':    { pt: 'MINERAÇÃO',                en: 'MINING' },
  'clients.category.pulp':      { pt: 'PAPEL E CELULOSE',         en: 'PULP & PAPER' },
  'clients.showing':            { pt: 'Mostrando',                 en: 'Showing' },
  'clients.of':                 { pt: 'de',                       en: 'of' },
  'clients.clients':            { pt: 'clientes',                 en: 'clients' },

  // Contact
  'contact.title':                { pt: 'ENTRE EM CONTATO', en: 'CONTACT US' },
  'contact.subtitle':             { pt: 'Estamos prontos para atender suas necessidades. Entre em contato conosco e conheça nossas soluções personalizadas.', en: 'We are ready to meet your needs. Contact us and discover our customized solutions.' },
  'contact.form.title':           { pt: 'Envie-nos uma mensagem', en: 'Send us a message' },
  'contact.form.send':            { pt: 'Enviar mensagem',        en: 'Send message' },
  'contact.form.sending':         { pt: 'Enviando...',            en: 'Sending...' },
  'contact.form.name':            { pt: 'Nome completo',          en: 'Full name' },
  'contact.form.email':           { pt: 'E-mail',                 en: 'Email' },
  'contact.form.phone':           { pt: 'Telefone',               en: 'Phone' },
  'contact.form.message':         { pt: 'Mensagem',               en: 'Message' },
  'contact.form.placeholder.name':    { pt: 'Seu nome',          en: 'Your name' },
  'contact.form.placeholder.email':   { pt: 'seu@email.com',    en: 'your@email.com' },
  'contact.form.placeholder.phone':   { pt: '(00) 00000-0000',  en: '(000) 000-000-0000' },
  'contact.form.placeholder.message': { pt: 'Como podemos ajudar?', en: 'How can we help?' },

  'contact.info.title':         { pt: 'Informações de contato',       en: 'Contact information' },
  'contact.info.addressLabel':  { pt: 'Endereço',                      en: 'Address' },
  'contact.info.address':       { pt: 'Av. Talma Rodrigues Ribeiro, 1891\nCivit II, Serra – ES', en: 'Av. Talma Rodrigues Ribeiro, 1891\nCivit II, Serra – ES' },
  'contact.info.phoneLabel':    { pt: 'Telefone',                      en: 'Phone' },
  'contact.info.phone1':        { pt: '(27) 3182-2857',               en: '(27) 3182-2857' },
  'contact.info.phone2':        { pt: '(27) 99911-9003',              en: '(27) 99911-9003' },
  'contact.info.phone3':        { pt: '(27) 3182-2883',               en: '(27) 3182-2883' },
  'contact.info.emailLabel':    { pt: 'E-mail',                        en: 'E-mail' },
  'contact.info.email1':        { pt: 'rh@bng-es.com.br',             en: 'rh@bng-es.com.br' },
  'contact.info.email2':        { pt: 'oportunidades@bng-es.com.br',  en: 'oportunidades@bng-es.com.br' },
  'contact.info.email3':        { pt: 'comercial@bngmetalmecanica.com.br', en: 'comercial@bngmetalmecanica.com.br' },

  // Equipment
  'equip.title':                { pt: 'Nosso Parque de Equipamentos', en: 'Our Equipment Park' },
  'equip.category.cranes':     { pt: 'Guindastes e Munck',           en: 'Cranes and Munck' },
  'equip.category.transport':  { pt: 'Transporte',                   en: 'Transport' },

  // Equipamentos
  'equipment.crane110t':        { pt: 'Guindaste 110t',         en: 'Crane 110t' },
  'equipment.munck15t':         { pt: 'Munck 15t',              en: 'Munck 15t' },
  'equipment.munck10t':         { pt: 'Munck 10t',              en: 'Munck 10t' },
  'equipment.unidadeMovel':     { pt: 'Unidade Móvel',         en: 'Mobile Unit' },
  'equipment.carretaExtensiva': { pt: 'Carreta Extensiva',     en: 'Extendable Trailer' },
  'equipment.carretaConvencional': { pt: 'Carreta Convencional', en: 'Conventional Trailer' },
  'equipment.cavalosMecanicos': { pt: 'Cavalos Mecânicos',     en: 'Truck Tractors' },
  'equipment.pranchas':         { pt: 'Pranchas',              en: 'Flatbeds' },

  //Footer
  'footer.tagline':             { pt: 'BNG METALMECÂNICA',      en: 'BNG METALMECÂNICA'},
  'footer.links':               { pt: 'Links',                  en: 'Links'},
  'footer.services':            { pt: 'Serviços',               en: 'Serviços'},

  //infraestructure
  'infrastructure.title':      {pt: 'INFRAESTRUTURA DA BNG METALMECÂNICA', en:'BNG METALMECÂNICA INFRASTRUCTURE'},
  'infrastructure.subtitle':   {pt: 'Infraestrutura com mais de 9.000 m² construídos em um terreno de 17.500 m², com capacidade para processar até 300 toneladas/mês em estruturas metálicas, caldeiraria e usinagem.', en:'Over 9,000 m² of built-up area on a 17,500 m² site, with monthly capacity of up to 300 tons in metal structures, boilerworks, and machining operations.'},
};

interface LanguageContextType {
  language: 'pt' | 'en';
  translate: (key: string) => string;
  changeLanguage: (lang: 'pt' | 'en') => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  translate: key => TRANSLATIONS[key]?.pt ?? key,
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>(() => {
    const saved = localStorage.getItem('preferredLanguage');
    return saved === 'en' ? 'en' : 'pt';
  });

  const translate = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return entry[language];
  };

  const changeLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'preferredLanguage') {
        setLanguage(e.newValue === 'en' ? 'en' : 'pt');
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translate, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};