document.addEventListener("DOMContentLoaded", function () {
  var botaoCalcular = document.getElementById("botaoCalcular");
  botaoCalcular.addEventListener("click", calcularGorjeta);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calcularGorjeta();
    }
  });
});

function calcularGorjeta() {
  var totalConta = parseFloat(document.getElementById("totalConta").value);
  var numPessoas = parseInt(document.getElementById("numPessoas").value);
  var porcentagemGorjeta = parseFloat(document.getElementById("porcentagemGorjeta").value
  );

  if (!totalConta || !numPessoas || !porcentagemGorjeta) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  var gorjetaPorPessoa =
    parseFloat(totalConta * porcentagemGorjeta) / numPessoas;

  document.getElementById("resultado2").innerHTML =
"A gorjeta é<span id='resultado1'> R$" + gorjetaPorPessoa + "</span> por pessoa."
}
