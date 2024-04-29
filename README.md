# Trabalho Prático 1 - Engenharia de Software

## Membros da Equipe
- Gabriel Lemos - 2021032056 : Desenvolvedor Backend
- Lucas Duarte -  2014015877: Desenvolvedor Frontend
- Camila Nicola -  2021423837 : Desenvolvedora Backend
- Lucas Santos Teles - 2017014995 : Desenvolvedor Frontend
 
## Backlog do Produto
Deseja-se implementar um sistema de gerenciamento de compra de mercadorias, em que seja capaz de realizar as seguintes tarefas, tanto como usuário quanto como administardor do sistema:
- como vendedor, eu quero conseguir ver a quantidade de cada material do estoque
- como vendedor, eu quero conseguir registrar uma venda
- como vendedor, eu quero pesquisar um produto e ver as características dele 
- como vendedor, eu quero sinalizar que a contagem do sistema está incorreto
- como vendedor, eu quero conseguir filtrar os produtos por tipo
- como vendedor, eu quero conseguir ordenar os produtos de uma busca por preço
- como vendedor, eu quero conseguir notificar o gerente sobre a necessidade de mais material
- como gerente, eu quero conseguir adicionar produtos ao sistema
- como gerente, eu quero ver as vendas registradas
- como gerente, eu quero conseguir alterar o preço dos produtos
- como gerente, eu quero dar descontos em produtos e indicar que eles estão em promoção
- como gerente, eu quero receber notificações sobre produtos que estão acabando


## Backlog da Sprint
História #1: Como um gerente, eu quero adicionar usuários.

Tarefas e responsáveis:
- Instalar Node.js e Express.
- Criar um sistema de login.
- Criar uma tela de login e integrar com o sistema criado.
- Criar tela inicial gerente e tela de cadastro de usuario.


História #2: Como um administrador, eu quero cadastrar novos itens no estoque.

Tarefas e responsáveis:
- Instalar banco de dados.
- Instalar Node.js e Express.
- Criar as primeiras tabelas.
- Garantir que os administradores possam acrescentar nova linhas na tabela de produtos.
- Implementar a logica de criar e editar itens.


História #3: Como um usuário, eu quero listar os produtos no estoque.

Tarefas e responsáveis:

- Criar tabela de listagem dos produtos.
- Criar interface de visualização da lista.
- Criar logica de consulta do banco de dados.
- Criar logica de listagem de produtos.


História #4: Como um usuário, eu quero ver e alterar a quantidade de itens em estoque.

Tarefas e responsáveis:

- Implementar a visualização de itens no estoque.
- Implementar a mudança da quantidade de cada instancia do banco de dados.
- Atualizar no banco de dados a quantidade de itens após a alteração.


História #5: Como um gerente, eu quero aplicar desconto aos itens que eu desejar.

Tarefas e responsáveis:

- Criar lógica de pesquisa de itens no banco de dados.
- Criar indicador visual de mudança de preço (site).
- Criar lógica de redução de preço no produto.
- Atualizar o preço do produto no estoque.


História #6: Como um usuário, eu quero pesquisar itens e filtrar os produtos por preço e tipo.

Tarefas e responsáveis:

- Criar lógica de pesquisa de itens utilizando algum determinado parâmetro (preço, tipo, etc).
- Criar barra de Pesquisa (front end).
- Criar barra de Filtragem (front end).
- Criar atalho de Ordenação (front end).

História #7: Como gerente eu quero poder saber quais produtos estão acabando

Tarefas e responsáveis:

- Criar lógica de verificação da quantidade de itens a cada venda, caso esteja abaixo de um valor estipulado, avisar ao usuário da plataforma.
- Criar ícone de notificação de quantidade baixa de produto (front end).

## Backlog da Sprint - Atualizada
História #1: Como um gerente, eu quero adicionar vendedores.

Tarefas e responsáveis:
- Instalar Node.js e Express. [Lucas Teles]
- Criar um sistema de login. [Gabriel Lemos]
- Criar uma tela de login e integrar com o sistema criado. [Lucas Duarte]
- Criar tela inicial gerente e tela de cadastro de usuário. [Camila Nicola]


História #2: Como um gerente, eu quero cadastrar novas vendas.

Tarefas e responsáveis:
- Instalar/configurar banco de dados. [Gabriel Lemos]
- Criar interface de inserção de vendas. [Lucas Duarte e Lucas Teles]
- Implementar lógica de criar itens. [Camila Nicola]
- Implementar lógica de limitar os produtos à sua quantidade no estoque. [Gabriel Lemos]


História #3: Como um usuário, eu quero listar os produtos no estoque.

Tarefas e responsáveis:

- Criar tabela de listagem dos produtos. [Gabriel Lemos]
- Criar interface de visualização da lista. [Lucas Duarte]
- Implementar logica de consulta do banco de dados. [Lucas Teles]
- Implementar logica de listagem de produtos. [Camila Nicola]

História #4: Como um gerente, gostaria de listar todas as vendas.

Tarefas e responsáveis:

- Criar página e interface da listagem das vendas. [Lucas Duarte e Lucas Teles]
- Criar seção com o total das vendas. [Lucas Duarte]
- Criar tabela das vendas. [Camila Nicola]
- Implementar lógica da listagem da tabela. [Gabriel Lemos]
- Implementar lógica do total de vendas. [Gabriel Lemos]

História #5: Como um gerente, gostaria de limpar a lista de vendas.

Tarefas e responsáveis:

- Criar interface e integração com a lógica da remoção das vendas. [Lucas Duarte e Lucas Teles]
- Implementar lógica da remoção das vendas. [Camila Nicola e Gabriel Lemos]

História #6: Como um gerente, gostaria de saber o último usuário criado.

Tarefas e responsáveis:

- Criar página e interface da notificação. [Lucas Duarte e Lucas Teles]
- Implementar lógica da exibicição da notificação. [Camila Nicola]
- Implementar lógica da criação da notificação. [Gabriel Lemos]

História #7: Como um gerente, gostaria de listar vendedores.

Tarefas e responsáveis:

- Criar interface da listagem, na página inicial. [Lucas Duarte e Lucas Teles]
- Criar integração da listagem com o backend. [Camila Nicola e Lucas Teles]
- Implementar lógica da criação da lista de vendedores. [Gabriel Lemos]

História #8: Como um gerente, gostaria de remover vendedores.

Tarefas e responsáveis:

- Criar interface da remoção, na página inicial. [Lucas Duarte e Lucas Teles]
- Implementar lógica da remoção de vendedores. [Camila Nicola e Gabriel Lemos]

  
## Tecnologias
- Python, JavaScript, NodeJs, SQL, HTML (a princípio)
