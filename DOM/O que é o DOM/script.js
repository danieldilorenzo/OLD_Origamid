// DOM (Document Object Model) é uma interface que representa documentos HTML e XML
// através de objetos

const h1Selecionado = document.querySelector("h1");

const h1Classes = h1Selecionado.classList;

// window.alert(h1Selecionado);

console.log(h1Selecionado);
console.log(h1Classes);

function scrollSite() {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", function () {
  console.log("Clicou em", h1Selecionado.innerText);
});

h1Selecionado.addEventListener("click", scrollSite);

//Retorne a URL da página atual utilizando o objeto window

console.log(window.location.href);

//Seleciona o primeiro elemento da página que
// possua a classe ativo

// const teste = document.querySelector()
const funcaodeclasse = document.querySelector(".titulo-principal");
console.log(funcaodeclasse);

// Retorne a linguagem o navegador

console.log(window.navigator.language);

// Retorne a largura da janela
console.log(innerWidth, innerHeight);
