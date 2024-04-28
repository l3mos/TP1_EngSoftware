const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos do diretório raiz e seus subdiretórios
app.use(express.static('./'));

// Middleware para processar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Caminho para o arquivo JSON
const jsonFilePath = 'dataset.json';

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler arquivo JSON:', err);
            res.status(500).json({ error: 'Erro ao ler arquivo JSON.' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Rota para atualizar a quantidade de um produto
app.put('/produtos/:nomeItem', (req, res) => {
    const { nomeItem } = req.params;
    const { quantidade } = req.body;

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler arquivo JSON:', err);
            res.status(500).json({ error: 'Erro ao ler arquivo JSON.' });
            return;
        }

        const jsonData = JSON.parse(data);

        if (jsonData[nomeItem]) {
            jsonData[nomeItem] -= quantidade;

            // Escrever os dados atualizados de volta para o arquivo JSON
            fs.writeFile(jsonFilePath, JSON.stringify(jsonData), 'utf8', (err) => {
                if (err) {
                    console.error('Erro ao escrever arquivo JSON:', err);
                    res.status(500).json({ error: 'Erro ao escrever arquivo JSON.' });
                    return;
                }
                res.json({ message: 'Produto atualizado com sucesso.' });
            });
        } else {
            res.status(404).json({ error: `O produto ${nomeItem} não foi encontrado.` });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
