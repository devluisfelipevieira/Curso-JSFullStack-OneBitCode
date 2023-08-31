function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;

  return label;
}

function createInput(value, type = "text", id, name, placeholder = "") {
  const input = document.createElement("input");
  input.value = value;
  input.type = type;
  input.placeholder = placeholder;
  input.id = id;
  input.name = name;

  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", function () {
  const stackInput = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput(
    null,
    "text",
    "techName-" + rowIndex,
    "techName"
  );

  const expLabel = createLabel("Experiência");
  const id1 = "expRadio" + rowIndex + "0.1";
  const expRadio1 = createInput(
    "0-2 anos",
    "radio",
    id1,
    "techExp-" + rowIndex
  );
  const expLabel1 = createLabel("0-2 anos", id1);

  const id2 = "expRadio" + rowIndex + "0.2";
  const expRadio2 = createInput(
    "3-4 anos",
    "radio",
    id2,
    "techExp-" + rowIndex
  );
  const expLabel2 = createLabel("3-4 anos", id2);

  const id3 = "expRadio" + rowIndex + "0.3";
  const expRadio3 = createInput("5+ anos", "radio", id3, "techExp-" + rowIndex);
  const expLabel3 = createLabel("5+ anos", id3);

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.innerText = "Remover";
  removeBtn.addEventListener("click", function () {
    stackInput.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeBtn
  );
  stackInput.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullname: fullnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
