document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('corpo-tabela-funcionarios');
    const btnRemoverFuncionario = document.getElementById('btn-remover-funcionario');
    const inputNomeFuncionario = document.getElementById('input-nome-funcionario');
    const inputSenhaFuncionario = document.getElementById('input-senha-funcionario');

    mostrarFuncionarios();

    btnRemoverFuncionario.addEventListener('click', removerFuncionario);

    function mostrarFuncionarios() {
        const users = getUsers();

        tbody.innerHTML = '';

        users.forEach(user => {
            const newRow = tbody.insertRow();
            newRow.innerHTML = `
                <td>${user.username}</td>
                <td>${user.password}</td>
            `;
        });
    }

    function getUsers() {
        const usersJSON = localStorage.getItem('users');
        return usersJSON ? JSON.parse(usersJSON) : [];
    }

    function removerFuncionario() {
        const nomeFuncionario = inputNomeFuncionario.value.trim();
        if (nomeFuncionario === '') {
            alert('Por favor, digite o nome do funcionário.');
            return;
        }

        let users = getUsers();
        const index = users.findIndex(user => user.username === nomeFuncionario);
        if (index !== -1) {
            const removedUser = users.splice(index, 1)[0]; // Remover o usuário e armazenar o usuário removido
            localStorage.setItem('users', JSON.stringify(users));
            mostrarFuncionarios();
            
            // Armazenar a remoção do usuário para exibir na página de notificações
            localStorage.setItem('ultimaAcao', JSON.stringify({ acao: 'remover', usuario: removedUser }));
        } else {
            alert('Funcionário não encontrado.');
        }

        // Limpar campos de texto
        inputNomeFuncionario.value = '';
        inputSenhaFuncionario.value = '';
    }
});
