const express = require('express')
const app = express()
const port = 3000

// Serve os arquivos estáticos do diretório raiz e seus subdiretórios
app.use(express.static('./'));

// Teste inicial no terminal
app.listen(port, () => { console.log(`Ouvindo na porta: ${port}`) })