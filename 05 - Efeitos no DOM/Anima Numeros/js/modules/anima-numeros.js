export default function initAnimaNumeros() {}

function animaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 50);
  });

  function handleMutation(mutation) {
    //if (mutation[0].target.classlist.contains("ativo")) {
    observer.disconnect();
    initAnimaNumeros();
  }
  //}

  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, { attributes: true });
}
