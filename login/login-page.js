document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();
    
        if ((username === "vendedor" || username === "gerente") && password === "123") {
            alert("You have successfully logged in.");
            if (username === "vendedor") {
                window.location.href = 'https://www.example.com/vendedor_dashboard.html';
            } else if (username === "gerente") {
                document.location.href  = 'pag_inicial/gerente/pag_inicial_gerente.html';
            }
        } else {
            loginErrorMsg.style.opacity = 1;        }
    });

});
