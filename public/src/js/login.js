
const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Obter usuários existentes do localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o email está cadastrado
    const existingUser = existingUsers.find(user => user.email === email);

    if (existingUser) {
    // Verificar a senha
    if (existingUser.password === password) {
        // Armazenar dados de login no localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email);

        // Redirecionar para a página de sucesso ou fazer outra ação desejada
        window.location.href = '/public/views/home.html';
    } else {
        Swal.fire({
            title: "Senha incorreta. Tente novamente.",
            background: "var(--d_color8)",
            color: "#fff",
            confirmButtonColor: "var(--d_color5)",
            icon: "info",
            iconColor: "#fff"
        });
    }
    } else {
        Swal.fire({
            title: "Email não cadastrado. Por favor, faça o cadastro.",
            background: "var(--d_color8)",
            color: "#fff",
            confirmButtonColor: "var(--d_color5)",
            icon: "info",
            iconColor: "#fff"
        });
    }
});



