document.addEventListener('DOMContentLoaded', () => {
  const historicoCampo = document.querySelector('.historico-campo');
  console.log('Elemento historicoCampo encontrado:', historicoCampo);

  // Obtém o histórico armazenado no localStorage
  const historico = JSON.parse(localStorage.getItem('historico') || '[]');
  console.log('Dados do localStorage:', historico);

  // Adiciona cada item ao histórico na página
  if (historico.length > 0) {
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
  } else {
    const mensagemVazio = document.createElement('p');
    mensagemVazio.textContent = 'Nenhuma pesquisa foi realizada ainda.';
    historicoCampo.appendChild(mensagemVazio);
  }
});

function Deletar_pesquisa(button) {
  const itemHistorico = button.closest('.item-historico');
  if (itemHistorico) {
    const tituloParaDeletar = itemHistorico.querySelector('.titulo').textContent;
    itemHistorico.remove(); // Remove o item do DOM

    // Atualiza o localStorage removendo o
