const process = require("process");

console.log("digite seu nome:");

process.stdin.on("data", (keyboard) => {
  process.stdout.write(`texto do usuário: ${keyboard}`);
  process.exit();
});
