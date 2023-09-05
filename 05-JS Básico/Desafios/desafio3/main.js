const car1 = prompt("Informe a velocidade do carro 1");
const car2 = prompt("Informe a velocidade do carro 2");

const resultado =
  car1 == car2
    ? "As velocidades dos carros são a mesma"
    : car1 > car2
    ? "O carro 1 é mais rápido"
    : "O carro 2 é mais rápido";

alert(resultado);
