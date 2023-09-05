function dobro(x = 0) {
  alert(`O dobro de ${x} é ${x * 2}`);
}

// dobro(8);
// dobro();

// function criarUsuario(nome, email, senha, tipo = "admin") {
//   const usuario = {
//     nome, // mesmo que nome: nome
//     email,
//     senha,
//     tipo,
//   };

//   console.log(usuario);
// }

// criarUsuario("Luis Felipe", "lf@gmail.com", "1234");

// function muitosParametros(
//   nome,
//   telefone,
//   endereco,
//   aniversario,
//   email,
//   senha
// ) {}

function objetoComoParametro(usuario) {
  usuario.nome;
  usuario.telefone;
  usuario.email;

  console.log(usuario);
}

const dadosDoUsuario = {
  nome: "Luis",
  telefone: "11223344",
  email: "lf@gmail.com",
};

objetoComoParametro(dadosDoUsuario);

//Usando uma função dentro da outra

function areaRetangular(base, altura) {
  return base * altura;
}

console.log("área retangular: " + areaRetangular(2, 5));

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

console.log("área Quadrada: " + areaQuadrada(2.4));

// variável pode ser mudada globalmente dentro da função mas não declarada nela sem haver uma fora do escopo
let pokemon = "charmander";

function evoluir() {
  pokemon = "charmeleon";
}

console.log(pokemon);
evoluir();
console.log(pokemon);
