document.addEventListener('DOMContentLoaded', () => {
    const listaNotificacoes = document.getElementById('lista-notificacoes');

    // Mostrar notificações ao carregar a página
    mostrarNotificacoes();

    // Atualizar notificações sempre que houver uma alteração nos dados
    window.addEventListener('storage', mostrarNotificacoes);

    function mostrarNotificacoes() {
        listaNotificacoes.innerHTML = ''; // Limpa as notificações existentes

        const ultimoFuncionarioAdicionadoJSON = localStorage.getItem('ultimoFuncionarioAdicionado');
        const ultimaAcaoJSON = localStorage.getItem('ultimaAcao'); // Obter informações sobre a última ação realizada
        
        if (ultimoFuncionarioAdicionadoJSON) {
            const ultimoFuncionarioAdicionado = JSON.parse(ultimoFuncionarioAdicionadoJSON);
        
            const novaNotificacao = document.createElement('li');
            novaNotificacao.textContent = `Novo funcionário adicionado: Nome: ${ultimoFuncionarioAdicionado.username}, Senha: ${ultimoFuncionarioAdicionado.password}`;
        
            listaNotificacoes.appendChild(novaNotificacao);
        } else if (ultimaAcaoJSON) { // Verificar se houve uma ação
            const ultimaAcao = JSON.parse(ultimaAcaoJSON);
            
            if (ultimaAcao.acao === 'remover') { // Verificar se a última ação foi remover um usuário
                const usuarioRemovido = ultimaAcao.usuario;
                
                const novaNotificacao = document.createElement('li');
                novaNotificacao.textContent = `Usuário removido: Nome: ${usuarioRemovido.username}, Senha: ${usuarioRemovido.password}`;
                
                listaNotificacoes.appendChild(novaNotificacao);
            }
        }
    }
});
