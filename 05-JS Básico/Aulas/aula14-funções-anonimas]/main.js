function somar(a, b) {
  return a + b;
}

let operacao = somar; // uma variavel recebe a função

console.log(operacao(4, 5));

operacao = function (a, b) {
  // a variavel agora recebe outra função, a nova função é uma função anonima por não receber um nome
  return a - b;
};

console.log(operacao(4, 5));
