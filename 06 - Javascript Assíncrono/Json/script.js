fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((aula) => {
      console.log(aula.aula);
    });
  });

/**
 *
 * JSON.parse() irá transformar um exto JSON em um objeto
 * JavaScript. JSON.stringify() irá transformar um objeto
 * Javascript em uma string no formato JSON.
 */

fetch("./dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    const jsonFINAL = JSON.parse(jsonText);
    console.log(jsonText);
  });

//O comando acima transformou o json em um arquivo TXT

const configuracoes = {
  player: "daniel",
  tempo: 15,
  aula: "04 - JSON",
};

const StringConfiguracoes = JSON.stringify(configuracoes);

console.log(configuracoes);
console.log(configuracoes.aula);
