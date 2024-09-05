let historicoArray = [];

function adicionarHistorico(item) {
  const itemHistorico = {
    titulo: item.titulo,
    descricao: item.descricao,
    link: item.link
  };

  console.log("Adicionando item ao histórico:", itemHistorico);

  const itemExistente = historicoArray.some(h => h.titulo === item.titulo);

  if (!itemExistente) {
    historicoArray.push(itemHistorico);
    console.log("Item adicionado ao histórico:", itemHistorico);
  } else {
    console.log("Item já existe no histórico, não será adicionado novamente.");
  }

  atualizarHistoricoVisualizacao();
}

function atualizarHistoricoVisualizacao() {
  const historicoCampo = document.querySelector('.historico-campo');
  historicoCampo.innerHTML = '';

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

function Deletar_pesquisa(button) {
  const itemHistorico = button.closest('.item-historico');
  if (itemHistorico) {
    const tituloParaDeletar = itemHistorico.querySelector('.titulo').textContent;
    historicoArray = historicoArray.filter(item => item.titulo !== tituloParaDeletar);
    atualizarHistoricoVisualizacao();
  }
}
