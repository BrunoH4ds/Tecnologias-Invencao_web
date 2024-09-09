# 🧑‍💻 Invenção Web 🧑‍💻

# 💬 Descrição
O Invenção Web é um projeto criado para facilitar a descoberta e o aprendizado de novas tecnologias. Com uma simples pesquisa por nome ou abreviação, o usuário obtém uma descrição da tecnologia e um link para saber mais. A interface foi projetada para ser minimalista e funcional, oferecendo uma experiência fluida com acesso a um histórico de consultas anteriores.

# Funcionalidades
- Pesquisar tecnologias por nome ou abreviação.
- Suporte a sinônimos e variantes de termos.
- Histórico de pesquisas acessível para revisar consultas anteriores.
- Interface amigável e minimalista.
- Remoção de itens do histórico.
# Tecnologias Utilizadas
- HTML5, CSS3, JavaScript
- Banco de dados local (cache) para armazenamento temporário do histórico
- Material Design Icons: Biblioteca de ícones adicionais para personalização.
- https://brunoh4ds.github.io/Tecnologias-Invencao_web/
# Como Usar
1. Acesse o link do projeto no navegador: [Invenção Web](https://brunoh4ds.github.io/Tecnologias-Invencao_web/).
2. Insira o nome ou a abreviação de uma tecnologia na barra de pesquisa.
3. O sistema verificará o banco de dados e apresentará a descrição e um link para saber mais.
4. Se a pesquisa for bem-sucedida, ela será adicionada automaticamente ao histórico.
5. O histórico pode ser acessado em uma aba separada, e itens podem ser removidos.
# Como funciona?
A parte visual foi desenvolvida com foco em minimalismo, incluindo uma barra de busca, botão de pesquisa e um rodapé simples. No entanto, por trás da simplicidade visual, o código opera de forma eficiente. Aqui está o processo básico:

1. Entrada de dados:
O valor inserido na barra de pesquisa é transformado para minúsculas e, se o campo estiver vazio, uma mensagem de alerta é exibida. Se não estiver vazio, os acentos são removidos do valor.

2. Verificação de sinônimos:
O sistema busca o termo na lista de sinônimos. Caso exista, ele prossegue para a próxima etapa.

3. Busca no banco de dados:
O valor é então procurado no banco de dados. Se um termo correspondente for encontrado, o resultado da pesquisa é exibido no site. Caso contrário, uma mensagem de erro é apresentada.

4. Adição ao histórico:
Quando uma busca é bem-sucedida, o termo pesquisado é adicionado ao histórico. O sistema verifica o cache local (similar a um armazenamento temporário no navegador) para obter o histórico anterior, caso exista. Se o termo já estiver presente no histórico, ele não é adicionado novamente.

5. Atualização do histórico:
O histórico é atualizado automaticamente e enviado para a página de histórico. Lá, os dados são exibidos de forma clara para o usuário.

6. Remoção de itens do histórico:
Ao clicar no botão de deletar, o item é removido do histórico, e o banco de dados local é atualizado para evitar que o item reapareça.

# Instalação (Opcional)
1. Clone este repositório: git clone https://github.com/BrunoH4ds/Tecnologias-Invencao_web
2. Abra o arquivo index.html no navegador, caso deseje rodar localmente.
# Contribuição
- Fork o projeto.
- Crie uma nova branch: git checkout -b minha-nova-feature
- Envie suas mudanças: git commit -m 'Adiciona nova feature'
- Faça um push: git push origin minha-nova-feature
- Crie um Pull Request.
