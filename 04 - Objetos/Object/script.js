const pessoa = new Object({
  nome: "Daniel",
});
console.log(pessoa.nome);

const carro = {
  marca: "Marca",
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return valor;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};
const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);

console.log(moto);

const honda = Object.create(carro);
honda.init("honda");

// // Crie uma função que verifique
// // corretamente o tipo de dado
// function verificarDado(dado) {
//   return Object.prototype.toString.call(dado);
// }

// console.log(verificarDado('String'));

// // Crie um objeto quadrado com
// // a propriedade lados e torne
// // ela imutável
// const quadrado = {};
// Object.defineProperties(quadrado, {
//   lados: {
//     value: 4,
//     enumerable: true,
//   }
// })

// console.log(quadrado)

// // Previna qualquer mudança
// // no objeto abaixo
// const configuracao = {
//   width: 800,
//   height: 600,
//   background: '#333'
// }
// Object.freeze(configuracao);

// // Liste o nome de todas
// // as propriedades do
// // protótipo de String e Array

// console.log(Object.getOwnPropertyNames(String.prototype))
// console.log(Object.getOwnPropertyNames(Array.prototype))
