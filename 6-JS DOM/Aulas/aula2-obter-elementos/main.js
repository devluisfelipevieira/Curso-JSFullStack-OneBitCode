function show() {
  const contactList = document.getElementById("contact-list"); // pega pelo id
  console.log(contactList);

  const listElements = document.getElementsByTagName("li"); // pega pela tag
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input"); // pega pela classe
  console.log(contactInputs);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts); // utiliza o seletor parecido com o do css e devolve uma nodelist que pode ser iterada

  const contact1 = document.getElementsByName("contact1");
  console.log(contact1); // pega pelo nome e também retorna uma nodelist, porém, apenas da lista que foi selecionada

  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact); // mesma função do querySelectorAll, porém, pega apenas o primeiro item que for encontrado com o parâmetro passado
}
