const Deposit = require("./Deposit.js")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User.js")

module.exports = class App {
  static #userList = []
  
  static findUser(email) {
    const user = this.#userList.find(user => user.email === email)
    return user ?? null 
  }

  static creatUser(fullname, email){
    const userExists = App.findUser(email)
    if (!userExists) {
      this.#userList.push(new User(fullname, email))
    }
  }

  static deposit(email, value) {
    const user = App.findUser(email)
    if (user) {
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(sendUserEmail, receiveUserEmail, value) {
    const sendUser = App.findUser(sendUserEmail)
    const receiveUser = App.findUser(receiveUserEmail)
    if(sendUser && receiveUser) {
      const newTransfer = new Transfer(sendUser, receiveUser, value)
      sendUser.account.addTransfer(newTransfer)
      receiveUser.account.addTransfer(newTransfer)
    }
  }

  static loan(email, value, numberOfInstallments) {
    const user = App.findUser(email)
    if(user) {
      const newLoan = new Loan(value, numberOfInstallments)
      user.account.addLoan(newLoan)
    }
  }

  static changeLoanFee(newFee){
    Loan.fee = newFee
  }
}