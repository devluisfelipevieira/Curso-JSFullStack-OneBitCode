const Deposit = require("./Deposit.js")
const Loan = require("./Loan.js")
const Transfer = require("./Transfer.js")


module.exports = class Account {
  #balance
  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.tranfers = []
  }
  
  addDeposit(deposit) {
    this.deposits.push({
      value: deposit.value,
      data: deposit.data
    })

    this.#balance += deposit.value
  }

  addLoan(loan) {
    this.loans.push({
      value: loan.value,
      data: loan.data,
      installments: loan.installments
    })

    this.#balance += loan.value
  }

  addTransfer(transfer) {
    if (transfer.receiveUser.email === this.owner.email) {
      this.#balance += transfer.value
      this.tranfers.push(transfer)
    } else if (transfer.sendUser.email === this.owner.email) {
      this.#balance -= transfer.value
      this.tranfers.push(transfer)
    }
  }
}