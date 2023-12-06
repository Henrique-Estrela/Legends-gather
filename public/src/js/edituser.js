import * as functions from "./functions.js";

var edituser = document.querySelector(".edituser");

var inputfile = document.querySelector('#input1');

var valorExistente1 = document.querySelector(".imgusuario").src;
var valorExistente2 = document.querySelector(".inputname").value;
var valorExistente3 = document.querySelector(".inputemail").value;
var valorExistente4 = document.querySelector(".inputsenha").value;



edituser.addEventListener("click", function() {
    
  
    
    
    Swal.fire({
        title: 'Editar Usuário',
        html:'<div class="center">'+
        '<div class="container-editimguser">'+
            '<label for="input1" class="custom-file-label">'+
            '<input type="file" id="input1" accept="image/*" class="custom-file-input">'+
            '<img class="editimguser" src="'+ valorExistente1 +'" alt="Usuario-editar">'+
            '</label>'+
        '</div>'+
        '<label for="nick">Nickname: </label> <input id="input2" name="nick" class="edit swal2-input" value="' + valorExistente2 + '">' +
        
        '<label for="email">Email: </label> <input id="input3" name="email" class="edit swal2-input" value="' + valorExistente3 + '">' +       
        
        '<label for="senha">Senha: </label> <input id="input4" name="senha" class="edit swal2-input" value="' + valorExistente4 + '">' 
        
        +'</div>'
        ,
        confirmButtonText: 'Salvar',
        customClass: {
            container: 'modal-customizado'
        },
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
          // Aqui você pode acessar os valores dos inputs usando o JavaScript
          const input1 = document.getElementById('input1').src;
          const input2 = document.getElementById('input2').value;
          const input3 = document.getElementById('input3').value;
          const input4 = document.getElementById('input4').value;
          
          // Faça algo com os valores, por exemplo, exibindo-os em um alerta
          Swal.fire({
              title: 'Valores dos Inputs',
              html: `Input 1: ${input1}<br>Input 2: ${input2}<br>Input 2: ${input3}<br>Input 2: ${input4}`
            });
        }
    });

  

});


// <<<< Algo a se implementar depois >>>>



// let imageDataUrl;

// inputfile.addEventListener('change', function(event) {
// const input = event.target;
// const file = input.files[0];

// if (file) {
//     const reader = new FileReader();

//     reader.onload = function (e) {
//     // Armazena a URL da imagem na variável
//     imageDataUrl = e.target.result;
//     // Aqui você pode usar imageDataUrl conforme necessário
//     console.log('URL de dados da imagem:', imageDataUrl);

//     valorExistente1 = imageDataUrl; 
//     };

//     // Lê o conteúdo do arquivo como um URL de dados
//     reader.readAsDataURL(file);
// }
// });

