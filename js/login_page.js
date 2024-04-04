const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "vendedor" && password === "1234") { //linkar com as paginas iniciais do gerente e do vendedor quando elas forem criadas
        alert("You have successfully logged in.");
        location.reload();
    } 
    else if(username === "gerente" && password === "1234"){ 
        alert("You have successfully logged in.");
        location.reload();
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})