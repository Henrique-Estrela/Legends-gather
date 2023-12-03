export function Loading() {
  // Crie e adicione o HTML de loading ao DOM
  const telaLoad = document.createElement('div');
  telaLoad.classList.add('telaLoad');

  const preLoad = document.createElement('div');
  preLoad.classList.add('preLoad');

  telaLoad.appendChild(preLoad);
  document.body.appendChild(telaLoad);
  document.body.style.overflow = 'hidden';

  return telaLoad;  // Retorne o elemento criado para referência futura
}

export function hideLoading(element) {
  // Remova o HTML de loading do DOM
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
    document.body.style.overflow = 'auto';

  }
}


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

    var img_logo = document.querySelector('header.mobile .logo a img');

    var link = document.querySelector('header.mobile .logo a');

    if (widthwindow < 750) {
        link.href = "../views/usuario.html";
        img_logo.src = '../src/img/boneco2.png';
        img_logo.alt = 'user';

    }else {
        img_logo.src = '../src/img/logo-image.png';
        img_logo.alt = 'Legends Gather';
    }
}

export function modal_card() {
    Swal.fire({
        title: "Qual tipo de ficha?",
        showDenyButton: true,
        background: "var(--d_color8)",
        color:"#fff",
        heightAuto: false,
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
}

export function saveCardsToLocalStorage(existingCards){
  localStorage.setItem('cards', JSON.stringify(existingCards));
}

export function pull_card(cardContainer, existingCards) {

    // Adicionar os cards existentes ao carregar a página
    existingCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('cards-container', 'col-lg-3', 'col-sm-6');
      cardElement.innerHTML = card;
      cardContainer.appendChild(cardElement);
    });

}

export function push_card(){
  const info_card = {
    img: '../src/img/boneco1.png',
    href: '',
    name: 'Cleiton',
  };

  return info_card;
}

export function Make_card(cardContainer, existingCards) {

  
    var info_card = push_card();

    // Criar um novo elemento div para representar o card
    const newCard = document.createElement('div');
    newCard.classList.add('cards-container', 'col-lg-3', 'col-sm-6');

    // Adicionar o conteúdo específico ao card
    newCard.innerHTML = `
      <div class="cards">
        <div class="img-person">
          <img src="`+ info_card.img +`" alt="Nome personagem">
        </div>
        <p>`+ info_card.name +`</p>
        <a href="`+ info_card.href +`">
          <div class="ver-ficha">
            <i class="fa-solid fa-circle-info"></i>
          </div>
        </a>
      </div>
    `;

    // Adicionar o novo card ao contêiner de cards
    cardContainer.appendChild(newCard);

    // Adicionar o novo card ao array de cards existentes
    existingCards.push(newCard.outerHTML);

    saveCardsToLocalStorage(existingCards)
}

export function removeCard(cardContainer,existingCards, index){

  // Função para remover um card com base no índice
  // Remover o card do DOM
  cardContainer.removeChild(cardContainer.children[index]);

  // Remover o card do array de cards existentes
  existingCards.splice(index, 1);

  // Salvar os cards atualizados no localStorage
  saveCardsToLocalStorage(existingCards);
};

export function editEmpty(cardContainer, existingCards) {
  // Verifica se a lista está vazia
  if (existingCards.length === 0) {
    const caminhoDaImagem = '/public/src/img/editEmpty.png';

    // Criação da div
    const divElement = document.createElement('div');

    // Criação da imagem
    const imagemElement = document.createElement('img');
    imagemElement.classList.add("imgedit");
    
    imagemElement.src = caminhoDaImagem;

    // Adiciona a imagem à div
    divElement.appendChild(imagemElement);

    cardContainer.appendChild(divElement);

  } 
}