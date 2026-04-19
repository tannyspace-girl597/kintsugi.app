function mostrar(p) {
  document.querySelectorAll(".pantalla").forEach(x => x.classList.remove("active"));
  document.getElementById(p).classList.add("active");
}

function avanzar(boton) {
  let barra = document.querySelector(".relleno");

  let actual = parseInt(barra.style.width) || 50;
  let nuevo = actual + 10;

  if (nuevo > 100) nuevo = 100;

  barra.style.width = nuevo + "%";
  boton.innerText = "✔";
}

function chat() {
  alert("Estoy aquí para ayudarte 💜");
}