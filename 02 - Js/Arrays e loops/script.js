var videogames = ["Xbox", "PS", "3Ds"];

console.log(videogames[0]);

//var ultimoItem = videogames.pop(); // pega o último item da array

// console.log(ultimoItem);

videogames.push("Switch"); // adiciona ao final da array

// console.log(ultimoItem);

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

console.log(videogames);

for (var item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
}

// break para o loop caso a variávei seja encontrada

for (var item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  if (videogames[item] === "3Ds") {
    break;
  }
}

// no caso acima, o loop vai parar quando encontrar
// a variável "3Ds" do item

// forEach é um método que executa uma função para
// cada item da array

videogames.forEach(function () {
  console.log(item);
});

// Crie uma array com os ano que o Brasil ganhou a
// copa do mundo

var BrasilCampeao = [1959, 1962, 1978, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no colsole a seguinte mensagem "O Brasil gannhou a
// copa de ${ano}"

// var BrasilCampeao = [1959, 1962, 1978, 1994, 2002];
for (var item = 0; item < BrasilCampeao.length; item++) {
  console.log(` O Brasil ganhou a copa em ${BrasilCampeao[item]}.`);
}

// Interaja com um loop nas frutas abaixo e pare ao
// chegar em Pera

var frutas = ["banana", "maçã", "pera", "uva", "melancia"];
for (var item = 0; item < frutas.length; item++) {
  console.log(frutas[item]);
  if (frutas[item] === "pera") break;
}

// Coloque a última gruta da array acima em uma variável
// sem remover a mesma da array
let UltimaFruta = frutas[frutas.length - 1];
console.log(UltimaFruta);
console.log(frutas);
