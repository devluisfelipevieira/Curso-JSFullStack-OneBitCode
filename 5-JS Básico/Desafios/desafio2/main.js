let n1 = prompt("Insira o primeiro valor");
let n2 = prompt("insira o segundo valor");
n1 = parseFloat(n1);
n2 = parseFloat(n2);
let soma = n1 + n2;
let sub = n1 - n2;
let div = n1 / n2;
let mult = n1 * n2;

console.log(`${n1} + ${n2} = ${soma}`);
console.log(`${n1} - ${n2} = ${sub}`);
console.log(`${n1} / ${n2} = ${div}`);
console.log(`${n1} x ${n2} = ${mult}`);
