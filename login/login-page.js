document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        if (checkCredentials(username, password)) {
            alert("You have successfully logged in."); // Mensagem de login correto
            location.reload();
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    });

    function checkCredentials(username, password) {
        // Verifica se há correspondência nos dados registrados
        const users = getUsers();
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                return true;
            }
        }
        return false;
    }

    function getUsers() {
        const usersJSON = localStorage.getItem('users');
        return usersJSON ? JSON.parse(usersJSON) : [];
    }
});
