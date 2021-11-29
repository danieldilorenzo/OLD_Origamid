/**
 *
 * Height e Width
 *
 * São propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
 *
 * section.clientHeight   // height + padding (altura + preenchimento)
 * section.offsetHeight   //  height + padding + border (altura, preenchimento e bordas)
 * section.scrollHeight   //  height total, mesmo dentro do scroll
 *
 * Mesma coisa para o Width
 *
 *
 * Height = Altura
 * Width = Largura
 */

const listaAnimais = document.querySelector(".animais-lista");
console.log(listaAnimais);

const height = listaAnimais.scrollHeight;
console.log(height);

/**
 *
 * Pegar a distância entre o topo do elemento e o topo da página
 *
 * offsetTop e offsetLeft
 *
 * offsetTop = distância entre o topo do elemento e o topo da página
 * offsetLeft = distância entre o canto superior esquerdo do elemento,
 * para o canto esquerdo da página
 *
 */

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const raposah2_1 = document.querySelector("h2");

/**
 *
 * getBoundingClientRect()
 *
 * Método que retorna um objeto com valores de width, height
 * distâncias do elemento e mais
 *
 * Como se criasse um retângulo entre o elemento e mostrasse o
 * tamanho do retângulo, e a distância dele sob os outros elementos
 */

const rect = raposah2_1.getBoundingClientRect();
console.log(rect);

/**
 *
 * Window = janela do usuário
 */

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth /**pega o tamanho, mesmo com o console aberto */,
  window.outerHeight,
  window.pageYOffset /** quanto o eixo y (de cima a abaixo) já deu de scroll */,
  window.pageXOffset /** quanto o eixo x (de um lado para outro) já deu de scroll */
);

if (rect.top < 0) {
  console.log("Passou do elemento");
}
// dá um console.log quando o rect (aquele h2) passar do nível zero

const small = window.matchMedia("(max-width:600px)");
console.log(small);
// constante que retorna um valor booleano, no caso dando false se
// o a tela é menor que 600

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector("img");
const imgTop = primeiraImg.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens

function somaIMAGENS() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}
//console.log(imagem.offsetWidth);

// window.onload = function () {
//   somaIMAGENS;
// };

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("max-width:720px").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
