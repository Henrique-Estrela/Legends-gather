import * as functions from "./functions.js";

const theme_btn = document.querySelector("#toggletheme");



theme_btn.addEventListener('click', function () {
    functions.toggle_ligth_mode();

    localStorage.removeItem("ligth");

    if (document.body.classList.contains("ligth")) {
        localStorage.setItem("ligth", 1);
    };
});
