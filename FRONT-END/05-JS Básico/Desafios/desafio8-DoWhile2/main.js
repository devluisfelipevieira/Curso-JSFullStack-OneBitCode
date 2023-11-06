let valor = prompt("Qual é o valor inicial?");
valor = parseFloat(valor);
let options = " ";

do {
  options = prompt(
    "Você tem R$" +
      valor +
      "\n" +
      "Escolha oque fazer com o dinheiro\n" +
      "1-Adicionar\n" +
      "2-Remover\n" +
      "3-Sair"
  );
  switch (options) {
    case "1":
      let adicionar = parseFloat(prompt("Quanto você quer adicionar?"));
      valor += adicionar;
      break;
    case "2":
      let remover = prompt("Quanto você quer retirar?");
      valor -= remover;
      break;
    case "3":
      options = "sair";
  }
} while (options !== "sair");
