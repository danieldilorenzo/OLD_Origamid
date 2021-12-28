// const menu = document.querySelector(".menu");
// menu.classList.add("ativo");

// console.log(menu);

// // menu.classList.toggle("azul"); //"toggle" se não tem, ele adiciona. Se tem, remove
// console.log(menu);

// if (menu.classList.contains("azul")) {
//   console.log("Já possui azul");
//   console.log(menu);
// } else {
//   menu.classList.add("azul");
//   console.log(`Agora sim possui azul`);
//   console.log(menu);
// }

// menu.className = menu.className + "vermelho";
// // entrando nas classes de "menu" e adicionando uma classe com o nome vermelho

// menu.className += " vermelho";
// // mesmo exemplo de cima, simplificado

// const animais = document.querySelector(".animais");
// console.log(animais.attributes);
// // puxa atributos (no caso, da classe ".animais")

// console.log(animais.attributes.id);
// //retorna só o id

const img = document.querySelector("img");
console.log(img.getAttribute("src"));

const srcImg = img.getAttribute("alt");
img.setAttribute("alt", "É uma raposa");
// define um atributo se não existir. Se existir, ele atualiza

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remova a classe ativo de todos os itens do menu e mantenha apenas o primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
// removeu de todos

itensMenu[0].classList.add("ativo");
// adicionou só a primeira

// Verifique se as imagens possuem o atributo alt

const imag = document.querySelectorAll("img");
imag.forEach((imag) => {
  const possuiAtributo = imag.hasAttribute("alt");
  console.log(possuiAtributo);
});

// Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com");
console.log(link);
