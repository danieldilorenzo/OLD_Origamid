/**
 *
 * async / await
 *
 * A palavra chave async indica que a função possui partes
 * assíncronas e que você pretende esperar a resolução da mesma
 * antes de continuar. O await irá indicar a primisse que devemos
 * esperar. Faz parte do ES8 (EcmaScript 8)
 *
 * async function puxarDados(){
 *
 * const dadosResponse = await fetch('./dados.json)
 * const dadosJson = await dadosResponse.json()
 *
 * document.body.innerText = dadosJSON.titulo
 * }
 *
 *
 * A diferenã entre o then e o async / await é uma sintaxe mais limpa
 *
 *
 */

async function puxarDados() {
  const responseDados = await fetch("./dados.json");
  //espera a resposta do fetch e coloca nessa promisse, o fetch de dados.json
  const jsonDados = await responseDados.json();
  // espera a resposta de responseDados e transforma em json
  console.log(jsonDados);
}

puxarDados();

// usando try

async function puxarDados2() {
  try {
    const responseDados2 = await fetch("./dadoss.json");
    //espera a resposta do fetch e coloca nessa promisse, o fetch de dados.json
    const jsonDados2 = await responseDados2.json();
    // espera a resposta de responseDados e transforma em json
    document.body.innerText = jsonDados2.aula;
  } catch (erro) {
    // console.log(erro);
    console.log("Deu ruim");
  }
}

puxarDados2();

async function puxarDados3() {
  const responseDados3 = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");
  console.log(await (await responseDados3).json());
  console.log(await (await responseClientes).json());
}
puxarDados3();
