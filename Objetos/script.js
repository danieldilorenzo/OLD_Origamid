var pessoa = {
  nome: "Daniel",
  idade: 34,
};

console.log(typeof pessoa.nome);
console.log(typeof pessoa.idade);

var quadrado = {
  lados: 4,
  area(lado) {
    return this.lados * lado; //this.lados está pegando o dado "lados" que está fora da função
  },
  perimetro(lado) {
    return lado * 4;
  },
};

//acima são duas funções. Elas poderiam ter
// area: function (lado)
// e
// perimetro: function (lado)
// que funcionaria da mesma forma

//

var menu = {
  width: 800,
  height: 50,
  backgroundcolor: "#000",
};

var bg = menu.backgroundcolor;

// com isso, bg passa a ter a mesma propriedade de "backgroundcolor"
// que está dentro de menu

menu.color = "blue";
// agora passa a ter um color = blue dentro de menu

// Quando tá pegando um valor é get
// Quando tá setando um valor é set

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosDaniel = {
  nome: "Daniel",
  sobrenome: "Di Lorenzo",
  idade: 35,
};

console.log(dadosDaniel);
// Crie um método no objeto anterior, que mostre seu nome completo
dadosDaniel.completo = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === homem) {
      return "latir";
    } else {
      return "não late";
    }
  },
};
console.log(cachorro);
