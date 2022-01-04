/**
 * new Date()
 *
 * O construtor Date cria um objeto contendo valores como mês,
 *   dia, ano, horário e MediaSession.A data é baseada no relógio interno do
 * computador
 *
 * const agora = new Date();
 *
 * agora.getDate() // dia
 * agora.getDay() // dia da semana - 0 = Friday
 * agora.getMonth() // número dia mês
 * agora.getFullYear() // ano
 * agora.getHours() // hora
 * agora.getMinutes() // minutos
 * agora.getTime() // ms desde 1970
 * agora.getUTCHours() -3 // horário de Brasília
 *
 *
 *
 *
 * const tempoHoje = new Date();
 *
 * console.log(tempoHoje);
 *
 * // Como saber quantos dias faltam até o natal
 *
 * function transformarDias(tempo) {
 *   return tempo / (24 * 60 * 60 * 1000);
 * }
 * const natal = new Date("Dec 25 2022");
 * const diasAgora = transformarDias(tempoHoje.getTime());
 * const diasFuturo = transformarDias(natal.getTime());
 *
 * console.log(diasFuturo - diasAgora);
 *
 */
export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    //console.log("Sim, é maior");
    funcionamento.classList.add("aberto");
  }
}
