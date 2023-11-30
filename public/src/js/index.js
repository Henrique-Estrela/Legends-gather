import * as functions from "./functions.js";

/* 
---------------------------------------------
Variáveis
--------------------------------------------- 
*/

const tema_btn = document.querySelector("#teste");

const user_btn = document.querySelector("#userbtn");

var collapsed = document.querySelector("#collapsed");

var more_card = document.querySelector("#more");




/* 
---------------------------------------------
chamar funções
--------------------------------------------- 
*/
functions.loadtema()

window.onload = functions.check_width;
window.onresize = functions.check_width;

/* 
---------------------------------------------
Ações
--------------------------------------------- 
*/


user_btn.addEventListener("click", function () {
    if (collapsed.style.height == "15rem") {
        collapsed.style.height = "1rem";
        user_btn.classList.remove("active-userbtn");
    } else {
        collapsed.style.height = "15rem";
        user_btn.classList.add("active-userbtn");

    };
});

more_card.addEventListener("click", function () {
      functions.modal_card();
});


tema_btn.addEventListener("click", function () {
    functions.toggle_ligth_mode();

    localStorage.removeItem("ligth");

    if (document.body.classList.contains("ligth")) {
        localStorage.setItem("ligth", 1);
    };

});

// more_card.addEventListener("click", function () {
// //   functions.modal_card;
//     console.log("func");
// });
