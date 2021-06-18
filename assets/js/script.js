let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let foto1 = document.querySelector("#foto1");
let foto2 = document.querySelector("#foto2");
let foto3 = document.querySelector("#foto3");
let foto4 = document.querySelector("#foto4");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = "75%";
email.style.width = "75%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 2) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}
function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (assunto.value.length >= 150) {
    txtAssunto.innerHTML = "Digite no máximo 150 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha os campos do formulário corretamente!");
  }
}

function mapaZoom() {
  mapa.style.width = "800px";
  mapa.style.height = "450px";
}

function mapaNormal() {
  mapa.style.width = "500px";
  mapa.style.height = "315px";
}
function fotoZoom() {
  foto1.style.width = "440px";
}

function fotoNormal() {
  foto1.style.width = "300px";
}
function fotoZoom2() {
  foto2.style.width = "440px";
}

function fotoNormal2() {
  foto2.style.width = "300px";
}
function fotoZoom3() {
  foto3.style.width = "440px";
}

function fotoNormal3() {
  foto3.style.width = "300px";
}
function fotoZoom4() {
  foto4.style.width = "440px";
}

function fotoNormal4() {
  foto4.style.width = "300px";
}
