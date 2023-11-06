function calcular(a, b, operacao) {
  console.log("Realizando um operação");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando um subtração");
    return x - y;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"];

// for (let i in lista) {
//   exibirElemento(lista[i], i, lista);
// }

lista.forEach(exibirElemento);

lista.forEach(function (elemento, indice, array) {
  //função anonima
  console.log({
    elemento,
    indice,
    array,
  });
});
