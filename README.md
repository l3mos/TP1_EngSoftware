# Trabalho Prático 1 - Engenharia de Software

## Membros da Equipe
- Gabriel Lemos - 2021032056 : Desenvolvedor Full Stack
- Lucas Duarte -  2014015877: Desenvolvedor Full Stack
- Camila Nicola -  2021423837 : Desenvolvedora Full Stack
- Lucas Santos Teles - 2017014995 : Desenvolvedor Full Stack
 
## Backlog do Produto
Deseja-se implementar um sistema de gerenciamento de compra de mercadorias, em que seja capaz de realizar as seguintes tarefas, tanto como usuário quanto como administardor do sistema:
- como vendedor, eu quero conseguir ver a quantidade de cada material do estoque
- como vendedor, eu quero conseguir registrar uma venda
- como vendedor, eu quero pesquisar um produto e ver as características dele 
- como vendedor, eu quero sinalizar que a contagem do sistema está incorreto
- como gerente, eu quero conseguir adicionar produtos ao sistema
- como gerente, eu quero ver as vendas registradas
- como gerente, eu quero conseguir alterar o preço dos produtos
- como gerente, eu quero dar descontos em produtos e indicar que eles estão em promoção
- como vendedor, eu quero conseguir filtrar os produtos por tipo
- como vendedor, eu quero conseguir ordenar os produtos de uma busca por preço
- como gerente, eu quero receber notificações sobre produtos que estão acabando
- como vendedor, eu quero conseguir notificar o gerente sobre a necessidade de mais material

## Backlog da Sprint
História #1: Como um gerente, eu quero adicionar usuários.

Tarefas e responsáveis:
- Instalar Node.js e Express. [Lucas Teles]
- Criar um sistema de login. [Camila]
- Criar uma tela de login e integrar com o sistema criado. [-]
- Usar o email para definir quem tem acesso ao estoque. [-]


História #2: Como um administrador, eu quero cadastrar novos itens no estoque.

Tarefas e responsáveis:
- Instalar banco de dados. [-]
- Instalar Node.js e Express. [-]
- Criar as primeiras tabelas. [-]
- Garantir que os administradores possam acrescentar nova linhas na tabela de produtos. [-]
- Implementar a logica de criar e editar itens. [-]


História #3: Como um usuário, eu quero listar os produtos no estoque.

Tarefas e responsáveis:

- Criar tabela de listagem dos produtos. [-]
- Criar interface de visualização da lista [-]
- Criar logica de consulta do banco de dados. [-]
- Criar logica de listagem de produtos. [-]


História #4: Como um usuário, eu quero ver e alterar a quantidade de itens em estoque.

Tarefas e responsáveis:

- Implementar a visualização de itens no estoque [-]
- Implementar a mudança da quantidade de cada instancia do banco de dados. [-]
- Atualizar no banco de dados a quantidade de itens após a alteração [-]


História #5: Como um gerente, eu quero aplicar desconto aos itens que eu desejar.

Tarefas e responsáveis:

- Criar lógica de pesquisa de itens no banco de dados. [-]
- Criar indicador visual de mudança de preço (site) [-]
- Criar lógica de redução de preço no produto [-]
- Atualizar o preço do produto no estoque [-]


História #6: Como um usuário, eu quero pesquisar itens e filtrar os produtos por preço e tipo.

Tarefas e responsáveis:

- Criar lógica de pesquisa de itens utilizando algum determinado parâmetro (preço, tipo, etc). [-]
- Criar barra de Pesquisa (front end). [-]
- Criar barra de Filtragem (front end). [-]
- Criar atalho de Ordenação (front end)

História #7: Como gerente eu quero poder saber quais produtos estão acabando

Tarefas e responsáveis:

- Criar lógica de verificação da quantidade de itens a cada venda, caso esteja abaixo de um valor estipulado, avisar ao usuário da plataforma. [-]
- Criar ícone de notificação de quantidade baixa de produto (front end) [-]

  
## Tecnologias
- Python, JavaScript, NodeJs, SQL, HTML (a princípio)
