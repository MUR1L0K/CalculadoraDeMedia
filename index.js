function calcularMedia() {
  var nomeAluno = document.getElementById("nome").value;
  var notaPrimeiro = document.getElementById("notaPri");
  var notaSegundo = document.getElementById("notaSeg");
  var notaTerceiro = document.getElementById("notaTer");
  var texto = document.getElementById("textoRes");

  var media = (
    (Number(notaPrimeiro.value) +
      Number(notaSegundo.value) +
      Number(notaTerceiro.value)) /
    3
  ).toFixed(2);

  if (
    nomeAluno == "" ||
    notaPrimeiro.value == "" ||
    notaSegundo.value == "" ||
    notaTerceiro.value == ""
  ) {
    texto.innerHTML = "Dados insuficientes!";
  } else {
    texto.innerHTML = `Bem vindo ${nomeAluno}.<br>Sua média foi de ${media}`;
    if (media >= 6) {
      texto.innerHTML += "<br>Parabens você foi aprovado";
    } else {
      texto.innerHTML += "<br>Infelizmente você foi reprovado";
    }
  }
}
