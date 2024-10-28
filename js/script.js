function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar para outra página ou executar outra ação
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
