class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  onlogin(email, password) {
    if(this.email === email && this.password === password){
      console.log("Login ativado com sucesso!")
    }else{
      console.log("Falha ao efetuar login, revise email e senha, e tente novamente")
    }
  }
}

const luis = new User("Luis Vieira", "1234@email.com", 1234)

luis.onlogin("1234@email.com", 1234)

console.log(luis)