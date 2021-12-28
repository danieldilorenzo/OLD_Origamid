var possuiGraduacao = false;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

// console.log(possuiGraduacao);

var possuiDoutorado = false;
var possuiGraduacao = true;
if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

var a = 10;
var b = 20;
var soma = a + b;

if ((soma = 30)) {
  console.log("A soma é igual a trinta");
} else {
  console.log("A soma não é igual a trinta");
}

// ! inverte
// var masculino = true;
// if (!masculino) {
//   console.log("feminino");
// }

var masculino = true;
if (masculino) {
  console.log("masculino");
} else {
  console.log("feminino");
}

// == compara se é igual em valor
// 10 == "10" - true
// === compara se é igual em valor e tipo
// 10 === "10" - false porque é igual em valor, mas não em tipo

var x = "gato";
console.log(x === "Gato"); //vai retornar false

// && retorna se uma operação e outra são verdadeiras
/**
 true && true; // true
true && false; // false
10 === "10"; // false
Gato && Gato; // true
Gato && Cão; // Cão (vai retornar sempre o primeiro valor falso)
*/

// || retorna se uma operação e outra são verdadeiras
/**
 true || true; // true
true || false; // true
false || true // true
Gato && Cão; // Gato (vai retornar sempre o primeiro valor verdadeiro)
*/

//switch

var CorFavorita = "Verde";
switch (CorFavorita) {
  case "Azul":
    console.log("olhe para o céu");
    break;
  case "Vermelho":
    console.log("olhe para as rosas");
    break;
  case "Verde":
    console.log("olhe para a grama");
}

var idadeDan = 34;
var idadeParente = 33;

if (idadeDan > idadeParente) {
  console.log("Verdade");
} else if (idadeDan === idadeParente) {
  console.log("É igual");
} else {
  console.log("Não é verdade");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

// Vai retornar "Cão", porque a primeira expressão
// é falsa, mas a segunda é verdadeira
