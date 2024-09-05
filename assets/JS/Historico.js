document.addEventListener('DOMContentLoaded', () => {
  const historicoCampo = document.querySelector('.historico-campo');

  // Verificar se o elemento de histórico existe
  if (!historicoCampo) {
    console.error('Elemento .historico-campo não encontrado no DOM.');
    return;
  }

  // Obtém o histórico armazenado no localStorage
  const historico = JSON.parse(localStorage.getItem('historico') || '[]');

  // Verifica se o histórico tem itens
  if (historico.length === 0) {
    console.log('Nenhum item no histórico.');
    return;
  }

  // Adiciona cada item ao histórico na página
  historico.forEach(item => {
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
    
    // Adiciona a nova div ao campo de histórico
    historicoCampo.appendChild(itemHistorico);
  });
});

// Função para deletar um item do histórico
function Deletar_pesquisa(button) {
  const itemHistorico = button.closest('.item-historico');
  if (itemHistorico) {
    itemHistorico.remove(); // Remove o item da interface

    // Atualiza o localStorage
    const tituloParaDeletar = itemHistorico.querySelector('.titulo').textContent;
    let historico = JSON.parse(localStorage.getItem('historico') || '[]');
    historico = historico.filter(item => item.titulo !== tituloParaDeletar);
    localStorage.setItem('historico', JSON.stringify(historico));
  }
}
