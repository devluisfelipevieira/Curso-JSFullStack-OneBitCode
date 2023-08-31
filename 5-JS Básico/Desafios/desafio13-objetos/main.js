let imoveis = [];
let escolha = "";

do {
  escolha = prompt(`Quantidade de imóveis cadastrados: ${imoveis.length}\n
  O que deseja fazer?\n
  1-Novo imóvel\n
  2-Listar imoveis \n
  3-Sair`);
  switch (escolha) {
    case "1":
      const imovel = {};
      imovel.nome = prompt(`Nome do proprietário: `);
      imovel.quartos = prompt(`Quantidade de quartos: `);
      imovel.banheiros = prompt(`Quantidade de banheiros: `);
      imovel.garagem = prompt(`Possui garagem?(sim/não)`);
      const confirmacao = confirm(
        `Deseja salvar este imovel?\n
        Proprietário: ${imovel.nome}\n
        Quantidade de quartos: ${imovel.quartos}\n
        Quantidade de banheiros ${imovel.banheiros}\n
        Possui garagem? ${imovel.garagem}`
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imovel salvo com sucesso!");
      } else {
        alert("Voltando ao menu");
      }
      break;
    case "2":
      for (let i in imoveis) {
        alert(`Imovel: ${parseFloat(i) + 1}\n
        Proprietário: ${imoveis[i].nome}\n
        Quantidade de quartos? ${imoveis[i].quartos}\n
        Quantidade de banheiros? ${imoveis[i].banheiros}\n
        Possui garagem? : ${imoveis[i].garagem}\n`);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Escolha uma ação valida");
  }
} while (escolha !== "3");
