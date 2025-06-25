function inserirNome() {
  const nome = document.getElementById("nome");

  let nomeCompleto = prompt("Digite seu nome");

  if (nomeCompleto == "" || nomeCompleto == null) {
    nomeCompleto = "Visitante";
    nome.innerHTML = nomeCompleto;
  } else {
    nome.innerHTML = nomeCompleto;
  }
}
inserirNome();