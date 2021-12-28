function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

// calculadora de imc

function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}

console.log(imc(85, 1.64));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto de azul";
  } else if (cor === "verde") {
    return "Eu gosto de verde";
  } else if (cor === "laranja") {
    return "Eu gosto de laranja";
  } else {
    return "Eu não gosto de azul, verde ou laranja";
  }
}

addEventListener("click", function () {
  console.log("clicou");
});

//A cada vez que há um clique, é chamada uma função que
// imprime um 'clicou' no console

function paisesQueNuncaVisitarei(PaisesVisitados) {
  var PaisesTotais = 193;
  return `Nunca visitarei ${PaisesTotais - PaisesVisitados} países`;
}
console.log(paisesQueNuncaVisitarei(2));

// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
  return !!dado;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatrio lados do quadrado

function Perimetro(dado) {
  return dado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function NomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

// Crie uma função que verifique que o número é par

function ParOuImpar(num) {
  if (num % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Impar");
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela

function TipoElemento(tipo) {
  console.log(typeof tipo);
}

// addEventlistener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento "clique" ocorrer
addEventListener("click", function () {
  console.log("Daniel Di Lorenzo");
});
