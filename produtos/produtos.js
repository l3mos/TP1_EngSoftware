const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Caminho para o arquivo CSV
const csvFilePath = '../dataset.csv';
// const csvFilePath = 'dataset.csv';

// Array para armazenar os dados do CSV
let dataset = [];

// Lendo o arquivo CSV e criando o dataset
fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on('data', (row) => {
        dataset.push(row);
    })
    .on('end', () => {
        console.log('Dataset carregado com sucesso:', dataset);
    });

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
    res.json(dataset);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});