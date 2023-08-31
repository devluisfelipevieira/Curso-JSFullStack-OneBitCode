const { findUser } = require('./App.js')
const App = require('./App.js')

App.creatUser('Luis Felipe', 'luis@email.com')
App.creatUser('Fernando', 'fernando@email.com')
App.creatUser('Duda', 'duda@email.com')

App.deposit('luis@email.com', 1000)

App.transfer('luis@email.com', "fernando@email.com", 200)

App.changeLoanFee(10)
App.loan('duda@email.com', 2000, 24)

console.log(App.findUser('luis@email.com'))
console.log(App.findUser('luis@email.com').account)
console.log(App.findUser('fernando@email.com'))
console.log(App.findUser('fernando@email.com').account)
console.log(App.findUser('duda@email.com'))
console.log(App.findUser('duda@email.com').account)
console.log(App.findUser('duda@email.com').account.loans[0].installments)