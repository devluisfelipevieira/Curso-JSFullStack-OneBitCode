const cartas = ["Às de espadas", "7 de copas", "Dama de ouro"];
let escolha = "";
let nome = "";

do {
  escolha = prompt(
    `Quantidade de cartas no baralho: ${cartas.length}\n1-Adicionar uma carta\n2-Puxar uma carta\n3-Sair`
  );
  switch (escolha) {
    case "1":
      nome = prompt("Qual carta será adicionada?");
      cartas.push(nome);
      break;
    case "2":
      let cartaPuxada = cartas.pop();
      if (!cartaPuxada) {
        alert("Não há carta no baralho");
      } else {
        alert(`${cartaPuxada}, foi puxada do baralho`);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (escolha !== "3");
