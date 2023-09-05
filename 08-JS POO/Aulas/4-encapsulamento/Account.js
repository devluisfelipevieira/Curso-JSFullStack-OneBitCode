class Account {
  #password         // propriedades privadas. Elas não podem ser alteradas fora da declaração da classe
  #balance = 0

  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  #authenticate(email, password){
    return this.email === email && this.#password === password
  }

  getBalance(email, password){
    if(this.#authenticate(email,password)){
      return this.#balance
    }else{
      return null
    }
  }
}

const user = {
  email: "user@email.com",
  password: "12345"
}

const luis = new Account(user)

console.log(luis.getBalance("user@email.com","12345"))
