do {
  options = prompt(
    "digite o número da opção ou 'sair' para sair\n" +
      "opção-1\n" +
      "opção-2\n" +
      "opção-3\n" +
      "opção-4\n" +
      "opção-5 sair"
  );
  switch (options) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu sair");
      break;
    default:
      alert("Opção inválida");
  }
} while (options !== "5");

alert("O programa está sendo encerrado...");
