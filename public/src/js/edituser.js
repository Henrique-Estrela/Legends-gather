import * as functions from "./functions.js";

var edituser = document.querySelector(".edituser");


edituser.addEventListener("click", function() {


      Swal.fire({
        showDenyButton: true,
        background: "var(--d_color8)",
        color:"#fff",
        heightAuto: true,
        html: `
        <section class=" " id="pag1">
        <div class="container">
            <div class="progress-bar-container row">
                <div class="col-1" id="barraprog">  
                    <p class="numprog">1/3</p>
                </div>
                <div class="progress-bar-card col-10">
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 33%"></div>
                    </div>
                </div>
                <div class="col-1 center">
                    <button type="button" class="btnCloseFF"><a href="\public\views\home.html"><img src="\public\src\img\icon\Fechar.png" alt="" class="setaproximo"></a></button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="grade grade1" id=" grade1">
                        <div>
                            <img src="/public/src/img/exemplo-avatar.png" alt="pudim" id="pudimdecria">
                            <div id="editarimg">
                                <img src="/public/src/img/Pena.png" alt="pena" id="pena">
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="nome" class="nome">Nome:</label>
                            <input type="text" name="nome" id="inpnome" >
                        </div>
                        <div class="flex">
                            <div>
                                <label for="raca" class="raca">Raça:</label>
                                <input type="text" name="raca" id="inpraca" >
                            </div>
                            <div>
                                <label for="level" class="level">Nível:</label>
                                <input type="number" name="level" id="inplevel" >
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="grade grade2" id=" grade2">  
                        <div class="col-12">
                            <label for="classe" class="tex2">Classe:</label>
                            <input type="text" name="classe" class="w-100" id="" >
                        </div>
                        <div class="col-12">
                            <label for="tendencia" class="tex2">Tendência:</label>
                            <input type="text" name="tendencia" class="w-100" id="" >
                        </div>
                        <div class="col-12">
                            <label for="Antecedentes" class="tex2">Antecedentes:</label>
                            <input type="text" name="Antecedentes" class="Antecedentes" id="" >
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">

                    <div class="grade grade3" id=" grade3">
                        <div class="flex">
                            <div>
                                <label for="idade" class="tex3">Idade:</label>
                                <input type="text" name="idade" class="inpgrad3" id="idade" >
                            </div>
                            <div>
                                <label for="peso" class="tex3">Peso:</label>
                                <input type="text" name="peso" id="" class="inpgrad3" >
                            </div>
                        </div>
                        <div class="flex">
                            <div>
                                <label for="altura" class="tex3">Altura:</label>
                                <input type="text" name="altura" id="altura" class="inpgrad3" >
                            </div>
                            <div>
                                <label for="genero" class="tex3">Gênero:</label>
                                <input type="text" name="genero" id="" class="inpgrad3" >
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div class="center col-lg-6">
                    <button value="0" type="button" id="nextform" class="btn2 btn-criar">Próximo</button>
                </div>
            </div>
        </div>
    </section>
        `,
        confirmButtonColor:"var(--d_color5)",
        denyButtonColor:"var(--d_color5)",
        confirmButtonText: `
        <img src="../src/img/logoD&D.png" alt="D&D">
      `,
        denyButtonText: `
        <img src="../src/img/logoCC.png" alt="Call Of Cthulhu">

        `
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "criar_personagem.html"
        } else if (result.isDenied) {
          Swal.fire({
            title: "Em Desenvolvimento",
            background: "var(--d_color8)",
            color: "#fff",
            confirmButtonColor: "var(--d_color5)",
            icon: "info",
            iconColor: "#fff"
          });
        }
    });
})