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

    var img_logo = document.querySelector('.logo a img');

    const search = document.querySelector(".search");

    var link = document.querySelector('.logo a');

    if (widthwindow < 750) {
        link.href = "../views/usuario.html";
        img_logo.src = '../src/img/boneco2.png';
        img_logo.alt = 'user';

        search.classList.toggle("col-lg-8 col-sm-8")

    }else {
        img_logo.src = '../src/img/logo-image.png';
        img_logo.alt = 'Legends Gather';
    }
}



