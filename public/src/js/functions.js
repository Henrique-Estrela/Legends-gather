export function toggle_ligth_mode(){
    document.body.classList.toggle("ligth");
}

export function loadtema(){
    const ligthmode = localStorage.getItem("ligth");

    if (ligthmode) {
        toggle_ligth_mode();
    }
}

export function check_width() {
    var widthwindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var img_logo = document.querySelector('header.mobile .logo a img');

    var link = document.querySelector('header.mobile .logo a');

    if (widthwindow < 750) {
        link.href = "../views/usuario.html";
        img_logo.src = '../src/img/boneco2.png';
        img_logo.alt = 'user';

    }else {
        img_logo.src = '../src/img/logo-image.png';
        img_logo.alt = 'Legends Gather';
    }
}

export function modal_card() {
    Swal.fire({
        title: "Qual tipo de ficha?",
        showDenyButton: true,
        background: "var(--d_color8)",
        color:"#fff",
        heightAuto: false,
        confirmButtonColor:"var(--d_color5)",
        denyButtonColor:"var(--d_color5)",
        confirmButtonText: `
        <img src="../src/img/logoD&D.png" alt="D&D">
      `,
        denyButtonText: `
        <img src="../src/img/logoCC.png" alt="Call Of Cthulhu">

        `
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "criar_personagem.html"
        } else if (result.isDenied) {
          Swal.fire({
            title: "Em Desenvolvimento",
            background: "var(--d_color8)",
            color: "#fff",
            confirmButtonColor: "var(--d_color5)",
            icon: "info",
            iconColor: "#fff"
          });
        }
    });
}



