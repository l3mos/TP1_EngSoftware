document.addEventListener('DOMContentLoaded', () => {
    const tabelaProdutos = document.getElementById('tabela-vendas');

    // Função para importar dados do CSV para a tabela
    function importarDadosCSV() {
        fetch('dataset.csv') // Altere 'dataset.csv' para o caminho do seu arquivo CSV
            .then(response => response.text())
            .then(text => {
                const linhas = text.trim().split('\n'); // Remove espaços em branco e quebra de linha
                tabelaProdutos.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

                linhas.forEach(linha => {
                    const colunas = linha.split(',');
                    if (colunas.length === 3) { // Verifica se há 3 colunas (nome, preço, quantidade)
                        const [nome, preco, quantidade] = colunas;
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td>${nome.trim()}</td>
                            <td>${parseFloat(preco)}</td>
                            <td>${parseInt(quantidade)}</td>
                        `;
                        tabelaProdutos.appendChild(tr);
                    } else {
                        console.warn('Ignorando linha inválida:', linha);
                    }
                });
            })
            .catch(error => {
                console.error('Erro ao ler arquivo CSV:', error);
            });
    }

    // Chama a função para importar os dados do CSV quando a página é carregada
    importarDadosCSV();
});
