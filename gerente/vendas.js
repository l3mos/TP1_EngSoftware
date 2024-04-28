document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('corpo-tabela-vendas');
    const btnAdicionarVenda = document.getElementById('btnAdicionarVenda');
    const quantidadeTotalElement = document.getElementById('quantidade-total');
    const valorTotalElement = document.getElementById('valor-total');

    let vendas = [];

    // Verifica se existem vendas armazenadas na sessão e carrega
    if (sessionStorage.getItem('vendas')) {
        vendas = JSON.parse(sessionStorage.getItem('vendas'));
        mostrarVendas();
        mostrarVendasTotais();
    }

    btnAdicionarVenda.addEventListener('click', () => {
        const nomeItem = prompt("Insira o nome do item:");
        const quantidade = parseInt(prompt("Insira a quantidade vendida:"));

        fetch('dataset.csv') // Altere 'dataset.csv' para o caminho do seu arquivo CSV
            .then(response => response.text())
            .then(text => {
                const linhas = text.trim().split('\n');
                let encontrado = false;

                linhas.forEach(linha => {
                    const [nome, preco, estoque] = linha.split(',');

                    if (nome.trim() === nomeItem) {
                        encontrado = true;
                        const precoUnitario = parseFloat(preco);
                        const estoqueAtual = parseInt(estoque);

                        if (quantidade > 0 && quantidade <= estoqueAtual) {
                            const valorTotal = quantidade * precoUnitario;

                            const venda = {
                                nome: nome,
                                precoUnitario: precoUnitario,
                                quantidade: quantidade,
                                valorTotal: valorTotal
                            };

                            vendas.push(venda);
                            sessionStorage.setItem('vendas', JSON.stringify(vendas));
                            mostrarVendas();
                            mostrarVendasTotais();
                        } else {
                            console.error(`Quantidade inválida para venda do produto ${nomeItem}`);
                            alert(`Quantidade inválida para venda do produto ${nomeItem}`);
                        }
                    }
                });

                if (!encontrado) {
                    console.error(`O produto ${nomeItem} não foi encontrado.`);
                    alert(`O produto ${nomeItem} não foi encontrado.`);
                }
            })
            .catch(error => {
                console.error('Erro ao ler arquivo CSV:', error);
            });
    });

    function mostrarVendas() {
        tbody.innerHTML = ''; // Limpa o corpo da tabela antes de preencher novamente

        vendas.forEach(venda => {
            const newRow = tbody.insertRow(-1);
            newRow.innerHTML = `
                <td>${venda.nome}</td>
                <td>${venda.precoUnitario}</td>
                <td>${venda.quantidade}</td>
                <td>${venda.valorTotal}</td>
            `;
        });
    }

    function mostrarVendasTotais() {
        const quantidadeTotal = vendas.reduce((total, venda) => total + venda.quantidade, 0);
        const valorTotal = vendas.reduce((total, venda) => total + venda.valorTotal, 0);

        quantidadeTotalElement.textContent = `Total de ${quantidadeTotal} itens vendidos`;
        valorTotalElement.textContent = `Total de R$ ${valorTotal.toFixed(2)} em vendas`;
    }
});
