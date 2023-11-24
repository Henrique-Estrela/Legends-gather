export function toggle_ligth_mode(){
    document.body.classList.toggle("ligth");
}

export function loadtema(){
    const ligthmode = localStorage.getItem("ligth");

    if (ligthmode) {
        toggle_ligth_mode();
    }
}
