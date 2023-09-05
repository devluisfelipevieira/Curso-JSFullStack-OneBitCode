const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//adiciona no final
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho); // mostra o tamanho do array, guardado na chamada do push

//adiciona no começo
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

//remove do final
const ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//remove do começo
const primeiroElemento = arr.shift();
console.log(arr);
console.log(primeiroElemento);

// retorna um valor booleano sobre o item existir ou não (true e false)
const inclui = arr.includes("Gandalf");
console.log(inclui);

//verifica qual o índice do item passado
const indice = arr.indexOf("Gandalf");
console.log(indice);

//copia uma parte do array especificada nos índices
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4); //índices negativos contam o array ao contrário
console.log(arr);
console.log(hobbits);
console.log(outros);

//junta os arrays em 1 só
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição dos Elementos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

//Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(`${elemento} se encontra na posição ${indice}`);
}
