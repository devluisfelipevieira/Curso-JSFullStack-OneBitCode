let escolha = "";
const vagas = [];

function exibirMenu() {
  return prompt(
    "Escolha uma ação\n" +
      "\n1 - Listar vagas disponiveis" +
      "\n2 - Criar uma nova vaga" +
      "\n3 - Visualizar uma vaga" +
      "\n4 - Inscrever um candidato em uma vaga" +
      "\n5 - Excluir vaga" +
      "\n6 - Sair"
  );
}

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ".";
    textoFinal += vaga.vaga;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const vaga = prompt("Nomeie a nova vaga: ");
  const descricao = prompt("Uma breve descrição sobre a vaga: ");
  const dataLimite = prompt("Qual a data limite dessa vaga? ");

  const confirmar = confirm(`
  Deseja criar esta vaga?\n
  Vaga: ${vaga}\n
  ${descricao}\n
  Data limite: ${dataLimite}`);

  if (confirmar) {
    const novaVaga = {
      vaga,
      descricao,
      dataLimite,
      candidatos: [],
    };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}

function verVaga() {
  const indice = prompt("Qual o índice da vaga que você deseja ver?");

  if (indice >= vagas.length || indice < 0) {
    alert("ERRO! O índice não corresponde a nenhuma vaga");
    return;
  }

  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return `${textoFinal}\n ${candidato},`;
  },
  "");

  alert(
    `Vaga n°: ${indice}\n
  Vaga: ${vaga.vaga}\n
  Descrição: ${vaga.descricao}\n
  Quantidade de candidatos: ${vaga.candidatos.length}\n
  Candidatos inscritos: ${candidatosEmTexto}`
  );
}

function inscrever() {
  const candidato = prompt("Informe o nome do candidato: ");
  const indice = prompt("Qual o índice da vaga?");
  const confirmar =
    confirm(`Deseja candidatar ${candidato} para para a vaga de ${vagas[indice].vaga}, com a data limite de ${vagas[indice].dataLimite}?
  `);
  if (confirmar) {
    vagas[indice].candidatos.push(candidato);
    alert("Inscrição realizada com sucesso");
  }
}

function excluirVaga() {
  let indice = prompt("Qual o índice da vaga?");
  const confirmar = confirm(`Deseja excluir esta vaga?\n
  Vaga: ${vagas[indice].vaga}\n
  Descrição: ${vagas[indice].descricao}\n
  Quantidade de candidatos: ${vagas[indice].candidatos.length}\n
  Data limite: ${vagas[indice].dataLimite}`);
  if (confirmar) {
    vagas.splice(indice, 1);
    alert("Vaga exluída com sucesso!");
  }
}

function executar() {
  do {
    escolha = exibirMenu();

    switch (escolha) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        verVaga();
        break;
      case "4":
        inscrever();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo do programa...");
        break;
      default:
        alert("Opção invalida!");
        break;
    }
  } while (escolha !== "6");
}

executar();
