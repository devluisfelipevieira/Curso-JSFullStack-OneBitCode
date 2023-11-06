let pessoa = {
  nome: "Luis Felipe",
  idade: 20,
  dizerOla() {
    console.log(
      `Olá, Mundo! Meu nome é ${this.nome} e eu tenho ${this.idade} anos`
    );
  },
};

pessoa.dizerOla();
