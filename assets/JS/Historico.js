document.addEventListener('DOMContentLoaded', () => {
  const historicoCampo = document.querySelector('.historico-campo');

  // Obtém o histórico armazenado no localStorage
  const historico = JSON.parse(localStorage.getItem('historico') || '[]');

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
    historicoCampo.appendChild(itemHistorico);
  });
});

function Deletar_pesquisa(button) {
  const itemHistorico = button.closest('.item-historico');
  if (itemHistorico) {
    itemHistorico.remove(); // Remove o item do histórico

    // Atualiza o localStorage
    const tituloParaDeletar = itemHistorico.querySelector('.titulo').textContent;
    let historico = JSON.parse(localStorage.getItem('historico') || '[]');
    historico = historico.filter(item => item.titulo !== tituloParaDeletar);
    localStorage.setItem('historico', JSON.stringify(historico));
  }
}
