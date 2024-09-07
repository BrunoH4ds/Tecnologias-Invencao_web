const dados = [
  {
    titulo: 'Inteligência Artificial',
    descricao: 'Ela está revolucionando o mundo à nossa volta! Desde os assistentes virtuais que respondem às nossas perguntas até os carros autônomos que estão sendo desenvolvidos, a IA está presente em diversas áreas da nossa vida. Com a capacidade de aprender com os dados e realizar tarefas complexas, a IA promete transformar a forma como vivemos e trabalhamos. No entanto, é fundamental que o desenvolvimento da IA seja feito de forma ética e responsável, para que seus benefícios sejam maximizados e seus riscos minimizados.',
    link: 'https://cloud.google.com/learn/what-is-artificial-intelligence?hl=pt-BR'
  },
  {
    titulo: 'Celulares',
    descricao: 'Além de fazer ligações e enviar mensagens, os celulares se transformaram em poderosas ferramentas de trabalho, estudo e entretenimento. Com câmeras de alta resolução, processadores cada vez mais rápidos e acesso à internet a qualquer hora e em qualquer lugar, os smartphones revolucionaram a forma como nos comunicamos, consumimos informações e nos divertimos. No entanto, o uso excessivo pode ter impactos negativos na saúde mental e física, além de gerar dependência tecnológica.',
    link: 'https://www.google.com/search?q=celulares'
  },
  {
    titulo: 'Computadores',
    descricao: 'Os computadores são ferramentas essenciais no mundo moderno, usados em quase todos os setores. Desde desktops e laptops até computadores portáteis e de alto desempenho, eles são fundamentais para o trabalho, o estudo e o entretenimento. A evolução contínua dos computadores traz melhorias em processamento, armazenamento e conectividade, tornando-os cada vez mais poderosos e eficientes.',
    link: 'https://www.microsoft.com/pt-br/windows-computers'
  },
  {
    titulo: 'Realidade Virtual e Aumentada',
    descricao: 'A Realidade Virtual (RV) e a Realidade Aumentada (RA) estão revolucionando a forma como interagimos com o mundo digital. A RV imerge o usuário em um ambiente completamente virtual, enquanto a RA sobrepõe elementos digitais ao mundo real. Essas tecnologias têm aplicações em diversos setores, como jogos, educação, arquitetura e medicina.',
    link: 'https://www.oculus.com/experiences/'
  },
  {
    titulo: 'Blockchain',
    descricao: 'O blockchain é uma tecnologia de registro distribuído que garante a segurança e a transparência de transações. Originalmente desenvolvido para a criptomoeda Bitcoin, o blockchain tem o potencial de revolucionar diversos setores, como finanças, logística e governança. Essa tecnologia cria um livro-razão digital imutável, no qual todas as transações são registradas de forma criptografada e distribuída em uma rede de computadores.',
    link: 'https://www.blockchain.com/pt-br/'
  },
  {
    titulo: 'Computação em Nuvem',
    descricao: 'A computação em nuvem permite o armazenamento e processamento de dados em servidores remotos acessíveis via internet, em vez de depender de recursos locais. Esse modelo oferece escalabilidade, flexibilidade e redução de custos, permitindo que empresas e indivíduos acessem aplicativos e dados de qualquer lugar.',
    link: 'https://aws.amazon.com/pt/cloud-computing/'
  },
  {
    titulo: '5G',
    descricao: 'A tecnologia 5G é a quinta geração das redes móveis, oferecendo velocidades de internet muito mais rápidas e latências reduzidas em comparação com o 4G. Isso possibilita uma maior conectividade para dispositivos, melhorias em aplicações de realidade aumentada e virtual, e suportar um maior número de dispositivos simultaneamente.',
    link: 'https://www.qualcomm.com/5g'
  },
  {
    titulo: 'Internet das Coisas (IoT)',
    descricao: 'A Internet das Coisas (IoT) refere-se à interconexão de dispositivos físicos através da internet, permitindo que eles coletem e troquem dados. Isso inclui desde dispositivos domésticos inteligentes, como termostatos e eletrodomésticos, até sensores industriais e veículos conectados.',
    link: 'https://www.ibm.com/internet-of-things'
  },
  {
    titulo: 'Computação Quântica',
    descricao: 'A computação quântica utiliza princípios da mecânica quântica para realizar cálculos muito mais rápidos do que os computadores tradicionais. Essa tecnologia tem o potencial de resolver problemas complexos e realizar simulações que seriam impossíveis para os computadores atuais.',
    link: 'https://www.google.com/quantum-computing/'
  },
  {
    titulo: 'Aprendizado de Máquina',
    descricao: 'O aprendizado de máquina é um subcampo da inteligência artificial que permite que sistemas aprendam e melhorem automaticamente a partir da experiência sem serem explicitamente programados. É usado em uma variedade de aplicações, como reconhecimento de imagem, processamento de linguagem natural e sistemas de recomendação.',
    link: 'https://www.sas.com/pt_br/insights/analytics/machine-learning.html'
  },
  {
    titulo: 'Redes Neurais',
    descricao: 'Redes neurais são sistemas computacionais inspirados no funcionamento do cérebro humano. Elas são usadas para reconhecer padrões e realizar tarefas complexas em áreas como reconhecimento de fala, visão computacional e tradução automática.',
    link: 'https://www.tensorflow.org/guide/keras/overview'
  },
  {
    titulo: 'Segurança Cibernética',
    descricao: 'Segurança cibernética envolve a proteção de sistemas, redes e dados contra ataques digitais. Isso inclui a implementação de medidas para prevenir, detectar e responder a ameaças e vulnerabilidades, garantindo a integridade, confidencialidade e disponibilidade das informações.',
    link: 'https://www.cisco.com/c/pt_br/products/security/what-is-cybersecurity.html'
  },
  {
    titulo: 'Robótica',
    descricao: 'Robótica é a área da tecnologia que envolve a concepção, construção e operação de robôs. Robôs podem ser programados para realizar tarefas variadas, desde operações industriais e médicas até tarefas domésticas e exploração espacial.',
    link: 'https://www.robotics.org/'
  },
  {
    titulo: 'Realidade Mista',
    descricao: 'A realidade mista combina elementos de realidade virtual e aumentada para criar experiências interativas onde objetos virtuais e reais coexistem e interagem em tempo real. É usada em áreas como design, treinamento e entretenimento.',
    link: 'https://www.microsoft.com/en-us/mixed-reality'
  },
  {
    titulo: 'Edge Computing',
    descricao: 'Edge computing refere-se ao processamento de dados próximo à fonte onde os dados são gerados, em vez de depender de servidores centralizados. Isso reduz a latência e melhora o desempenho em aplicações que requerem processamento em tempo real.',
    link: 'https://www.ibm.com/cloud/learn/edge-computing'
  },
  {
    titulo: 'Design de Experiência do Usuário (UX)',
    descricao: 'Design de UX envolve a criação de produtos que proporcionem uma experiência positiva e intuitiva para o usuário. Isso inclui a pesquisa e o desenvolvimento de interfaces e interações que atendam às necessidades e expectativas dos usuários.',
    link: 'https://www.nngroup.com/what-is-user-experience/'
  },
  {
    titulo: 'Interface de Programação de Aplicações (API)',
    descricao: 'APIs são conjuntos de regras e definições que permitem que diferentes softwares se comuniquem entre si. Elas facilitam a integração de funcionalidades e serviços entre aplicações, permitindo o desenvolvimento de soluções mais robustas e interconectadas.',
    link: 'https://www.redhat.com/en/topics/api/what-is-an-api'
  },
  {
    titulo: 'Armazenamento em Nuvem',
    descricao: 'O armazenamento em nuvem permite o salvamento de dados em servidores remotos, acessíveis via internet. Isso oferece vantagens como escalabilidade, backup automático e acesso a partir de qualquer lugar.',
    link: 'https://www.google.com/search?q=armazenamento+em+nuvem'
  },
  {
    titulo: 'Tecnologia de Redes',
    descricao: 'Tecnologias de redes abrangem tudo, desde redes locais (LANs) até redes de longa distância (WANs) e a internet. Elas são essenciais para a comunicação de dados e conectividade entre dispositivos e sistemas.',
    link: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-networking.html'
  },
  {
    titulo: 'Desenvolvimento Web',
    descricao: 'O desenvolvimento web envolve a criação e manutenção de sites e aplicativos web. Inclui o uso de tecnologias como HTML, CSS, JavaScript, e frameworks como React e Angular para criar experiências de usuário dinâmicas e responsivas.',
    link: 'https://www.w3schools.com/'
  },
  {
    titulo: 'Desenvolvimento de Software',
    descricao: 'Desenvolvimento de software é o processo de projetar, criar, testar e manter aplicativos e sistemas de software. Envolve várias etapas, como análise de requisitos, design, codificação, testes e manutenção.',
    link: 'https://www.softwareengineeringdaily.com/'
  },
  {
    titulo: 'Geração de Conteúdo Automatizado',
    descricao: 'A geração de conteúdo automatizado utiliza algoritmos e IA para criar textos, imagens e outros tipos de conteúdo de forma automática. É amplamente utilizada em marketing, criação de conteúdo e comunicação personalizada.',
    link: 'https://www.content.ai/'
  },
  {
    titulo: 'Tecnologia de Reconhecimento Facial',
    descricao: 'O reconhecimento facial é uma tecnologia que usa algoritmos para identificar ou verificar pessoas com base em características faciais. É usado em segurança, autenticação e personalização de experiências.',
    link: 'https://www.face++.com/'
  },
  {
    titulo: 'Tecnologia de Voz e Linguagem Natural',
    descricao: 'Tecnologias de voz e linguagem natural envolvem a capacidade dos computadores de entender, interpretar e gerar linguagem humana. Isso inclui reconhecimento de voz, síntese de fala e processamento de linguagem natural.',
    link: 'https://www.ibm.com/cloud/watson-assistant/'
  },
  {
    titulo: 'Tecnologia de Sensores',
    descricao: 'Sensores são dispositivos que detectam e medem mudanças em seu ambiente e convertem essas informações em sinais que podem ser processados por sistemas. Eles são usados em uma ampla gama de aplicações, desde automação industrial até dispositivos vestíveis.',
    link: 'https://www.analog.com/en/technologies/sensors.html'
  },
  {
    titulo: 'Impressão 3D',
    descricao: 'A impressão 3D é uma tecnologia que cria objetos físicos a partir de modelos digitais, camada por camada. É usada em uma variedade de indústrias, incluindo manufatura, saúde e design, para criar protótipos, peças e produtos personalizados.',
    link: 'https://www.3dsystems.com/what-is-3d-printing'
  },
  {
    titulo: 'Tecnologia de Bateria e Armazenamento de Energia',
    descricao: 'Tecnologias de bateria e armazenamento de energia envolvem a criação e gestão de sistemas que armazenam e fornecem energia elétrica. Isso inclui baterias recarregáveis, armazenamento em larga escala e soluções para energia renovável.',
    link: 'https://www.electrek.co/energy/'
  },
  {
    titulo: 'Tecnologia de Comunicação por Satélite',
    descricao: 'Comunicação por satélite envolve o uso de satélites para transmitir sinais de comunicação para diferentes partes do mundo. É usada para telecomunicações, transmissão de televisão e acesso à internet em áreas remotas.',
    link: 'https://www.intelsat.com/'
  },
  {
    titulo: 'Tecnologia de Sistemas de Navegação Global',
    descricao: 'Sistemas de navegação global, como o GPS, permitem a localização precisa de objetos e pessoas em qualquer lugar do planeta. Esses sistemas são essenciais para navegação, rastreamento e mapeamento.',
    link: 'https://www.garmin.com/en-US/'
  },
  {
    titulo: 'Tecnologia de Impressão Digital',
    descricao: 'Impressão digital refere-se ao processo de impressão diretamente de arquivos digitais para mídia física. É usada para criar materiais impressos personalizados, incluindo banners, adesivos e embalagens.',
    link: 'https://www.hp.com/us-en/solutions/printing.html'
  },
  {
    titulo: 'Tecnologia de Análise de Dados',
    descricao: 'Análise de dados envolve a coleta, processamento e interpretação de grandes volumes de dados para extrair informações úteis e tomar decisões informadas. É usada em diversas áreas, como negócios, pesquisa e ciência.',
    link: 'https://www.sas.com/pt_br/insights/analytics/big-data-analytics.html'
  }
];

// Transformar todos os títulos em minúsculas
dados.forEach(item => item.titulo = item.titulo.toLowerCase());

// Criar o mapa de dados
window.dadosMap = {};
dados.forEach(item => window.dadosMap[item.titulo] = item);

// Exemplo de como acessar e iterar corretamente sobre window.dadosMap
function Tudo() {
  // Usando Object.values para iterar sobre os valores do objeto
  Object.values(window.dadosMap).forEach(item => {
    console.log(item.titulo);  // Exibe o título de cada item
  });
}

// Função associada ao botão para evitar o erro ao clicar
document.querySelector('button').onclick = function() {
  Tudo();
};