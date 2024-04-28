document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registerForm.username.value;
        const password = registerForm.password.value;
        const confirmPassword = registerForm['confirm-password'].value;

        if (password !== confirmPassword) {
            // Escrever de uma forma melhor
            alert('Senhas diferentes. Tente novamente.');
            return;
        }

        // Verifica se o usuário já existe
        const users = getUsers();
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('Usuário já existe. Escolha outro nome de usuário.');
            return;
        }

        // Adiciona o novo usuário ao vetor de usuários
        users.push({ username, password });
        saveUsers(users);

        alert('Usuário registrado com sucesso!');

        // Retorna para a página de cadastro vazia
        window.location.href = 'register.html';
    });

    function getUsers() {
        const usersJSON = localStorage.getItem('users');
        return usersJSON ? JSON.parse(usersJSON) : [];
    }

    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    const tbody = document.getElementById('corpo-tabela-funcionarios');

    tbody.addEventListener('click', function(event) {
        if (event.target.classList.contains('remover-funcionario')) {
            const usernameToRemove = event.target.dataset.username;
            const users = getUsers();
            const updatedUsers = users.filter(user => user.username !== usernameToRemove);
            saveUsers(updatedUsers);
            mostrarFuncionarios();
        }
    });

    mostrarFuncionarios();

    function mostrarFuncionarios() {
        const users = getUsers();

        tbody.innerHTML = ''; // Limpa o corpo da tabela antes de preencher novamente

        users.forEach(user => {
            const newRow = tbody.insertRow(-1);
            newRow.innerHTML = `
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td><button class="remover-funcionario" data-username="${user.username}">Remover Funcionário</button></td>
            `;
        });
    }
});
