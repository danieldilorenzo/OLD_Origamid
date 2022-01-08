/**
 *
 * new Promisse()
 *
 * Promisse é uma função construtora de promessas. Existem dois
 * resultados possívei de uma promessa, ela pode ser resolvida, com
 * a exexução do primeiro argumento, ou rejeitada se o segundo
 * argumento for ativado
 *
 *
 * resolve()
 *
 * Podemos passar um argumento na função resolve(), este será
 * enviado junto com a resolução da Promisse
 *
 * const promessa = new Promise(function(resolve, reject){
 * let condição=true;
 *    if(condicao){
 *        resolve('Estou pronto!");
 *    } else{
 *        reject()
 *    }
 * })
 *
 * console.log(promessa); // Promisse{<resolved>: "Estou pronto!"}
 *
 */

// const promessa = new Promise(function (resolve, reject) {
//   reject(Error("Um erro ocorreu"));
// });

// console.log(promessa);

const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve("Funcionou!");
    }, 2000);
  } else {
    reject(Error("Um erro ocorreu na promisse"));
  }
});

promessa.then((mensagem) => {
  console.log(mensagem);
});

/**
 *
 * O método then() retorna outra promise. Podemos colocar then()
 * após then() e fazer um encadeamento de promessas. O valor do
 * primeiro argumento de cada then, será o valor do retorno anterior
 *
 */

const retorno = promessa
  .then((resolucao) => {
    console.log(resolucao);
    return "retorno teste";
  })
  .then((resolucao) => console.log(resolucao));

console.log(retorno);

/**
 *
 * O método catch(), do protótipo de Promisses, adiciona um
 * callback a promisse que será ativado caso a mesma seja rejeitada
 *
 */

const retorno1 = promessa
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = "dev";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log("Erro interno");
    console.log(rejeitada);
  });

console.log(retorno1);

/**
 *
 * finally()
 *
 * Executará a função anônima assim que a promessa
 * acabar. A diferença do finally é que ele será executado
 * independente do resolutado, se for resolvida ou rejeitada
 *
 */

const retorno2 = promessa
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = "dev";
    return resolucao;
  })
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (rejeitada) => {
      console.log(rejeitada);
    }
  )
  .finally(() => {
    console.log("Finalmente o finally");
  });

/**
 *
 * Promisse.all()
 *
 * Retornará uma nova promisse assim que todas as promisses dentro
 * dela forem resolvidas ou pelo menos uma rejeitada. A resposta é
 * uma arrau com as respostas de cada promisse
 *
 */

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const promissesCarregadas = Promise.all([login, dados]);

promissesCarregadas.then((respostas) => {
  console.log(respostas); /** array com ambas respostas */
});

/**
 *
 * Promisse.race()
 *
 * Retornará uma nova promise assim que a primeira promise for
 * resolvida ou rejeitada. Essa nova promise terá a resposta da
 * primeira resolvida (útil para fetch, onde você não sabe o que
 * vai responder primeiro)
 *
 */
