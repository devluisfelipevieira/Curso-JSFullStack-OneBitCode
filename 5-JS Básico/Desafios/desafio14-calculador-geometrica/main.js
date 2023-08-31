let escolha = "";
let base = 0;
let altura = 0;
let lado = 0;
let basemenor = 0;
let basemaior = 0;
let raio = 0;
const pi = 3.14;

function triangulo(base, altura) {
  base = prompt("Informe a medida da base do triângulo");
  altura = prompt("Informe a medida altura do triângulo");
  return (base * altura) / 2;
}

function retangulo(base, altura) {
  base = prompt("Informe a medida da base do retângulo");
  altura = prompt("Informe a medida altura do retângulo");
  return base * altura;
}

function quadrado(lado) {
  lado = prompt("Informe a medida do lado do quadrado");
  return lado ** 2;
}

function trapezio(basemenor, basemaior, altura) {
  basemenor = parseFloat(prompt("Informe a medida da base menor do trapézio"));
  basemaior = parseFloat(prompt("Informe a medida da base maior do trapézio"));
  altura = prompt("Informe a medida da altura do trapézio");
  return ((basemenor + basemaior) * altura) / 2;
}

function circulo(raio) {
  raio = prompt("Informe a medida do raio do círculo: ");
  return pi * raio ** 2;
}

function exibirMenu() {
  return prompt(
    "Escolha qual forma você deseja calcular\n" +
      "\n1 - Área do triângulo" +
      "\n2 - Área do retângulo" +
      "\n3 - Área do quadrado" +
      "\n4 - Área do trapézio" +
      "\n5 - Área do círculo" +
      "\n6 - Sair"
  );
}

function executar() {
  do {
    escolha = exibirMenu();
    let resultado;
    switch (escolha) {
      case "1":
        resultado = triangulo();
        break;
      case "2":
        resultado = retangulo();
        break;
      case "3":
        resultado = quadrado();
        break;
      case "4":
        resultado = trapezio();
        break;
      case "5":
        resultado = circulo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida");
    }

    if (resultado) {
      alert(`Resultado ${resultado}`);
    }
  } while (escolha !== "6");
}

executar();
