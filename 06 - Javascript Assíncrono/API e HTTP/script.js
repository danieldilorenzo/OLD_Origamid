/**
 *
 * API
 *
 * Application
 *
 * Um servidor, aplicativo, objeto Javascript ou qualquer outra coisa que vcê
 * interaja através de comandos. Ao digitar uma URL, estamos utilizando a API
 * do browser para se comunicar com a API do servidor
 *
 * Exemplo de resposta da API: https://api.github.com/users/danieldilorenzo
 * //É resposta da API, não API
 *
 * Lista com diversas APIs
 * http://github.com/toddmotto/public-apis
 *
 * Programming
 *
 * Programação, isso significa que um comando irá encadear uma cadeira de
 * eventos pré-definidos. O resultado esperado é geralmente o mesmo.
 *
 *
 * Interface
 *
 * A interface são os comandos criados para permitir a interação com a
 * aplicação. Ex 'VIOLAO'.toLowerCase() é um método que faz parte da
 * interface do objeto String. A interação com a interface retorna um
 *  efeito / resposta
 *
 */

// function pokemons() {
//   fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((poke) => poke.json())
//     .then((pokemon) => {
//       console.log(pokemon);
//     });
// }
// pokemons();

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((poke) => poke.json())
  .then((pokemon) => {
    console.log(pokemon);
  });

/**
 *
 * Métodos
 *
 * GET - Puxa informação, utilizado para pegar posts, usuários, etcx
 *
 * POST - Utilizado para criar posts, usuários
 *
 * PUT - Geralmente utilizado para atualizar informações
 *
 * DELETE - Deleta uma informação
 *
 * HEAD - Puxa apenas os headers
 */
