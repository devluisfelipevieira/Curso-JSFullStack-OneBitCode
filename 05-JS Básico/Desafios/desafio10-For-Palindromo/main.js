const palavra = prompt(
  "informe uma palavra para saber se ela é um palindromo: "
);

let inverso = "";

for (let i = palavra.length - 1; i > -1; i--) {
  inverso += palavra[i];
}

const palindromo =
  palavra === inverso
    ? `${palavra} é um palindromo`
    : `${palavra} não é um palindromo: \n -> ${palavra} \n <- ${inverso} `;

alert(palindromo);
