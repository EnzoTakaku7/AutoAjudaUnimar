

function login() {
    const username = document.getElementById('login-nome').value;
    const password = document.getElementById('login-senha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.username === username && user.password === password);
    
    if (usuario) {
        alert('Login bem-sucedido');
        window.location.href = 'home.html';
    }else{
        alert('Nome de usuário ou senha incorretos');
    }
}