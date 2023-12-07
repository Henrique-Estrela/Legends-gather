const signupForm = document.getElementById('signupForm');


signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const nickname = document.getElementById('signupNickname').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar se os campos de senha coincidem
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Senhas não coincidem. Por favor, tente novamente.",
        background: "var(--d_color8)",
        color: "#fff",
        confirmButtonColor: "var(--d_color5)",
        icon: "info",
        iconColor: "#fff"
    });
      return;
    }

    // Obter usuários existentes do localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o email já está cadastrado
    const existingUser = existingUsers.find(user => user.email === email);

    if (existingUser) {
      Swal.fire({
        title: "Este email já está cadastrado. Por favor, use outro.",
        background: "var(--d_color8)",
        color: "#fff",
        confirmButtonColor: "var(--d_color5)",
        icon: "info",
        iconColor: "#fff"
    });
    } else {
      // Adicionar novo usuário à lista
      existingUsers.push({ email, nickname, password });

      // Armazenar usuários atualizados no localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      Swal.fire({
        title: "Cadastro realizado com sucesso!",
        background: "var(--d_color8)",
        color: "#fff",
        confirmButtonColor: "var(--d_color5)",
        icon: "info",
        iconColor: "#fff"
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = " "
        }else {
          window.location.href = " "
        }
      })
    }
});

