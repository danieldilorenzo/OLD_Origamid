// const doc = fetch("./doc.txt");

// // doc.then((resolucao) => {
// //   resolucao.text().then((body) => {
// //     const conteudo = document.querySelector(".conteudo");
// //     conteudo.innetText = body;
// //     console.log(body);
// //   });
// // });

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//   });

// /**
//  *
//  * Response
//  *
//  * O objeto response possuo um corpo com o conteúdo da resposta.
//  * Esse corpo pode ser transformado uilizando métodos do protótipo
//  * do objeto Response. Estes retornam outras promisses.
//  *
//  */

// /**
//  *
//  * .json()
//  *
//  * Um tipo de formato de dados muito utilizado com JavaScript é o
//  * JSON (JavaScript Object Notation), pelo fato dele possuir
//  * basicamente a mesma sintaxe que a de um objeto js. O .json()
//  * transforma um corpo em json em um objeto JavaScript
//  *
//  */

// const CEP = fetch("https://viacep.com.br/ws/05144000/json");

// CEP.then((resolucao) => {
//   return resolucao.json();
// }).then((body) => {
//   const conteudo = document.querySelector(".conteudo");
//   conteudo.innerText = body.bairro;
// });

// const cor = fetch("./style.css");

// cor
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;
//     console.log(style);
//     conteudo.appendChild(style);
//   });

// const CEP2 = fetch("https://viacep.com.br/ws/05144000/json");

// CEP2.then((r) => r.text()).then((body) => {
//   console.log(body);
// });
//
//
//// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
    });
}

// setInterval(fetchBtc, 1000 * 30);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector(".proxima");
const paragrafoPiada = document.querySelector(".piada");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((piada) => {
      paragrafoPiada.innerText = piada.value;
    });
}

btnProxima.addEventListener("click", puxarPiada);

puxarPiada();

function puxarPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
    });
}

puxarPost();
