import * as functions from "./functions.js";

/* 
---------------------------------------------
Variáveis
--------------------------------------------- 
*/

const tema_btn = document.querySelector("#teste");





/* 
---------------------------------------------
chamar funções
--------------------------------------------- 
*/
functions.loadtema()

window.onload = functions.verificarLargura;
window.onresize = functions.verificarLargura;

/* 
---------------------------------------------
Ações
--------------------------------------------- 
*/


tema_btn.addEventListener("click", function () {
    functions.toggle_ligth_mode();

    localStorage.removeItem("ligth");

    if (document.body.classList.contains("ligth")) {
        localStorage.setItem("ligth", 1);
    }

});
