// const carro = {
//   marca: "Marca",
//   preço: 0,
// };

// const honda = {
//   marca: "Honda",
//   preço: 2000,
// };

/**
 *
 * Constructor Functions
 *
 * Funções Construturas são responsáveis por construir novos objetos sempre que chamamos a mesma
 *
 * Funções construtoras geralmente começa com Pascal Case (APrimeiraPalavraMaiuscula)
 *
 */

// function Carro() {}

// const honda = new Carro();
// honda.teste = "oi";
// // criando uma nova propriedade

// honda.andar = function () {
//   console.log("Andou");
// };
// criando um método (atribuindo uma função)

/**
 *
 * A palavra chave `new` é responsável por criar um novo objeto baseado na função que passarmos
 * a frente dela
 *
 * const honda = new Carro()
 *
 * 1. Cria um objeto
 * honda = {}
 *
 * 2. Define o protótipo
 * honda.prototype = Carro.prototype
 *
 * 3. Aponta a variável this para o objeto
 * this = honda
 *
 * 4. Executa a função, substituindo this pelo objeto
 * honda.marca = 'Marca';
 * honda.preço = 0;
 * // Já que atribuimos this como honda, ele vai usar this.preço como honda.preço
 *
 * 5. Retorna o novo objeto
 *
 * return honda ={
 *  marca:'Marca';
 * preço:0,
 * }
 *
 */
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);

console.log(honda);
console.log(fiat);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const Mazda = new Carro2("Mazda", 5000);
