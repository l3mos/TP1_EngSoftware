document.addEventListener("DOMContentLoaded", function() {
    // Carregar dados da tabela de vendas do armazenamento local ao carregar a página
    carregarTabelaVendas();

    var btnAdicionarVenda = document.getElementById("btnAdicionarVenda");
    btnAdicionarVenda.addEventListener("click", adicionarVenda);
});

function adicionarVenda() {
    var nome = prompt("Digite o nome do produto:");
    var quantidade = parseInt(prompt("Digite a quantidade vendida:"));

    if (nome === null || quantidade === null || nome.trim() === "" || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    // Fazer uma requisição para o arquivo CSV para buscar o valor unitário e a quantidade disponível do produto
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var linhas = xhr.responseText.split('\n');
                var encontrado = false;
                var valorUnitario = 0;
                var quantidadeDisponivel = 0;
                for (var i = 0; i < linhas.length; i++) {
                    var dados = linhas[i].split(',');
                    if (dados[0] === nome) {
                        valorUnitario = parseFloat(dados[1]);
                        quantidadeDisponivel = parseInt(dados[2]);
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) {
                    alert("Produto não encontrado no dataset.");
                    return;
                }
                if (quantidade > quantidadeDisponivel) {
                    alert("Quantidade vendida maior do que a quantidade disponível no estoque.");
                    return;
                }
                // Calcular o preço da venda e o preço total
                var precoVenda = valorUnitario * quantidade;
                var linha = "<tr><td>" + nome + "</td><td>" + valorUnitario.toFixed(2) + "</td><td>" + quantidade + "</td><td>" + precoVenda.toFixed(2) + "</td></tr>";
                document.getElementById("corpo-tabela-vendas").innerHTML += linha;
                // Atualizar o total de vendas
                atualizarTotalVendas();
                // Salvar os dados da tabela de vendas no armazenamento local
                salvarTabelaVendas();
            } else {
                alert("Erro ao carregar o arquivo.");
            }
        }
    };
    xhr.open("GET", "dataset.csv", true);
    xhr.send();
}


function atualizarTotalVendas() {
    var totalQuantidade = 0;
    var totalValor = 0;

    var linhas = document.querySelectorAll("#corpo-tabela-vendas tr");
    linhas.forEach(function(linha) {
        var quantidade = parseInt(linha.cells[2].textContent);
        var precoVenda = parseFloat(linha.cells[3].textContent);
        totalQuantidade += quantidade;
        totalValor += precoVenda;
    });

    document.getElementById("quantidade-total").textContent = "Quantidade Total: " + totalQuantidade;
    document.getElementById("valor-total").textContent = "Valor Total: " + totalValor.toFixed(2);
}

function salvarTabelaVendas() {
    var tabelaVendasHTML = document.getElementById("corpo-tabela-vendas").innerHTML;
    localStorage.setItem("tabelaVendas", tabelaVendasHTML);
}

function carregarTabelaVendas() {
    var tabelaVendasHTML = localStorage.getItem("tabelaVendas");
    if (tabelaVendasHTML) {
        document.getElementById("corpo-tabela-vendas").innerHTML = tabelaVendasHTML;
        // Atualizar o total de vendas ao carregar os dados da tabela
        atualizarTotalVendas();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Carregar dados da tabela de vendas do armazenamento local ao carregar a página
    carregarTabelaVendas();

    var btnAdicionarVenda = document.getElementById("btnAdicionarVenda");
    btnAdicionarVenda.addEventListener("click", adicionarVenda);

    var btnLimparVendas = document.getElementById("btnLimparVendas");
    btnLimparVendas.addEventListener("click", limparVendas);
});

function limparVendas() {
    // Limpar a tabela de vendas
    document.getElementById("corpo-tabela-vendas").innerHTML = "";
    // Atualizar o total de vendas após limpar a tabela
    atualizarTotalVendas();
    // Salvar os dados da tabela de vendas vazia no armazenamento local
    salvarTabelaVendas();
}

// A função salvarTabelaVendas() e carregarTabelaVendas() permanecem as mesmas
