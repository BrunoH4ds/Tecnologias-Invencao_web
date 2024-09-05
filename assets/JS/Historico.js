// Array para armazenar o histórico de itens
let historicoArray = [];

// Função para adicionar um item ao histórico
function adicionarHistorico(item) {
  // Cria um objeto com as informações do item
  const itemHistorico = {
    titulo: item.titulo,
    descricao: item.descricao,
    link: item.link
  };

  console.log("Adicionando item ao histórico:", itemHistorico);

  // Verifica se o item já existe no histórico
  const itemExistente = historicoArray.some(h => h.titulo === item.titulo);

  if (!itemExistente) {
    // Adiciona o item ao array se não existir
    historicoArray.push(itemHistorico);
    console.log("Item adicionado ao histórico:", itemHistorico);
  } else {
    console.log("Item já existe no histórico, não será adicionado novamente.");
  }

  // Atualiza a visualização do histórico
  atualizarHistoricoVisualizacao();
}

// Função para atualizar a visualização do histórico na página
function atualizarHistoricoVisualizacao() {
  const historicoCampo = document.querySelector('.historico-campo');
  historicoCampo.innerHTML = ''; // Limpa a visualização atual

  // Adiciona cada item do histórico à página
  historicoArray.forEach(item => {
    const itemHistorico = document.createElement('div');
    itemHistorico.className = 'item-historico';
    itemHistorico.innerHTML = `
      <div class="item-resposta">
        <div class='header'>
          <h2 class="titulo">${item.titulo}</h2>
          <button onclick="Deletar_pesquisa(this)" class="deletar"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
        <p class="description">
          ${item.descricao}
          <a class="more-info" href="${item.link}" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </p>
      </div>
    `;
    historicoCampo.appendChild(itemHistorico);
  });
}

// Função para deletar um item do histórico
function Deletar_pesquisa(button) {
  const itemHistorico = button.closest('.item-historico');
  if (itemHistorico) {
    const tituloParaDeletar = itemHistorico.querySelector('.titulo').textContent;
    // Remove o item do array de histórico
    historicoArray = historicoArray.filter(item => item.titulo !== tituloParaDeletar);
    atualizarHistoricoVisualizacao(); // Atualiza a visualização do histórico
  }
}
// Disponibiliza a função globalmente para ser usada em outros scripts
window.adicionarHistorico = adicionarHistorico;
