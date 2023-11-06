const sum = (a,b) => { //estrutura completa da Arrow Function
  return `A soma de ${a} e ${b} é: ${a+b}`
}

const subtract = (a,b) => `${a} - ${b} = ${a - b}` //quando o return é de apenas uma linha, não é necessário representalo

const duble = n => `O dobro de ${n} é ${n*2}` // quando há apenas um parâmetro não é necessário coloca-lo em parenteses

console.log(sum(5,4))
console.log(subtract(7,2))
console.log(duble(6))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(towns => towns[0] === 'P') // Arrow Function usado em metodos

console.log(`Cidades: ${towns}`)
console.log(`Cidades que começam com a letra P: ${startingWithP}`)

console.log(startingWithP)