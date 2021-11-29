/**
 *
 * addEventListener
 *
 * Adiciona uma função ao elemento, chamada de callback
 * que será ativada assim que um certo evento ocorrer nesse elemento
 *
 */

const img = document.querySelector("img");
img.addEventListener("click", function () {
  console.log("Clicou");
});
