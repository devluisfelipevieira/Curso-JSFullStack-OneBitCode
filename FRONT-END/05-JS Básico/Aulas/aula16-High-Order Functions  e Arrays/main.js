const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Map

// const nomes = [];

// for (i in personagens) {
//   nomes.push(personagens[i].nome);
// }

const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});

console.log(nomes);

// Filter

// const orcs = [];
// for (i in personagens) {
//   if (personagens[i].raca === "Orc") {
//     orcs.push(personagens[i]);
//   }
// }

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

console.log(orcs);

// Reduce

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0); //valor inicial do primeiro parametro

console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }

  return valorAcumulado;
}, {});

console.log(racas);

// Sort
// O sort modifica o array principal

personagens.sort(function (a, b) {
  return a.nivel - b.nivel; // o "a" estando antes modificará o array para ficar em ordem crescente
});

personagens.sort(function (a, b) {
  return b.nivel - a.nivel; // o "b" estando antes modificará o array para ficar em ordem decrescente
});

// modo de fazer um sorte sem modificar o array original

const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagensOrdenados);
console.log(personagens);
