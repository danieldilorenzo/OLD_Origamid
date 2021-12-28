var numero = 20;

// numero = numero + 10;

numero += 10;

console.log(numero);

var x = 5;
var y = 10;

x += y; //x = x + y      (15)
x -= y; // x = x - y     (-5)
x *= y; // x = x 8 y     (50)
x /= y; // x = x / y     (0.5)
x %= y; // x = x % y     (0)  restante da divisão
x **= y; // x = x ** y     (9765625) no caso, 5 elevado a 10ª potência

// operador ternário
// tem três coisas acontecendo nele

var idade = 65;
var vaiDirigir = false;
var podebeber = idade >= 18 && !vaiDirigir ? "Pode beber" : "Não pode beber";
console.log(podebeber);

// if abreviado
// não é necessário chaves quando retornamos apenas uma linha de código

var PossuiFaculdade = true;
if (PossuiFaculdade) console.log("Possui Faculdade");
else console.log("Não possui faculdade");

// Some 500 ao valor de scroll abaixo atribuindo o novo valor ao scroll
var scroll = 1000;
var soma = 500;

scroll += soma;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário

var carro = true;
var casa = true;

var darCredito = carro && casa ? "Dar crédito" : "Não dar crédito";
console.log(darCredito);

// variáveis dentro da função, não são acessadas por itens
// que estão do lado de fora da função (mas variáveis criadas fora podem
// ser acessadas por itens dentro da função)

// 'Const' e 'Let' são mais usadas para criar função (porque as funções
// com 'var' geralmente ficam com a atrituição fora da função, por erro
// na criação do JS) - de preferência, usar let

// Criar variáveis sem "var", "const" ou "let" criam variáveis globais

for (let i = 0; i <= 10; i++) {
  console.log(`Número ${i}`);
}

console.log(`Número ${i}`);

// no exemplo acima, i será usado na função, e depois não será
// encontrado por estar com o valor apenas na funçã o

// Const não permite redeclarar valores  (se você declarou name uma
// vez, não será possível declarar novamente)
