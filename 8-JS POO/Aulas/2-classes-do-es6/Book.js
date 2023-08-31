class Book {
  constructor(title) {
    this.title = title
    this.published = false
  }
  
  publishe(){
    this.published = true
  }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publishe()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book) // Verifica se a instância (passada no começo) pertence a classe (passada no final)