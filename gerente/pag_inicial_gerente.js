// Selecionando o botão "Ver notificações"
const btnVerNotificacoes = document.querySelector('#bloco-notificacao .link-button');

// Adicionando um evento de clique ao botão "Ver notificações"
btnVerNotificacoes.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Redirecionar para a página de notificações
    window.location.href = "notificacoes.html";
});

// Selecionando o botão "Ver Histórico de vendas completo"
const btnVerHistoricoVendas = document.querySelector('#vendas .link-button');

// Adicionando um evento de clique ao botão "Ver Histórico de vendas completo"
btnVerHistoricoVendas.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Redirecionar para a página de vendas
    window.location.href = "vendas.html";
});

// Selecionando o botão "Produtos"
const btnVerProdutos = document.querySelector('nav ul li:nth-child(2) a');

// Adicionando um evento de clique ao botão "Produtos"
btnVerProdutos.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Redirecionar para a página de produtos
    window.location.href = "produtos.html";
});
