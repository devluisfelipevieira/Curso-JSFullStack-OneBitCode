const fila = ["Matheus", "Marcos"];
let escolha = " ";
let nome = "";

do {
  let pacientes = "";
  let tamanho = fila.length;

  for (let i = 0; i < tamanho; i++) {
    pacientes += `${parseFloat(i) + 1}° - ${fila[i]}\n`;
  }

  escolha = prompt(
    `Fila de pacientes:\n${pacientes}\n1-Novo paciente\n 2-Consultar paciente\n 3-Sair`
  );
  switch (escolha) {
    case "1":
      nome = prompt("Qual o nome do paciente?");
      fila.push(nome);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(`${pacienteConsultado} consultou e foi removido da lista`);
      } else {
        alert("Não há pacientes na fila");
      }
      break;
    case "3":
      alert("Encerrando...");
    default:
      alert("Opção inválida");
  }
} while (escolha !== "3");
