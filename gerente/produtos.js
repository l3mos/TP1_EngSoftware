document.addEventListener('DOMContentLoaded', function() {
    const produtosTable = document.getElementById('produtos-table');

    fetch('dataset.csv')
        .then(response => response.text())
        .then(csv => {
            const lines = csv.split('\n');
            let tableHTML = '<thead><tr>';

            lines.forEach((line, index) => {
                const columns = line.split(',');

                // Cria o cabeçalho da tabela na primeira iteração
                if (index === 0) {
                    columns.forEach(column => {
                        tableHTML += `<th>${column}</th>`;
                    });
                    tableHTML += '</tr></thead><tbody>';
                } else {
                    tableHTML += '<tr>';
                    columns.forEach(column => {
                        tableHTML += `<td>${column}</td>`;
                    });
                    tableHTML += '</tr>';
                }
            });

            tableHTML += '</tbody>';
            produtosTable.innerHTML = tableHTML;
        });
});
