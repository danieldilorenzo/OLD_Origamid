/**
 *
 * setTimeout
 *
 * Método assíncrono que ativa o callback após tempo. Não existe garantia
 * de que o código será exexcutado exatamente após o tempo, pois o callback entra
 * na fila e espera pela call stack estar vazia
 */

// function espera(texto) {
//   console.log(texto);
// }

// setTimeout(espera, 10000, "Passaram 10 segundos");

// /**
//  *
//  * Loops e setTimeout
//  *
//  * Um loop é executado rapidamente, em milissegundos. Se
//  * colocarmos um setTimeout dentro do loop, todos eles serão
//  * adicionados à Web Api praticamente no mesmo tempo. Um evento
//  * de setTimeout não espera o tempo do anterior acabar para iniciar
//  *
//  */

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300);
// }

// // i = 0. Enquanto i for menor que 20, adicione mais um
// // imprima i. Espere 300ms para começar

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }
// // Mesma função acima, mas com um pequeno intervalo, não de forma instantânea

// const btn = document.querySelector("button");
// btn.addEventListener("click", handleClick);

// function handleClick() {
//   setTimeout(() => {
//     this.classList.add("active");
//   }, 1000);
// }

// // setInterval
// //
// // ativar o callback toda vez que a quantidade de tempo passar

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, "Passou 1s");

// let i = 0;
// function callback() {
//   console.log(i++);
//   if (i > 10) {
//     clearIntervall(contarAte10);
//   }
// }

// Mude a cor da tela para azul e depois para vermelho a cada 10s

function mudarClasse() {
  document.body.classList.toggle("active");
}

setInterval(mudarClasse, 10000);

// Crie um cronômetro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar)

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
tempo.addEventListener("dblclick", reiniciarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}
function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled", "");
}
function reiniciarTempo() {
  tempo.innerText = 0;
  i = 0;
}
