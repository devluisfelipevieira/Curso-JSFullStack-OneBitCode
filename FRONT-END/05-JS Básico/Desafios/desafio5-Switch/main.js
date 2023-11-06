let medida = prompt("Informe um valor em metros: ");

medida = parseFloat(medida);

let conversao = prompt(
  "Para qual forma de medida você quer converter?\n1-milímetro(mm)\n2-centímetro(cm)\n3-decímetro(dm)\n4-decâmetro(dam)\n5-hectômetro(hm)\n6-quilômetro(km)"
);

conversao = parseFloat(conversao);

switch (conversao) {
  case 1:
    alert(`${medida} metros em centímetros são: ${(medida *= 1000)} mm`);
    break;
  case 2:
    alert(`${medida} metros em milímetros são: ${(medida *= 100)} cm`);
    break;
  case 3:
    alert(`${medida} metros em decímetros são: ${(medida *= 10)} dm`);
    break;
  case 4:
    alert(`${medida} metros em decâmetros são: ${(medida *= 0.001)} dam`);
    break;
  case 5:
    alert(`${medida} metros em hectômetros são: ${(medida *= 0.0001)} hm`);
    break;
  case 6:
    alert(`${medida} metros em kilometros são: ${(medida /= 1000)} km`);
    break;
  default:
    alert("Opção inválida");
}
