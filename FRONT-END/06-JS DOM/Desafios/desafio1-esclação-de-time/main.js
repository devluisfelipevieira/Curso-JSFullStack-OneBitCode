function addPlayer() {
  const name = document.getElementById("name").value;

  const number = document.getElementById("number").value;

  const position = document.getElementById("position").value;

  const confirmation = confirm(`Confirme se deseja escalar:\n
  Jogador: ${name}\n
  Camisa: ${number}\n
  Posição: ${position}`);
  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = position + ": " + name + "(" + number + ")";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Deseja remover " + playerToRemove.innerText + " do time?"
  );

  if (confirmation) {
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
