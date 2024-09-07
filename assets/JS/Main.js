// Define a função Tudo globalmente
function Tudo() {
  let resultados_tudo = '';

  // Percorre todos os itens no objeto window.dadosMap e cria um HTML com os dados
  for (let dado of Object.values(window.dadosMap)) {
    resultados_tudo += `
      <div class="item-resposta">
        <h2 class="titulo">${dado.titulo}</h2>
        <p class="description">${dado.descricao}
          <a class="more-info" href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </p>
      </div>`;
  }

  // Seleciona o elemento HTML onde os resultados serão exibidos
  const resultados_pesquisa = document.getElementById('Campo-Resposta');
  // Atualiza o conteúdo do elemento com os resultados gerados
  resultados_pesquisa.innerHTML = resultados_tudo;
  console.log("Resultados completos exibidos");
}

// Define a função Pesquisar e outras dentro do escopo de DOMContentLoaded, 
// ou seja, quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Mapeia sinônimos para os termos de pesquisa
  const sinonimosMap = {
    'ia': 'inteligência artificial',
    'ai': 'inteligência artificial',
    'artificial intelligence': 'inteligência artificial',
    'celular': 'celulares',
    'smartphone': 'celulares',
    'computador': 'computadores',
    'pc': 'computadores',
    'desktop': 'computadores',
    'laptop': 'computadores',
    'realidade virtual': 'realidade virtual e aumentada',
    'rv': 'realidade virtual e aumentada',
    'realidade aumentada': 'realidade virtual e aumentada',
    'ra': 'realidade virtual e aumentada',
    'block chain': 'blockchain',
    'block-chain': 'blockchain',
    'cloud computing': 'computação em nuvem',
    'nuvem': 'computação em nuvem',
    '5g': '5g',
    'iot': 'internet das coisas',
    'internet of things': 'internet das coisas',
    'quantum computing': 'computação quântica',
    'machine learning': 'aprendizado de máquina',
    'ml': 'aprendizado de máquina',
    'neural networks': 'redes neurais',
    'segurança digital': 'segurança cibernética',
    'cybersecurity': 'segurança cibernética',
    'robotics': 'robótica',
    'realidade mista': 'realidade mista',
    'mixed reality': 'realidade mista',
    'edge': 'edge computing',
    'ux design': 'design de experiência do usuário',
    'user experience': 'design de experiência do usuário',
    'api': 'interface de programação de aplicações',
    'apis': 'interface de programação de aplicações',
    'cloud storage': 'armazenamento em nuvem',
    'networking': 'tecnologia de redes',
    'web development': 'desenvolvimento web',
    'software development': 'desenvolvimento de software',
    'content automation': 'geração de conteúdo automatizado',
    'facial recognition': 'tecnologia de reconhecimento facial',
    'natural language processing': 'tecnologia de voz e linguagem natural',
    'nlp': 'tecnologia de voz e linguagem natural',
    'sensors': 'tecnologia de sensores',
    '3d printing': 'impressão 3d',
    'bateria': 'tecnologia de bateria e armazenamento de energia',
    'energy storage': 'tecnologia de bateria e armazenamento de energia',
    'satellite communication': 'tecnologia de comunicação por satélite',
    'global navigation systems': 'tecnologia de sistemas de navegação global',
    'gps': 'tecnologia de sistemas de navegação global',
    'digital printing': 'tecnologia de impressão digital',
    'data analytics': 'tecnologia de análise de dados',
  };

  // Seleciona os elementos do DOM que serão usados
  const btn_pesquisa = document.getElementById('Pesquisar');
  const input = document.getElementById('search');
  const resultados_pesquisa = document.getElementById('Campo-Resposta');
  const alertBox = document.getElementById('alert');

  // Adiciona um evento ao botão de pesquisa para chamar a função Pesquisar
  btn_pesquisa.addEventListener('click', Pesquisar);

  // Função para remover acentos do texto
  function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Função responsável pela busca
  function Pesquisar() {
    // Normaliza o valor do input para evitar problemas com maiúsculas e acentos
    let input_vlr = input.value.trim().toLowerCase();
    input_vlr = removerAcentos(input_vlr);

    // Verifica se o campo de pesquisa está vazio
    if (input_vlr === '' || input_vlr === null) {
      alertBox.innerHTML = `<p>O Campo Não Pode Estar Vazio.</p>`;
      alertBox.style.display = 'block';
      resultados_pesquisa.innerHTML = '';
      input.value = "";
      return;
    }

    // Log para depuração do valor do input
    console.log("Valor de input normalizado:", input_vlr);

    // Verifica se o valor do input tem um sinônimo no mapa
    if (sinonimosMap[input_vlr]) {
      input_vlr = sinonimosMap[input_vlr];
      console.log("Sinônimo encontrado:", input_vlr);
    }

    // Busca o item no window.dadosMap com base no título do dado
    const item = Object.values(window.dadosMap).find(dado => 
      removerAcentos(dado.titulo.toLowerCase()) === removerAcentos(input_vlr)
    );

    // Se o item for encontrado, exibe os resultados
    if (item) {
      const Resultados = `
        <div class="item-resposta">
          <h2 class="titulo">${item.titulo}</h2>
          <p class="description">${item.descricao}
            <a class="more-info" href="${item.link}" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
          </p>
        </div>`;
      resultados_pesquisa.innerHTML = Resultados;
      alertBox.style.display = 'none'; // Esconde a caixa de alerta
      adicionarHistorico(item); // Adiciona o item ao histórico
    } else {
      // Se nenhum resultado for encontrado, exibe uma mensagem de alerta
      alertBox.innerHTML = `<p>Nenhum resultado encontrado para "${input.value}".</p>`;
      alertBox.style.display = 'block';
      resultados_pesquisa.innerHTML = '';
    }
    input.value = ""; // Limpa o campo de pesquisa
  }

  // Função para adicionar um item ao histórico
  function adicionarHistorico(item) {
    // Cria um objeto para o item a ser adicionado ao histórico
    const itemHistorico = {
      titulo: item.titulo,
      descricao: item.descricao,
      link: item.link
    };

    console.log("Adicionando item ao histórico:", itemHistorico); // Log para depuração

    // Recupera o histórico armazenado no localStorage ou inicializa como um array vazio
    let historico = JSON.parse(localStorage.getItem('historico') || '[]');

    // Verifica se o item já está presente no histórico
    const itemExistente = historico.some(h => h.titulo === item.titulo);

    // Se o item não existir no histórico, ele é adicionado
    if (!itemExistente) {
      historico.push(itemHistorico);
      console.log("Item adicionado ao histórico:", itemHistorico); // Log de sucesso
    } else {
      console.log("Item já existe no histórico, não será adicionado novamente."); // Log para item duplicado
    }

    // Atualiza o localStorage com o novo histórico
    localStorage.setItem('historico', JSON.stringify(historico));

    // Loga o histórico atualizado para conferência
    console.log("Histórico atualizado:", historico);
  }
});
