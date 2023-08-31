const nome = prompt(`Informe seu nome:`);

let quatidade = 0;

let resposta = prompt(`${nome}, você já visitou alguma cidade? (s/n)`);

let cities = "";

while (resposta == "s") {
  quatidade++;
  let city = prompt("Qual o nome da cidade?");
  cities += " - " + city + "\n";
  resposta = prompt("Você já visitou outra cidade? (s/n)");
}

alert(`${nome}\n ${quatidade} cidades visitadas:\n ${cities}`);
