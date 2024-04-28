const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Array para armazenar os dados do CSV
const dataset = {};

// Caminho para o arquivo CSV
const csvFilePath = 'dataset.csv';

// Lendo o arquivo CSV e criando o dataset
fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on('data', (row) => {
        // Adicionando cada linha do CSV ao dataset
        dataset[row.produto] = {
            preco: row.preco,
            descricao: row.descricao,
            quantidade: parseInt(row.quantidade)
        };
    })
    .on('end', () => {
        console.log('Dataset carregado com sucesso:', dataset);
    });

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
    res.json(dataset);
});

// Rota para atualizar a quantidade de um produto
app.put('/produtos/:nomeItem', (req, res) => {
    const { nomeItem } = req.params;
    const { quantidade } = req.body;

    if (dataset[nomeItem]) {
        dataset[nomeItem].quantidade -= quantidade;
        res.json(dataset[nomeItem]);
    } else {
        res.status(404).json({ error: `O produto ${nomeItem} não foi encontrado.` });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
