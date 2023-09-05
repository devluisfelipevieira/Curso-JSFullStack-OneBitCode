const n = prompt("Escolha um valor para ver a tabuada");
let tabuada = "";

for (let i = 1; i <= 20; i++) {
  tabuada += n + "x" + i + "=" + n * i + "\n";
}

alert(tabuada);
