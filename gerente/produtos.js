document.addEventListener('DOMContentLoaded', () => {
    const tabelaVendas = document.getElementById('tabela-vendas');

    // Função para ler o arquivo CSV
    function lerCSV(arquivo, callback) {
        const request = new XMLHttpRequest();
        request.open('GET', arquivo, true);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                callback(request.responseText);
            }
        };
        request.send(null);
    }

    // Função para processar os dados do CSV e criar a tabela
    function processarCSV(dadosCSV) {
        const linhas = dadosCSV.split('\n');
        let htmlTabela = '';

        linhas.forEach((linha, indice) => {
            const colunas = linha.split(',');
            if (indice === 0) {
                htmlTabela += '<thead>';
                htmlTabela += '<tr>';
                colunas.forEach(coluna => {
                    htmlTabela += `<th>${coluna}</th>`;
                });
                htmlTabela += '</tr>';
                htmlTabela += '</thead>';
                htmlTabela += '<tbody>';
            } else {
                htmlTabela += '<tr>';
                colunas.forEach(coluna => {
                    htmlTabela += `<td>${coluna}</td>`;
                });
                htmlTabela += '</tr>';
            }
        });

        htmlTabela += '</tbody>';

        tabelaVendas.innerHTML = htmlTabela;
    }

    // Chamada para ler o arquivo CSV e processar os dados
    lerCSV('dataset.csv', processarCSV);
});
