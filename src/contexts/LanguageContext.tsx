// src/contexts/LanguageContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Translations = {
  [key: string]: {
    pt: string;
    en: string;
    zh: string;
  };
};

export const TRANSLATIONS: Translations = {
  // Navegação / Header
  'nav.home':           { pt: 'Home',              en: 'Home',              zh: '首页' },
  'nav.about':          { pt: 'Sobre',             en: 'About',             zh: '关于我们' },
  'nav.services':       { pt: 'Serviços',          en: 'Services',          zh: '服务' },
  'nav.certifications': { pt: 'Certificações',     en: 'Certifications',     zh: '认证' },
  'nav.equipment':      { pt: 'Equipamentos',      en: 'Equipment',         zh: '设备' },
  'nav.clients':        { pt: 'Clientes',          en: 'Clients',           zh: '客户' },
  'nav.contact':        { pt: 'Contato',           en: 'Contact',           zh: '联系我们' },
  'button.contact':     { pt: 'Fale Conosco',      en: 'Contact Us',        zh: '联系我们' },
  'nav.infrastructure': { pt: 'Infraestrutura',    en: 'Infrastructure',    zh: '基础设施' },
  'nav.missionVision': {pt: 'Nossa Politica',      en: 'Our Policy',        zh: '我们的政策' },
  'nav.mission':        { pt: 'Missão',            en: 'Mission',           zh: '使命' },
  'nav.values':         { pt: 'Valores',           en: 'Values',            zh: '价值' },
  'nav.headquarters':   { pt: 'Industrial' ,       en: 'Industrial',        zh: '工业区' },
  'nav.portArea':      {pt: 'Area Portuaria',    en: 'Port Area',         zh: '港口区域' },

  // Hero
  'hero.title':           { pt: 'BNG METALMECÂNICA', en: 'BNG METALMECÂNICA', zh: 'BNG METALMECÂNICA' },
  'hero.subtitle':        {
    pt: 'Soluções metalmecânicas de alta qualidade para as maiores empresas do mundo.',
    en: 'High-quality metalworking solutions for the largest companies in the world.',
    zh: '为世界顶级企业提供高品质金属机械解决方案。'
  },
  'hero.button.services': { pt: 'Conheça Nossos Serviços', en: 'Discover Our Services', zh: '了解我们的服务' },
  'hero.button.contact':  { pt: 'Entre em Contato',         en: 'Contact Us',          zh: '联系我们' },

  // About
  'about.title':            { pt: 'SOBRE A BNG',       en: 'ABOUT BNG',     zh: '关于 BNG' },
  'about.subtitle':         {
    pt: 'Fundada em 1998, sediada no município da Serra – ES. Orientada à fabricação, montagem e serviços industriais, incluindo usinagem de peças, componentes e usinagem de campo. Atua nos setores de siderurgia, óleo e gás, mineração e estaleiros, sempre prezando por produtos e serviços de qualidade.',
    en: 'Founded in 1998, Headquartered in Serra, Espírito Santo – Brazil. Specialized in manufacturing, assembly, and industrial services, including machining of parts, components, and on-site machining. Serves the steel, oil & gas, mining, and shipyard sectors, always committed to delivering high-quality products and services.',
    zh: '成立于1998年，总部位于巴西圣埃斯皮里图州塞拉市。专注于制造、装配和工业服务，包括零件加工、组件加工和现场加工。服务于钢铁、石油天然气、采矿和造船行业，始终致力于提供高质量的产品和服务。'
  },
  'about.industry.oil':           { pt: 'ÓLEO E GÁS',       en: 'OIL & GAS',       zh: '石油与天然气' },
  'about.industry.oil.desc':      {
    pt: 'Serviços especializados para o setor de óleo e gás, com foco em segurança e qualidade.',
    en: 'Specialized services for the oil and gas sector, focusing on safety and quality.',
    zh: '专注于安全与质量的石油天然气行业专业服务。'
  },
  'about.industry.offshore':      { pt: 'ESTALEIROS & OFFSHORE', en: 'SHIPYARDS & OFFSHORE', zh: '船厂与海上工程' },
  'about.industry.offshore.desc': {
    pt: 'Estruturas e componentes para aplicações marítimas e plataformas offshore.',
    en: 'Structures and components for marine applications and offshore platforms.',
    zh: '用于海洋应用和海上平台的结构与组件。'
  },
  'about.industry.steel':         { pt: 'SIDERURGIA',       en: 'STEEL',           zh: '钢铁' },
  'about.industry.steel.desc':    {
    pt: 'Atuação em indústrias siderúrgicas com soluções completas para equipamentos e estruturas.',
    en: 'Operations in steel industries with complete solutions for equipment and structures.',
    zh: '在钢铁行业提供设备和结构的完整解决方案。'
  },
  'about.industry.mining':        { pt: 'MINERAÇÃO',        en: 'MINING',          zh: '采矿' },
  'about.industry.mining.desc':   {
    pt: 'Soluções resistentes e duráveis para o ambiente exigente da mineração.',
    en: 'Resistant and durable solutions for the demanding mining environment.',
    zh: '为严苛采矿环境提供坚固耐用的解决方案。'
  },

  // Services
  'services.title':         { pt: 'NOSSOS SERVIÇOS',   en: 'OUR SERVICES',     zh: '我们的服务' },
  'services.subtitle':      {
    pt: 'Oferecemos soluções completas em metalurgia para diversos setores industriais, com equipes qualificadas e equipamentos modernos.',
    en: 'We offer complete metallurgy solutions for various industrial sectors, with qualified teams and modern equipment.',
    zh: '我们为各工业领域提供完整的冶金解决方案，拥有专业团队和现代化设备。'
  },
  'services.caldeiraria':       { pt: 'Caldeiraria',       en: 'Boilermaking',     zh: '锅炉制作' },
  'services.boilermaking':       { pt: 'Caldeiraria',       en: 'Boilermaking',     zh: '锅炉制作' },
  'services.structures':         { pt: 'Serviços de campo', en: 'Field service', zh: '现场服务' },
  'services.machining':          { pt: 'Usinagem',          en: 'Machining',        zh: '机加工' },
  'services.maintenance':        { pt: 'Montagem e Manutenção', en: 'Assembly & Maintenance', zh: '装配与维护' },
  'services.caldeiraria.shortDesc': {
  pt: 'Na BNG, nossa expertise em caldeiraria leve e pesada atende às demandas do setor de Óleo & Gás.',
  en: 'At BNG, our expertise in heavy and light boilermaking meets the Oil & Gas sector’s needs.',
  zh: '在 BNG，我们的重型与轻型锅炉制作专长满足石油天然气行业需求。'
},
'services.machining.shortDesc': {
  pt: 'Usinagem de peças e componentes com precisão e tecnologia avançada.',
  en: 'Precision machining of parts and components using advanced technology.',
  zh: '使用先进技术精准加工零部件。'
},
'services.maintenance.shortDesc': {
  pt: 'Serviços completos de montagem e manutenção industrial para todas as etapas.',
  en: 'Comprehensive industrial assembly & maintenance services for every stage.',
  zh: '提供全面的工业装配与维护服务。'
},
'services.structures.shortDesc': {
  pt: 'Fabricação e montagem de estruturas metálicas com projetos personalizados e alta resistência.',
  en: 'Fabrication and assembly of metal structures with custom designs and high durability.',
  zh: '定制高耐久金属结构的制造与安装。'
},

// Textos completos (fullDesc) para cada modal:
'services.caldeiraria.fullDesc': {
  pt: `Na BNG, nossa expertise em caldeiraria leve e pesada reúne o melhor das técnicas industriais para atender às demandas mais exigentes do setor de Óleo & Gás. Em caldeiraria pesada, fabricamos tanques de grande porte, vasos de pressão certificados, silos robustos e equipamentos industriais sob medida, sempre seguindo rigorosos padrões de qualidade e segurança. Em caldeiraria leve, produzimos jumpers, manifolds, sleepers e painéis modulados, ideais para integração em plantas de processamento, plataformas offshore e instalações onshore. Todo o processo é planejado para garantir rapidez e precisão — desde o corte e conformação de chapas até a soldagem especializada, tratamentos de superfície e inspeção final. Nossa estrutura completa permite gerenciar projetos complexos, entregando soluções customizadas que superam expectativas e impulsionam a eficiência operacional do cliente.`,
  en: `At BNG, our expertise in heavy and light boilermaking combines top industrial techniques to meet the most demanding requirements of the Oil & Gas sector. In heavy boilermaking, we manufacture large tanks, certified pressure vessels, robust silos, and custom industrial equipment—always adhering to strict quality and safety standards. In light boilermaking, we produce jumpers, manifolds, sleepers, and modular panels, perfect for integration into processing plants, offshore platforms, and onshore facilities. Every step is planned to ensure speed and precision—from plate cutting and forming to specialized welding, surface treatments, and final inspection. Our comprehensive infrastructure manages complex projects, delivering tailor‑made solutions that exceed expectations and drive operational efficiency.`,
  zh: `在 BNG，我们的重型与轻型锅炉制作专长结合了最先进的工业技术，以满足石油天然气行业最苛刻的需求。重型锅炉制作方面，我们生产大型储罐、认证压力容器、坚固筒仓和定制工业设备——始终严格遵循高质量和安全标准。轻型锅炉制作方面，我们制造跳管（jumpers）、汇流排（manifolds）、支撑架（sleepers）和模块化面板，适用于处理厂、海上平台和陆上设施的集成。每个环节都经过精心规划，以确保速度与精准——从钢板切割与成型，到专业焊接、表面处理和最终检验。我们的全方位生产能力能够承接复杂项目，提供超出预期的定制化解决方案，提升运营效率。`
},
'services.machining.fullDesc': {
  pt: `A BNG oferece usinagem de peças e componentes com precisão milimétrica, utilizando equipamentos CNC de última geração e tecnologia avançada. Nossos processos incluem fresamento, torneamento, retificação e tratamentos especiais, garantindo superfícies de alta qualidade e tolerâncias apertas. Atendemos indústrias críticas, como Óleo & Gás, petroquímica, defesa e energia, com prazos ágeis e compliance às normas mais rígidas.`,
  en: `BNG provides precision machining of parts and components with state‑of‑the‑art CNC equipment and advanced technology. Our processes include milling, turning, grinding, and special surface treatments—ensuring high‑quality finishes and tight tolerances. We serve critical industries such as Oil & Gas, petrochemicals, defense, and energy, delivering fast turnaround times and strict compliance with the highest standards.`,
  zh: `BNG使用最先进的CNC设备和先进技术提供零部件的精密加工。我们的流程包括铣削、车削、磨削和特殊表面处理——确保高质量表面和严格公差。我们服务于石油天然气、石化、国防和能源等关键行业，以快速交付和严格遵循最高标准著称。`
},
'services.maintenance.fullDesc': {
  pt: `Oferecemos serviços completos de montagem e manutenção industrial, desde a instalação de equipamentos pesados até paradas programadas e manutenção preditiva. Nossas equipes especializadas garantem montagem precisa de estruturas, tubulações e linhas de produção, além de realizar inspeções, testes não destrutivos (END) e reparos sob os mais rigorosos protocolos de segurança. Estamos prontos para atender demandas urgentes, minimizando paradas e maximizando a disponibilidade operacional.`,
  en: `We offer comprehensive industrial assembly and maintenance services—from heavy equipment installation to scheduled shutdowns and predictive maintenance. Our specialized teams ensure precise assembly of structures, piping, and production lines, while performing inspections, non‑destructive testing (NDT), and repairs under the strictest safety protocols. We’re ready to meet urgent demands, minimizing downtime and maximizing operational availability.`,
  zh: `我们提供全面的工业装配和维护服务——从重型设备安装到计划停机和预测性维护。我们的专业团队确保结构、管道和生产线的精确装配，同时在最严格的安全协议下进行检测、无损检测和维修。我们随时准备满足紧急需求，减少停机时间并最大限度提高运行可用性。`
},
'services.structures.fullDesc': {
  pt: `Fabricação e montagem de estruturas metálicas personalizadas para diversos setores, incluindo indústrias de Óleo & Gás, mineração e construção. Utilizamos perfis e chapas de alta resistência, processos de corte a plasma e soldagem automatizada para garantir rapidez e qualidade. Nossa localização estratégica próxima ao porto permite logística eficiente para embarques em balsas e navios, reduzindo custos e prazos de entrega.`,
  en: `Fabrication and assembly of custom metal structures for various sectors, including Oil & Gas, mining, and construction industries. We use high‑strength profiles and plates, plasma cutting, and automated welding processes to ensure speed and quality. Our strategic location near the port enables efficient logistics for barge and ship shipments, reducing costs and lead times.`,
  zh: `定制金属结构制造与安装，服务于石油天然气、采矿和建筑等多个行业。我们使用高强度型材与钢板、等离子切割和自动化焊接工艺，确保快速高质。我们靠近港口的战略位置确保驳船/船舶运输效率，降低成本并缩短交货周期。`
},

// Botões genéricos
'services.seeMore': {
  pt: 'Saiba mais',
  en: 'See More',
  zh: '了解更多'
},
'services.close': {
  pt: 'Fechar',
  en: 'Close',
  zh: '关闭'
},
  
  

  // Mission & Values
  'mission.title':          { pt: 'NOSSA MISSÃO',      en: 'OUR MISSION',       zh: '我们的使命' },
  'mission.mission':        { pt: 'MISSÃO',            en: 'MISSION',           zh: '使命' },
  'mission.mission.desc':   {
    pt: 'Oferecer soluções em produtos e serviços metalmecânicos que garantam a disponibilidade e performance dos equipamentos dos nossos clientes, buscandoa sua fidelização, utilizando tecnologia inovadora, respeitando o meio ambiente, agregando valor e satisfação aos sócios,fornecedores e colaboradores.',
    en: 'To provide metal-mechanical products and services solutions that ensure the availability and performance of our clients’ equipment, aiming to secure their loyalty by leveraging innovative technology, respecting the environment, and adding value and satisfaction for partners, suppliers, and employees.',
    zh: '提供金属机械产品与服务的解决方案，以确保客户设备的可用性和性能；致力于赢得客户忠诚，采用创新技术，尊重环境，并为股东、供应商及员工创造价值和满意度。'
  },
  'mission.vision':         { pt: 'VISÃO',             en: 'VISION',            zh: '愿景' },
  'mission.vision.desc':    {
    pt: 'Ser referência no setor metalmecânico do estado do Espírito Santo, oferecendo excelência em fabricação, usinagem, montagem industrial e serviços para a indústria.',
    en: 'To be a reference in the metal-mechanical sector of the state of Espírito Santo, offering excellence in manufacturing, machining, industrial assembly, and services for the industry.',
    zh: '成为圣埃斯皮里图桑托州金属机械行业的标杆，提供卓越的制造、加工、工业组装及行业服务。'
  },
  'values.title':           { pt: 'NOSSOS VALORES',    en: 'OUR VALUES',        zh: '我们的价值观' },
  'values.commitment':      { pt: 'COMPROMISSO',       en: 'COMMITMENT',        zh: '承诺' },
  'values.commitment.desc': {
    pt: 'Envolvimento de todos com a missão da empresa, seus valores e objetivos estratégicos.',
    en: 'Full engagement of everyone with the company’s mission, its values, and strategic objectives.',
    zh: '全员参与公司使命、价值观和战略目标。'
  },
  'values.ethics':          { pt: 'ÉTICA',             en: 'ETHICS',            zh: '道德' },
  'values.ethics.desc':     {
    pt: 'Relacionamento íntegro com os clientes, fornecedores e colaboradores, de forma a inspirar confiança e credibilidade',
    en: 'Integrity-based relationships with clients, suppliers, and employees to inspire trust and credibility',
    zh: '与客户、供应商和员工保持诚信关系，以激发信任和信誉。'
  },
  'values.safety':          { pt: 'SEGURANÇA',         en: 'SAFETY',            zh: '安全' },
  'values.safety.desc':     {
    pt: 'Oferecer condições seguras de trabalho, visando à integridade física e psicológica dos colaboradores.',
    en: 'Providing safe working conditions aimed at the physical and psychological well-being of employees.',
    zh: '提供安全的工作条件，保障员工身心健康。'
  },
  'values.human':           { pt: 'VALORIZAÇÃO HUMANA', en: 'HUMAN VALUE',       zh: '以人为本' },
  'values.human.desc':      {
    pt: 'Compromissos com a capacitação e desenvolvimento contínuos dos colaboradores, fazendo da BNG uma empresa onde todos tenham prazer em trabalhar',
    en: 'A commitment to the ongoing training and development of employees, making BNG a company where everyone enjoys working.',
    zh: '致力于员工的持续培训和发展，使BNG成为一个让所有人都乐于工作的公司。'
  },
  'values.environment':     { pt: 'MEIO AMBIENTE',     en: 'ENVIRONMENT',       zh: '环境' },
  'values.environment.desc':{
    pt: 'Trabalhar para a minimização dos aspectos e impactos negativos ao meio ambiente.',
    en: 'Working to minimize negative aspects and impacts on the environment.',
    zh: '努力最小化对环境的不利方面和负面影响。'
  },
  'values.innovation':      { pt: 'INOVAÇÃO',          en: 'INNOVATION',        zh: '创新' },
  'values.innovation.desc': {
    pt: 'Busca constante de novos métodos e tecnologias',
    en: 'A constant pursuit of new methods and technologies',
    zh: '不断追求新方法和新技术。'
  },

  'values.negocio': {pt: 'NEGOCIOS', en: 'BUSINESS', zh: ' 商业'},
  'values.negocio.desc': { pt:'Soluções em produtos e serviços metalmecânicos que garantam disponibilidade e performance dos equipamentos dos nossos clientes.', en: 'Solutions in metal-mechanical products and services that ensure the availability and performance of our clients equipment.',
    zh:'提供金属机械产品与服务解决方案，保障客户设备的可用性与性能。'
  },

  'values.cliente':      { pt: 'FOCO AO CLIENTE',          en: 'CUSTOMER FOCUS',        zh: '以客户为中心' },
  'values.cliente.desc': { pt: 'Dedicação e atenção às necessidades dos clientes, visando à superação de expectativas e ao fortalecimento da confiança em nossos produtos e serviço',          en: 'Dedication and attention to customer needs, aiming to exceed expectations and strengthen confidence in our products and services.',        zh: '专注并关注客户需求，旨在超越预期并增强对我们产品和服务的信任。' }, 
  'values.qualidade':    { pt: 'QUALIDADE',          en: 'QUALITY',        zh: '质量' },
  'values.qualidade.desc': { pt: 'Compromisso com a política e melhoria contínua da eficácia do sistema de gestão integrado..',          en: 'A commitment to policy and the continuous improvement of the effectiveness of the integrated management system.',        zh: '致力于政策执行并持续改进综合管理体系的有效性。' },


  // Certifications
  'cert.title':             { pt: 'NOSSAS CERTIFICAÇÕES', en: 'OUR CERTIFICATIONS', zh: '我们的认证' },
  'cert.subtitle':          {
    pt: 'Comprometidos com a excelência, mantemos as mais importantes certificações do setor, garantindo qualidade e segurança em todos os nossos serviços.',
    en: 'Committed to excellence, we maintain the most important certifications in the sector, ensuring quality and safety in all our services.',
    zh: '我们致力卓越，保持行业最重要的认证，确保所有服务的质量与安全。'
  },
  'cert.iso45001.title':    { pt: 'PRODFOR SGSS',      en: 'PRODFOR SGSS',    zh: 'PRODFOR SGSS' },
   'cert.iso45001.desc':     {
   pt: 'Sistema PRODFOR SGSS inspirado na ISO 45001:2018 para Gestão de Saúde e Segurança Ocupacional, com foco em processos de identificação de perigos, avaliação de riscos e controles operacionais, evidenciando nosso compromisso permanente com a integridade física dos colaboradores.',
   en: 'PRODFOR SGSS system inspired by ISO 45001:2018 for Occupational Health and Safety Management, focusing on hazard identification, risk assessment and operational controls, showcasing our ongoing commitment to employee well‑being.',
   zh: 'PRODFOR SGSS 系统借鉴了 ISO 45001:2018 的职业健康与安全管理要求，侧重于危险识别、风险评估和操作控制，彰显我们对员工健康持续的承诺。'
 },

 'cert.iso45001.tech1':   {
   pt: 'Implementação de mapeamento de perigos e avaliação de riscos ocupacionais, com matriz de controle de riscos atualizada periodicamente',
   en: 'Implementation of hazard mapping and occupational risk assessment, with a periodically updated risk control matrix',
   zh: '实现危险点映射与职业风险评估，并定期更新风险控制矩阵'
 },
 'cert.iso45001.tech2':   {
   pt: 'Definição de controles operacionais, incluindo procedimentos de trabalho seguro, EPIs adequados e planos de resposta a emergências',
    en: 'Definition of operational controls, including safe work procedures, appropriate PPE and emergency response plans',
   zh: '制定操作控制，包括安全作业程序、适当的个体防护装备和应急响应预案'
 },
 'cert.iso45001.tech3':   {
   pt: 'Monitoramento contínuo de indicadores de desempenho em SST (taxa de incidentes, ATs e Líderes de Segurança) e análise de não-conformidades',
   en: 'Continuous monitoring of OHS performance indicators (incident rate, LTIs and Safety Observations) and non‑conformity analysis',
   zh: '持续监测职业健康安全绩效指标（事故率、工伤事故率及安全观察）并进行不合规分析'
  },
 'cert.iso45001.tech4':   {
   pt: 'Programa de treinamento e capacitação periódica para todos os níveis hierárquicos em práticas de segurança do trabalho',
   en: 'Periodic training and upskilling program for all organizational levels on workplace safety practices',
   zh: '为各个组织层级定期开展工作安全实践培训与提升计划'
 },



  'cert.iso45001.benefit1': { pt: 'Ambiente de trabalho mais seguro', en: 'Safer work environment', zh: '更安全的工作环境' },
  'cert.iso45001.benefit2': { pt: 'Redução de acidentes de trabalho', en: 'Reduced workplace accidents', zh: '减少工伤事故' },
  'cert.iso45001.benefit3': { pt: 'Conformidade com requisitos legais', en: 'Compliance with legal requirements', zh: '符合法律要求' },
  'cert.iso45001.benefit4': { pt: 'Melhoria contínua dos processos de segurança', en: 'Continuous improvement of safety processes', zh: '安全流程的持续改进' },
  'cert.sgqf.title':        { pt: 'SGQF',                en: 'SGQF',              zh: 'SGQF' },
  'cert.sgqf.desc':         {
    pt: 'Sistema de Gestão da Qualidade em Fornecimento, garantindo conformidade com os padrões exigidos pelas grandes indústrias brasileiras.',
    en: 'Supply Quality Management System, ensuring compliance with standards required by major Brazilian industries.',
    zh: '供应质量管理体系，确保符合巴西大型工业的标准要求。'
  },

  'cert.sgqf.tech1':       {
   pt: 'Padronização de critérios para seleção e qualificação de fornecedores, incluindo auditorias in loco',
   en: 'Standardization of criteria for supplier selection and qualification, including on‑site audits',
   zh: '统一供应商选择和资格评定标准，包括现场审核'
 },
 'cert.sgqf.tech2':       {
   pt: 'Controle rigoroso de qualidade de matérias‑primas e componentes através de inspeções visuais e testes laboratoriais',
   en: 'Strict quality control of raw materials and components through visual inspections and laboratory tests',
   zh: '通过目视检查和实验室测试对原材料和零部件进行严格质量控制'
 },
 'cert.sgqf.tech3':       {
   pt: 'Sistemática de rastreabilidade de lotes, com registro digitalizado e gerenciamento de documentos de fornecimento',
   en: 'Batch traceability system with digitized records and supply documentation management',
   zh: '带有数字化记录和供应文档管理的批次可追溯体系'
 },
 'cert.sgqf.tech4':       {
   pt: 'Avaliação periódica de desempenho de fornecedores e realização de auditorias de conformidade',
   en: 'Periodic evaluation of supplier performance and execution of compliance audits',
   zh: '定期评估供应商绩效并执行合规审核'
 },

  'cert.sgqf.benefit1':     { pt: 'Garantia de fornecimento com qualidade', en: 'Quality supply assurance', zh: '高质量供应保证' },
  'cert.sgqf.benefit2':     { pt: 'Processos padronizados e consistentes', en: 'Standardized and consistent processes', zh: '流程标准化与一致性' },
  'cert.sgqf.benefit3':     { pt: 'Rastreabilidade completa dos materiais', en: 'Full material traceability', zh: '材料的完整可追溯性' },
  'cert.sgqf.benefit4':     { pt: 'Qualificação para grandes projetos industriais', en: 'Qualification for large industrial projects', zh: '大型工业项目资格认证' },
  'cert.iso9001.title':     { pt: 'ISO 9001:2015',      en: 'ISO 9001:2015',    zh: 'ISO 9001:2015' },
  'cert.iso9001.desc':      {
    pt: 'Certificação para Sistemas de Gestão da Qualidade, atestando nosso compromisso com a excelência em processos e satisfação do cliente.',
    en: 'Certification for Quality Management Systems, attesting to our commitment to process excellence and customer satisfaction.',
    zh: '质量管理体系认证，证明我们对流程卓越和客户满意的承诺。'
  },
  'cert.iso9001.benefit1':  { pt: 'Padronização de processos', en: 'Process standardization', zh: '流程标准化' },
  'cert.iso9001.benefit2':  { pt: 'Melhoria contínua',   en: 'Continuous improvement', zh: '持续改进' },
  'cert.iso9001.benefit3':  { pt: 'Aumento da satisfação do cliente', en: 'Increased customer satisfaction', zh: '提高客户满意度' },
  'cert.iso9001.benefit4':  { pt: 'Redução de não-conformidades', en: 'Reduction of non-conformities', zh: '减少不合格项' },
  'cert.qualityBanner.title':{ pt: 'QUALIDADE CERTIFICADA', en: 'CERTIFIED QUALITY', zh: '认证质量' },  
  'cert.qualityBanner.desc': {
    pt: 'Nossas certificações demonstram nosso compromisso com a excelência, garantindo aos nossos clientes que todos os serviços são executados seguindo os mais rigorosos padrões internacionais de qualidade e segurança.',
    en: 'Our certifications demonstrate our commitment to excellence, ensuring that all services are performed following the most rigorous international quality and safety standards.',
    zh: '我们的认证彰显卓越承诺，确保所有服务遵循最严格的国际质量和安全标准。'
  },

 'cert.iso9001.tech1':    {
   pt: 'Desenvolvimento e implementação de Manual de Qualidade alinhado aos requisitos da norma ISO 9001:2015',
   en: 'Development and implementation of a Quality Manual aligned with ISO 9001:2015 requirements',
   zh: '制定并实施与 ISO 9001:2015 要求保持一致的质量手册'
 },
 'cert.iso9001.tech2':    {
   pt: 'Realização de auditorias internas periódicas e análises críticas pela alta direção para avaliar desempenho do SGQ',
   en: 'Conducting periodic internal audits and management reviews to evaluate QMS performance',
   zh: '定期开展内部审核和管理评审，以评估质量管理体系绩效'
 },
 'cert.iso9001.tech3':    {
   pt: 'Monitoramento de indicadores de qualidade (índice de retrabalho, satisfação do cliente e metas de desempenho) e geração de relatórios gerenciais',
   en: 'Monitoring quality indicators (rework rate, customer satisfaction and performance targets) and generating management reports',
   zh: '监测质量指标（返工率、客户满意度和绩效目标）并生成管理报告'
 },
 'cert.iso9001.tech4':    {
   pt: 'Gestão de ações corretivas e preventivas para tratamento de não-conformidades e busca contínua por melhorias de processo',
   en: 'Management of corrective and preventive actions to address non‑conformities and drive continual process improvement',
   zh: '管理纠正和预防措施，以解决不合格并推动持续改进'
 },
  'cert.technicalTitle':    { pt: 'ESPECIFICAÇÕES TÉCNICAS', en: 'TECHNICAL SPECIFICATIONS', zh: '技术规格' },

  // Clients
  'clients.title':          { pt: 'NOSSOS CLIENTES',    en: 'OUR CLIENTS',       zh: '我们的客户' },
  'clients.subtitle':       {
    pt: 'Temos o orgulho de atender as maiores empresas do Brasil, contribuindo para o sucesso de seus projetos e operações.',
    en: 'We are proud to serve the largest companies in Brazil, contributing to the success of their projects and operations.',
    zh: '我们自豪地为巴西最大公司提供服务，助力其项目与运营成功。'
  },
  'clients.category.all':       { pt: 'TODOS OS CLIENTES',        en: 'ALL CLIENTS',        zh: '所有客户' },
  'clients.category.oilgas':    { pt: 'ÓLEO E GÁS',               en: 'OIL & GAS',          zh: '石油与天然气' },
  'clients.category.offshore':  { pt: 'ESTALEIROS',    en: 'SHIPYARDS', zh: '造船厂' },
  'clients.category.steel':     { pt: 'SIDERURGIA',               en: 'STEEL',               zh: '钢铁' },
  'clients.category.mining':    { pt: 'MINERAÇÃO',                en: 'MINING',              zh: '采矿' },
  'clients.category.pulp':      { pt: 'PAPEL E CELULOSE',         en: 'PULP & PAPER',        zh: '纸浆与造纸' },
  'clients.showing':            { pt: 'Mostrando',                 en: 'Showing',             zh: '显示' },
  'clients.of':                 { pt: 'de',                       en: 'of',                  zh: '共' },
  'clients.clients':            { pt: 'clientes',                 en: 'clients',             zh: '客户' },

  // Contact
  'contact.title':                { pt: 'ENTRE EM CONTATO', en: 'CONTACT US',                 zh: '联系我们' },
  'contact.subtitle':             {
    pt: 'Estamos prontos para atender suas necessidades. Entre em contato conosco e conheça nossas soluções personalizadas.',
    en: 'We are ready to meet your needs. Contact us and discover our customized solutions.',
    zh: '我们随时准备满足您的需求。联系我们，了解个性化解决方案。'
  },
  'contact.form.title':           { pt: 'Envie-nos uma mensagem', en: 'Send us a message',       zh: '发送消息给我们' },
  'contact.form.send':            { pt: 'Enviar mensagem',        en: 'Send message',            zh: '发送消息' },
  'contact.form.sending':         { pt: 'Enviando...',            en: 'Sending...',             zh: '发送中…' },
  'contact.form.name':            { pt: 'Nome completo',          en: 'Full name',              zh: '全名' },
  'contact.form.email':           { pt: 'E-mail',                 en: 'Email',                  zh: '电子邮件' },
  'contact.form.phone':           { pt: 'Telefone',               en: 'Phone',                  zh: '电话' },
  'contact.form.message':         { pt: 'Mensagem',               en: 'Message',                zh: '留言' },
  'contact.form.placeholder.name':    { pt: 'Seu nome',          en: 'Your name',              zh: '您的姓名' },
  'contact.form.placeholder.email':   { pt: 'seu@email.com',    en: 'your@email.com',        zh: '您的邮箱' },
  'contact.form.placeholder.phone':   { pt: '(00) 00000-0000',  en: '(000) 000-000-0000',    zh: '（000）000-000-0000' },
  'contact.form.placeholder.message': { pt: 'Como podemos ajudar?', en: 'How can we help?',     zh: '我们如何帮助您？' },

  'contact.info.title':         { pt: 'Informações de contato',       en: 'Contact information',   zh: '联系信息' },
  'contact.info.addressLabel':  { pt: 'Endereço',                      en: 'Address',              zh: '地址' },
  'contact.info.address':       {
    pt: 'Av. Talma Rodrigues Ribeiro, 1891\nCivit II, Serra – ES',
    en: 'Av. Talma Rodrigues Ribeiro, 1891\nCivit II, Serra – ES',
    zh: '巴西塞拉市塔尔玛·罗德里格斯·里贝罗大道1891号 Civit II'
  },
  'contact.info.phoneLabel':    { pt: 'Telefone',                      en: 'Phone',                zh: '电话' },
  'contact.info.phone1':        { pt: '+55 (27) 3182-2899',               en: '+55 (27) 3182-2899',       zh: '+55 （27）3182-2899' },
  'contact.info.phone2':        { pt: '+55 (27) 99911-9003',              en: '+55 (27) 99911-9003',      zh: '+55 （27）99911-9003' },
  'contact.info.phone3':        { pt: '+55 (27) 3182-2883',               en: '+55 (27) 3182-2883',       zh: '+55 （27）3182-2883' },
  'contact.info.emailLabel':    { pt: 'E-mail',                        en: 'E-mail',               zh: '电子邮件' },
  'contact.info.email1':        { pt: 'rh@bng-es.com.br',             en: 'rh@bng-es.com.br',      zh: 'rh@bng-es.com.br' },
  'contact.info.email2':        { pt: 'oportunidades@bng-es.com.br',  en: 'oportunidades@bng-es.com.br', zh: 'oportunidades@bng-es.com.br' },
  'contact.info.email3':        { pt: 'comercial@bng-es.com.br',      en: 'comercial@bng-es.com.br',     zh: 'comercial@bng-es.com.br' },

  // Equipment
  'equip.title':                { pt: 'Nosso Parque de Equipamentos', en: 'Our Equipment Park',   zh: '我们的设备' },
  'equip.category.cranes':     { pt: 'Guindastes e Muncks',           en: 'Cranes and Muncks',     zh: '起重机与吊车' },
  'equip.category.transport':  { pt: 'Transportes',                   en: 'Transports',            zh: '运输' },

  'equipment.crane110t':        { pt: 'Guindaste 110t',         en: 'Crane 110t',            zh: '110吨起重机' },
  'equipment.munck15t':         { pt: 'Munck 15t',              en: 'Munck 15t',             zh: '15吨吊车' },
  'equipment.munck10t':         { pt: 'Munck 10t',              en: 'Munck 10t',             zh: '10吨吊车' },
  'equipment.unidadeMovel':     { pt: 'Unidade Móvel',         en: 'Mobile Unit',           zh: '移动单元' },
  'equipment.carretaExtensiva': { pt: 'Carreta Extensiva',     en: 'Extendable Trailer',    zh: '可伸缩挂车' },
  'equipment.carretaConvencional': { pt: 'Carreta Convencional', en: 'Conventional Trailer', zh: '普通挂车' },
  'equipment.cavalosMecanicos': { pt: 'Cavalos Mecânicos',     en: 'Truck Tractors',        zh: '牵引车' },
  'equipment.pranchas':         { pt: 'Pranchas',              en: 'Flatbeds',              zh: '平板车' },

  // Footer
  'footer.tagline':             { pt: 'BNG METALMECÂNICA',      en: 'BNG METALMECÂNICA',   zh: 'BNG METALMECÂNICA' },
  'footer.links':               { pt: 'Links',                  en: 'Links',               zh: '链接' },
  'footer.services':            { pt: 'Serviços',               en: 'Services',            zh: '服务' },
  'footer.copyright': {pt: '© {{year}} BNG Metalmecânica. Todos os direitos reservados. Desenvolvido por Eduardo Morandi e Gabriel Gomes', en: '© {{year}} BNG Metalmecânica. All rights reserved. Developed by Eduardo Morandi and Gabriel Gomes.', zh: '© {{year}} BNG Metalmecânica。保留所有权利。由 Eduardo Morandi 和 Gabriel Gomes 开发',},

  'infrastructure.title': {
    pt: 'INFRAESTRUTURA BNG METALMECÂNICA',
    en: 'BNG METALMECÂNICA INFRASTRUCTURE',
    zh: 'BNG METALMECÂNICA 基础设施'
  },

  'infrastructure.description': {
    pt: 'Com um terreno de 70 000 m² — dos quais 36 000 m² já são estruturas metálicas, caldeiraria e usinagem — a BNG oferece capacidade de processamento de até 600 toneladas por mês, garantindo agilidade e precisão em projetos de grande porte.',
    en: 'Spanning 70,000 m²—36,000 m² dedicated to metal structures, boilerworks, and machining—BNG delivers up to 600 tons/month of processing capacity, ensuring speed and precision for large-scale projects.',
    zh: 'BNG占地 70,000 平方米，其中 36,000 平方米用于金属结构、锅炉制作和机加工，可实现每月 600 吨的加工能力，确保大型项目的高效与精准。'
  },
  'infrastructure.desc1': {
    pt: 'A BNG opera duas fábricas de caldeiraria e usinagem em Serra, além de duas unidades de pintura industrial, um centro de processamento de matéria-prima (corte e preparação) e um amplo depósito. Nossa estrutura completa garante agilidade e qualidade em todas as etapas do seu projeto.',
    en: 'BNG operates two boiler-making and machining plants in Serra, plus two industrial painting units, a raw-material processing center (cutting & prep), and a large storage facility. Our comprehensive setup ensures agility and quality at every project stage.',
    zh: 'BNG在塞拉拥有两座锅炉制作和机加工工厂，另设两座工业喷涂车间、一座原材料加工中心（切割与准备）和大型仓储设施。我们的完整配套确保项目每个环节都快速且高质量完成。'
  },
  'infrastructure.desc2': {
    pt: 'Dentro do Porto de Portocel (Aracruz‑ES), contamos com uma área de fabricação estratégica à front-sea para grandes estruturas e carregamentos em balsas e navios. Essa localização exclusiva garante logística eficiente para clientes de Óleo & Gás e projetos de porte internacional.',
    en: 'Inside Portocel port (Aracruz‑ES), we have a strategic front‑sea manufacturing zone for large structures and barge/ship loadouts. This exclusive location delivers efficient logistics for Oil & Gas clients and large‑scale international projects.',
    zh: '我们在Portocel港（阿拉克鲁斯‑ES）内拥有面海战略制造区，可进行大型结构生产及驳船/船舶装载。此独特位置为石油天然气客户和大型国际项目提供高效物流保障。'
  },
  'infrastructure.totalAreaLabel': {
    pt: 'Área Total',
    en: 'Total Area',
    zh: '总面积'
  },
  'infrastructure.builtAreaLabel': {
    pt: 'Área Construída',
    en: 'Built Area',
    zh: '建筑面积'
  },
  'infrastructure.processingCapacityLabel': {
    pt: 'Capacidade de Processamento',
    en: 'Processing Capacity',
    zh: '处理能力'
  },
  'infrastructure.capacitySuffix': {
    pt: ' t/mês',
    en: ' t/month',
    zh: ' 吨/月'
  },
  'infrastructure.portAreaTitle': {
    pt: ' ÁREA PORTUARIA',
    en: ' PORT AREA',
    zh: '港口区'
  },

  'mission.policyTitle': {
    pt: 'Política do SGI',
    en: 'SGI Policy',
    zh: 'SGI 政策'
  },
  'mission.policyDesc': {
    pt: 'A BNG, em sua área de atuação, realiza processos de usinagem, caldeiraria e pintura, com o objetivo de garantir satisfação de seus clientes, o bem-estar de seus funcionários e o crescimento sustentável dos negócios. Para mais detalhes, consulte nossa política do SGI abaixo.',
    en: 'BNG, in its area of operation, carries out machining, boilermaking, and painting processes, with the aim of ensuring customer satisfaction, the well‑being of its employees, and sustainable business growth. For more details, consult our SGI policy below.',
    zh: 'BNG 在其业务领域内开展机加工、锅炉制作和喷涂等工艺，旨在确保客户满意、员工福祉以及业务的可持续增长。更多详情，请参阅下方我们的 SGI 政策。'
  },
  'mission.policyButton': {
    pt: 'Visualizar PDF',
    en: 'View PDF',
    zh: '查看 PDF'
  },

};





interface LanguageContextType {
  language: 'pt' | 'en' | 'zh';
  translate: (key: string) => string;
  changeLanguage: (lang: 'pt' | 'en' | 'zh') => void;
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
  const [language, setLanguage] = useState<'pt' | 'en' | 'zh'>(() => {
    const saved = localStorage.getItem('preferredLanguage');
    return saved === 'en' || saved === 'zh' ? saved : 'pt';
  });

  const translate = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return entry[language];
  };

  const changeLanguage = (lang: 'pt' | 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'preferredLanguage') {
        const val = e.newValue;
        if (val === 'en' || val === 'zh') setLanguage(val);
        else setLanguage('pt');
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
