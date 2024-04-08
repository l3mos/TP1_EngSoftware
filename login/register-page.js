document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = registerForm.username.value;
        const password = registerForm.password.value;
        const confirmPassword = registerForm['confirm-password'].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Verifica se o usuário já existe
        const users = getUsers();
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("Username already exists. Please choose a different one.");
            return;
        }

        // Adiciona o novo usuário ao vetor de usuários
        users.push({ username, password });
        saveUsers(users);

        alert("User registered successfully!");

        // Redireciona para a página de login após o registro bem-sucedido
        window.location.href = "login-page.html";
    });
});

function getUsers() {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}
