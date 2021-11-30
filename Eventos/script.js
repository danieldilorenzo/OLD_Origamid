/**
 *
 * addEventListener
 *
 * Adiciona uma função ao elemento, chamada de callback
 * que será ativada assim que um certo evento ocorrer nesse elemento
 *
 */

const img = document.querySelector("img");

function callback() {
  console.log("Clicou");
}

img.addEventListener("click", callback);
// ao ocorrer o clique (na imagem), ele chama a função

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget);
}
// função que mostra o elemento aonde aconteceu a ação (no caso,
//a lista de animais onde) ocorreu o clique

animaisLista.addEventListener("click", callbackLista);

/**
 * event.preventDefault()
 *
 * Previne o comportamento padrão (por exemplo, ir pra outra página ao clicar num link)
 */

const linkExterno = document.querySelector('a[href^="http"]');
// pegando o link que iria redirecionar

function handlelinkExterno(event) {
  event.preventDefault();
  console.log("Clicou!");
}
// essa função previne que ocorra o comportamento default (redirecionar
// para outra página), e executa o que mais tiver, no caso o console.log

linkExterno.addEventListener("click", handlelinkExterno);

/**
 *
 * This
 *
 * É uma palavra especial de JavaScript, que pode fazer referência a
 * diferentes objetos dependendo do contexto. No caso de eventos, ela fará
 * referência ao elemento em que o addEventListener foi adicionado
 *
 */

const imgem = document.querySelector("img");

// function Thiscallback(event) {
//   console.log(this);
//   console.log(this.getAttribute("src"));
// }

// imgem.addEventListener("click", Thiscallback);

// No caso acima, a função vai imprimir a "img"

/**
 *
 * Keyboard
 *
 * É possível também adicionar atalhos do teclado pra facilitar a navegação
 */

// function handleKeyboard(event) {
//   if (event.key === "a") document.body.classList.toggle("azul");
//   else if (event.key === "v") document.body.classList.toggle("vermelho");
// }
// window.addEventListener("keydown", callback);

const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
// retorna a imagem que está sendo clicada
//
//
//
//Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handlelink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handlelink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um element

// Se o usuário clicar na letra (t), aumente o texto do site

function handleclickT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleclickT);
