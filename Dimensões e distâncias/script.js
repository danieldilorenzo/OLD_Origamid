/**
 *  forEach
 *
 * Método que é utilizado de Array
 *
 *  O primeiro parâmetro é o callback, ou seja, a funcção que será ativada
 *  a cada item. Essa função pode receber três parâmetros: valorAtual, index e  array
 *
 * Alguns objetos que são array-like (parecem array) possuem esse método (NodeList possui, HTMLColection não)
 */

// const imgs = document.querySelectorAll("img");
// console.log(imgs);

// imgs.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

/**
 *
 *
 *"item" mostra cada imagem
 *"index" mostra a posição da imagem na array
 *"array" mostra todos os items da array
 *
 */

const titulos = document.getElementsByClassName("titulo"); //criando uma constante que pega todos os títulos
const titulosArray = Array.from(titulos); // transformando em Array

titulosArray.forEach(function (item) {
  console.log(item); // imprimindo todos os itens dessa Array
});

/**
 *
 * Arrow function elimina a obrigatoriedade na maioria das vezes de se escrever "function
 * "
 */

// titulosArray.forEach((item) => {
//   console.log(item);
// });

// let i = 0;
// imgs.forEach((item) => console.log(item));

// Mostre no console cada parágrafo do site

const paragr = document.querySelectorAll("p");
paragr.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console

paragr.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
