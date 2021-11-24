// // const animais = document.getElementById("animais");
// // console.log(animais.innerText);

// // // console.log(getElementById("animais"));

// // // document.getElementsByClassName - pega pela classe

// // // document.getElementsByTagName  - pega pela tag

// // const gridSection = document.getElementsByClassName("grid-section"); // pegar os elementos com "grid-section"
// // console.log(gridSection[1]); // seleciona o segundo item da grid

// // //querySelector retorna o primeiro elemento que combina com o seu seletor CSS

// // const qanimais = document.querySelector(".animais");
// // console.log(qanimais);

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

// // const primeiraLi = document.querySelector("li");
// // console.log(primeiraLi);

// // const ultimoItem = document.querySelector(".animais-lista li:last-child"); // pega a última li dentro de animais-lista
// // console.log(ultimoItem.innerHTML);

// // selecionar todos os links internos (que começam com href)

// // const linkInterno = document.querySelector('[href^="#"]');
// // console.log(linkInterno.href);

// // const animaisImg = document.querySelectorAll(".animais img");
// // console.log(animaisImg);

// // HTML Collection vs NodeList

// // A diferença está nos métodos e propriedades de ambas

// const gridSectionHTML = document.getElementsByClassName("grid-section");
// const gridSectionNode = document.querySelectorAll(".grid-section");

// primeiraUl.classList.add("grid-section"); //adicionou uma "grid-section" na ul (linhas 18 e 19)

// console.log(gridSectionHTML); // ao vivo, ele lida com a alteração de grid-section feita acima
// console.log(gridSectionNode); // estático, ele não lida com a alteração de grid-section feita acima

// // Array-like
// //
// // HTMLCollection e NodeList são array-like, parecem uma array mas não são.
// // O método de array "forEach()" por exemplo, existe apenas em NodeList.

// gridSectionNode.forEach(function (item, index) {
//   console.log(item);
// });

// // printando todos os items do grid-section (linha 40)

// const arrayGrid = Array.from(gridSectionHTML);

// // transformando os itens da linha 39 numa array
// //
// // agora sim podemos usar o forEach naquele "gridSectionHTML"

// arrayGrid.forEach(function (item, index) {
//   console.log(item);
// });

// Retorne no console todas as imagens do site

const Img = document.querySelectorAll("img");
console.log(Img);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const iniIMG = document.querySelectorAll('img[src^="img/imagem"]');
console.log(iniIMG);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const H2Animais = document.querySelector(".animais-descricao h2");
console.log(H2Animais);

// Selecione o último p do site

const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1]);
