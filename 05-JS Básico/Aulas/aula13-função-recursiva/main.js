function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

// dividir(6);

function dobrar(num) {
  console.log(num);
  dobrar(num * 2);
}

// dobrar(1); // estora a pilha

function fatorial(num) {
  console.log("Número: " + num);
  if (num === 0 || num === 1) {
    return 1;
  } else {
    console.log(num + " x " + (num - 1) + "!");
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(5));
