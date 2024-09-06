

function cadastrarUsuario() {
    const username = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const password = document.getElementById('cadastro-senha').value;
    const confirmPassword = document.getElementById('cadastro-confirmarsenha').value;

    // Verificar o comprimento do username e da senha
    if (username.length < 4) {
        alert("O nome de usuário deve ter pelo menos 4 caracteres.");
        return;
    }

    if (password.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find((user) => user.username === username);
    if (usuarioExistente) {
        alert("Usuário já existe");
        return;
    }

    const novoUsuario = {
        username: username,
        email: email,
        password: password
    };
    usuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("Usuário cadastrado");
    window.location.href = "login.html";
}