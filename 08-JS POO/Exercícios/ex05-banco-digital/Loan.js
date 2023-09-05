const Installment = require("./Installment.js")

module.exports = class Loan {
  static #fee = 0.10

  constructor(value, installments) {
    this.value = value
    this.installments = []
    for (let i = 0; i <= installments; i++){
      this.installments.push(new Installment(((value / installments) * (Loan.#fee + 1)),i))
    }
    this.data = new Date()
  }

  static get readFee() {
    return `Juros de ${Loan.#fee * 100}% ao ano` 
  }

  static set fee(newFee) {
    Loan.#fee = newFee / 100
  }
}