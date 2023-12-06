import * as functions from "./functions.js";


var nextform = document.querySelectorAll("#nextform");

var formulario = document.getElementById('forms-card');


nextform[0].addEventListener('click', function() {
    functions.nextforms(nextform, 0);
});

nextform[1].addEventListener('click', function() {
    functions.nextforms(nextform, 1);
});


formulario.addEventListener('submit', function(event) {
    if (!functions.verificarCamposPreenchidos()) {
        event.preventDefault();
        Swal.fire({
            title: "Por favor, preencha todos os campos antes de enviar o formulário.",
            focusConfirm: false,
            confirmButtonText: `
              Ok
            `,
            background: "var(--d_color8)",
            color:"#fff"
        });
          
    }
});

