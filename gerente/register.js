document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registerForm.username.value;
        const password = registerForm.password.value;
        const confirmPassword = registerForm['confirm-password'].value;

        if (password !== confirmPassword) {
            alert('Senhas diferentes. Tente novamente.');
            return;
        }

        const users = getUsers();
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('Usuário já existe. Escolha outro nome de usuário.');
            return;
        }

        users.push({ username, password });
        saveUsers(users);

        // Armazena o último funcionário adicionado no Local Storage
        localStorage.setItem('ultimoFuncionarioAdicionado', JSON.stringify({ username, password }));

        alert('Usuário registrado com sucesso!');

        window.location.href = 'register.html';
    });

    function getUsers() {
        const usersJSON = localStorage.getItem('users');
        return usersJSON ? JSON.parse(usersJSON) : [];
    }

    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
});
