export function toggle_ligth_mode(){
    document.body.classList.toggle("ligth");
}

export function loadtema(){
    const ligthmode = localStorage.getItem("ligth");

    if (ligthmode) {
        toggle_ligth_mode();
    }
}

export function verificarLargura() {
    var larguraJanela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var minhaImagem = document.querySelector('.logo a img');

    if (larguraJanela < 750) {
        minhaImagem.src = '../src/img/boneco2.png';
        minhaImagem.alt = 'user';
    } else {
        minhaImagem.src = '../src/img/logo-image.png';
        minhaImagem.alt = 'Legends Gather';
    }
}


