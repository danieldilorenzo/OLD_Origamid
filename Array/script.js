// const carros = ["ford", "fiat", "honda"];

// carros.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// // Arrow function

// const li = document.querySelectorAll("li"); // pega todas as li
// li.forEach((i) => i.classList.add("ativa")); // em cada li, adiciona a classe "ativa"

// const carros2 = ["ford", "fiat", "honda"];

// //carros2.map((item, index, array));

// const numeros = [2, 4, 6, 8, 10];
// const numerosX2 = numeros.map((n) => n * 2);
// console.log(numerosX2);

// const aulas = [
//   {
//     nome: "HTML1",
//     min: 15,
//   },
//   {
//     nome: "HTML2",
//     min: 20,
//   },
//   {
//     nome: "CSS1",
//     min: 25,
//   },
//   {
//     nome: "JS1",
//     min: 30,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// console.log(tempoAulas);

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();

comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();

console.log(estudantes);
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice();

carros.pop();

console.log(carros);
console.log(carrosCopia);
