// const Address = require("./Address")
const Person = require("./Person")

// const addr = new Address("7 de Setembro", 99, "Centro", "São Fodélis", "RJ")
const john = new Person("John Doe", "7 de Setembro", 99, "Centro", "São Fodélis", "RJ")

console.log(john)
console.log(john.address.fullAddress())

