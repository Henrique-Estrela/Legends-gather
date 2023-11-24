import * as funcoes from "./functions.js";

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
funcoes.loadtema()



/* 
---------------------------------------------
Ações
--------------------------------------------- 
*/


tema_btn.addEventListener("click", function () {
    funcoes.toggle_ligth_mode()

    if (document.body.contains("ligth")) {
        
    }
});
