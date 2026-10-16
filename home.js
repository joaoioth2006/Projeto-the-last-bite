
const slides = document.querySelectorAll(".carousel-slide");
const indicadores = document.querySelectorAll(".indicador");

let slideAtual = 0;
let intervalo;

function mostrarSlide(indice) {
  slides[slideAtual].classList.remove("ativo");

  if (indicadores[slideAtual]) {
    indicadores[slideAtual].classList.remove("ativo");
  }

  slideAtual = indice;

  slides[slideAtual].classList.add("ativo");

  if (indicadores[slideAtual]) {
    indicadores[slideAtual].classList.add("ativo");
  }
}

function proximoSlide() {
  const proximo = (slideAtual + 1) % slides.length;
  mostrarSlide(proximo);
}

function iniciarCarrossel() {
  clearInterval(intervalo);

  intervalo = setInterval(() => {
    proximoSlide();
  }, 5000);
}

indicadores.forEach((indicador, indice) => {
  indicador.addEventListener("click", () => {
    mostrarSlide(indice);
    iniciarCarrossel();
  });
});

if (slides.length > 0) {
  iniciarCarrossel();
}
