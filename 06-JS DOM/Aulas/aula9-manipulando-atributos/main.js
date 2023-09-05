const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  // input.value = input.value === "" ? "Olá Mundo" : ""; //muda o valor dinamicamente
  input.value = "Olá, Mundo";
  console.log(input.value); // pega o valor atual
  console.log(input.getAttribute("value")); // pega o valor padrão do que está no html
});

document.getElementById("type").addEventListener("click", function () {
  // input.type = input.type !== "radio" ? "radio" : "text";

  input.setAttribute("type", "radio"); // seta um tipo de atributo para um parametro
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled); // inverte o valor de "DISABLE", que por padrão é true
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse; // o JS converte altomaticamente o kebab-case ("-") por CamelCase
  console.log(`O valor de data-something-else é: ${data}`);
  input.dataset.somethingElse = "algum outro valor";
  console.log(
    `O valor de data-something-else é: ${input.dataset.somethingElse}`
  );
});
