// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: 'Taxa do Pão',
//     valor: 'R$ 39',
//   },
//   {
//     descricao: 'Taxa do Mercado',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 99',
//   },
//   {
//     descricao: 'Taxa do Banco',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Taxa Cliente',
//     valor: 'R$ 49',
//   },
// ];

// let taxaTotal = 0;
// let recebimentoTotal = 0;
// transacoes.forEach((item) => {
//   const numeroLimpo = +item.valor.replace('R$ ', '');
//   if (item.descricao.slice(0, 4) === 'Taxa') {
//     taxaTotal += numeroLimpo;
//   } else if(item.descricao.slice(0, 4) === 'Rece') {
//     recebimentoTotal += numeroLimpo;
//   }
// })
// console.log(taxaTotal)
// console.log(recebimentoTotal)

// // Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// const arrayTransportes = transportes.split(';');
// console.log(arrayTransportes);

// // Substitua todos os span's por a's
// let html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// html = html.split('span').join('a');

// console.log(html);

// // Retorne o último caracter da frase
// const frase = 'Melhor do ano!';

// console.log(frase.slice(-1));

// // Retorne o total de taxas
// const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

// let taxasTotal = 0;
// transacoes2.forEach((item) => {
//   item = item.toLowerCase().trim().slice(0,4);

//   if(item === 'taxa')
//     taxasTotal++
// })

// console.log(taxasTotal)

const comida = "Pizza";
const agua = new String("Agua  ");

console.log(agua.length);

console.log(comida.charAt(1));

const frase = "A melhor lingagem é ";
const linguagem = "javascript";

const fraseFinal = frase.concat(linguagem);

console.log(fraseFinal);

const fruta = "Banana";
const fruteira = "Maçã, Pera, Banana";

console.log(fruta.includes(fruteira)); // vai dar false, pois fruteira não está dentro de fruta
console.log(fruteira.includes(fruta)); // vai dar true, pois fruta está dentro de fruteira

console.log(fruta.startsWith("Ba")); // vai dar true
console.log(fruta.startsWith("ba")); // vai dar false
console.log(fruta.endsWith("nana")); // vai dar true

// slice - corta uma string

console.log(
  fruta.slice(0, 3) //Ban
);

console.log(
  fruta.slice(3, 5) //ana
);

console.log(
  fruta.slice(-3) //ana   - 3 últimos
);

// IndexOf
//
// Mostra onde está o caractere ou grupo de caracteres (se tiver mais de um, ele mostra o primeiro)

console.log(fruta.indexOf("B")); // 0
console.log(fruta.indexOf("a")); // 1
console.log(fruta.indexOf("n")); // 2

// replace - trocar um item por outro

console.log(fruteira);
console.log(fruteira.replace("Maçã", "Uva-verde"));
// "Uva-verde, Pera, Banana" - temporariamente, pois não alteramos numa variavel;
console.log(fruteira);

const preço = "R$1200,43";
console.log(preço);
const novopreço = preço.replace(",", ".");
console.log(novopreço);

// split
//
// divide uma lista em uma array

const arrayFruta = fruteira.split(", "); // onde ele ver um ', ' ele vai quebrar
console.log(arrayFruta);

// -----------------------------------------------------------------------------------

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Taxa Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Rece") {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");

console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4);

  if (item === "taxa") taxasTotal++;
});

console.log(taxasTotal);
