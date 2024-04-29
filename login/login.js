document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginErrorMsg = document.getElementById("login-error-msg");

    // Lista de gerentes
    const gerentes = [
        { username: "Lemos", password: "123" },
        { username: "Camila", password: "123" },
        { username: "Lucas", password: "123" }
    ];

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        // Verificar se o usuário e a senha correspondem a um gerente na lista
        const gerente = gerentes.find((gerente) => gerente.username === username && gerente.password === password);
        if (gerente) {
            window.location.href = '../gerente/pag_inicial_gerente.html';
        } else if (username === "vendedor" && password === "123") {
            window.location.href = '../vendedor/pag_inicial_vendedor.html';
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    });

});
