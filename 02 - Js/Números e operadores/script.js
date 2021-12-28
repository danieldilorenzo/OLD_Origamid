var idade = 35;
console.log(idade);

/**
 *
 *
 */

var testenAN = "Isso é 100" / 2;
console.log(isNaN(testenAN));

// no caso no teste acima, vai retornar true (isNAN, não é um número)

var número = 80;
var unidade = " kg";
var peso = número + unidade;
console.log(peso);
var DivisãoDoPeso = peso / 2;
// console.log(DivisãoDoPeso);
console.log(DivisãoDoPeso);
console.log(isNaN(DivisãoDoPeso));
// console.log(isNaN(DivisãoDoPeso));

// ordem de contas
//
// miltiplicação - divisão - soma - subtração
// parenteses prioriza

var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = (20 / 2) * 5; //30
var total4 = 10 + 10 * 2 + 20 / 2; //40

console.log(total1, total2, total3, total4);

// incremento

x++; // x + 1
var x = 5;
console.log(x++);
console.log(x); // x = 6

x--; // x - 1

console.log(x--);
console.log(x); // x = 4

// Para somar uma string com um número
// colocar um + na frente
var NumeroString = "100";
var NumeroNumero = 50;
var TotalPokemon = +NumeroString + NumeroNumero;
console.log(TotalPokemon); // vai retornar 150

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35

// Crie duas expressões que retornem NaN
var nan1 = "testede";
var nan2 = 30;
var somaNan = nan1 * nan2;
console.log(somaNan);

var nan3 = "estring";
var nan4 = 2;
var DivisaoStinguis = nan3 / nan4;
console.log(DivisaoStinguis);

// Somar uma string '200' com o número 50 e retornar 250
var duzentos = "200";
var cinquenta = 50;
var duzentosECinquenta = +duzentos + cinquenta;
console.log(duzentosECinquenta);

// Incremente o valor 10 e retorne o valor incrementado

var valor = 10;

console.log(valor++);
console.log(valor);
