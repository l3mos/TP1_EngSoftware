document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('corpo-tabela-funcionarios');
    const btnRemoverFuncionario = document.getElementById('btn-remover-funcionario');

    mostrarFuncionarios();

    btnRemoverFuncionario.addEventListener('click', removerFuncionario);

    function mostrarFuncionarios() {
        const users = getUsers();

        tbody.innerHTML = ''; // Limpa o corpo da tabela antes de preencher novamente

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
        const nomeFuncionario = document.getElementById('input-nome-funcionario').value.trim();
        if (nomeFuncionario === '') {
            alert('Por favor, digite o nome do funcionário.');
            return;
        }

        let users = getUsers();
        const index = users.findIndex(user => user.username === nomeFuncionario);
        if (index !== -1) {
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            mostrarFuncionarios(); // Atualiza a tabela após a remoção
        } else {
            alert('Funcionário não encontrado.');
        }
    }
});
