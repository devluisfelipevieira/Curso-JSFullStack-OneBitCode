const nome1 = prompt("Informe o nome do personagem 1");
const nome2 = prompt("Informe o nome do personagem 2");
const ataque = prompt(`Qual o poder de ataque do ${nome1}`);
const defesa = prompt(`Qual o poder de defesa do ${nome2}`);
const vida = prompt(`Quantos pontos de vida ${nome2}`);
const escudo = confirm(
  `${nome2} terá escudo? "Ok" para sim "cancelar" para não`
);

const resultAtaque =
  ataque < defesa
    ? 0
    : escudo == true
    ? (ataque - defesa) / 2
    : ataque - defesa;

// console.log(resultAtaque);

let resultVida = vida - resultAtaque;

const ter_escudo = escudo == true ? "tinha" : "não tinha";

alert(
  `${nome1} atacou ${nome2} que ${ter_escudo} escudo e causou ${resultAtaque} de dano nos ${vida} pontos de vida de ${nome2}, o deixando com ${resultVida} pontos de vida`
);
