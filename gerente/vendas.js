const fetch = require('node-fetch');
const readlineSync = require('readline-sync');

const tabelaVendas = document.querySelector('#vendas table');

const adicionarVenda = () => {
    const nomeItem = readlineSync.question("Insira o nome do item: ");
    const quantidade = parseInt(readlineSync.question("Insira a quantidade vendida: "));

    fetch('http://127.0.0.1:5500/TP1_EngSoftware/gerente/produtos/' + nomeItem, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantidade })
    })
    .then(response => response.json())
    .then(produtoAtualizado => {
        atualizarTabelaVendas(produtoAtualizado);
    })
    .catch(error => {
        console.error('Erro ao adicionar venda:', error);
        alert(`Ocorreu um erro ao adicionar a venda para o produto ${nomeItem}.`);
    });
};

const atualizarTabelaVendas = (produtoAtualizado) => {
    tabelaVendas.innerHTML = `
        <tr>
            <td>Produto</td>
            <td>Quantidade</td>
        </tr>
    `;

    for (const produto in produtoAtualizado) {
        if (produtoAtualizado.hasOwnProperty(produto)) {
            tabelaVendas.innerHTML += `
                <tr>
                    <td>${produto}</td>
                    <td>${produtoAtualizado[produto].quantidade}</td>
                </tr>
            `;
        }
    }
};

// Carregar os dados do servidor ao carregar o script
fetch('http://127.0.0.1:5500/TP1_EngSoftware/gerente/produtos')
.then(response => response.json())
.then(data => {
    atualizarTabelaVendas(data);
})
.catch(error => {
    console.error('Erro ao carregar produtos:', error);
    alert('Ocorreu um erro ao carregar os produtos.');
});

// Simular o clique no botão de adicionar venda
adicionarVenda();
