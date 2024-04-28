document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = registerForm.username.value;
        const password = registerForm.password.value;
        const confirmPassword = registerForm['confirm-password'].value;

        if (password !== confirmPassword) {
            // Escrever de uma forma melhor
            alert("Senhas diferentes. Tente novamente.");
            return;
        }

        // Verifica se o usuário já existe
        const users = getUsers();
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("Usuário já existe. Escolha outro nome de usuário.");
            return;
        }

        // Adiciona o novo usuário ao vetor de usuários
        users.push({ username, password });
        saveUsers(users);

        alert("Usuário registrado com sucesso!");

        // Retorna para a página de cadastro vazia
        window.location.href = "register.html";
    });
});

function getUsers() {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}