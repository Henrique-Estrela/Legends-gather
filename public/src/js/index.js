function toggle_ligth_mode() {
    document.body.classList.toggle("ligth")
}

function loadtema() {
    const ligthmode = localStorage.getItem("ligth")

    if (ligthmode) {
        toggle_ligth_mode()
    }
}




loadtema()

var tema_btn = document.querySelector("#teste")

tema_btn.addEventListener("click", function () {
    toggle_ligth_mode()
})