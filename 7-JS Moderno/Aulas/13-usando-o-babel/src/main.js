const media = (...numbers) => {
  const quantNumbers = numbers.length;
  const sum = numbers.reduce((accum,num) => accum + num, 0)
  const media = sum/quantNumbers
  return media
}

console.log(`Média --> ${media(2,3,6,7,4)}`)

const mediaPonderada = (...entries) => {
  const sum = entries.reduce((accum, {num, weight}) => accum + (num * (weight ?? 1) ) , 0)
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / weightSum
} 

console.log(`Media Ponderada --> ${mediaPonderada({num:2,weight:2},{num:2,weight:1},{num:5})}`)

const mediana = (...numbers) => {
  const sortedNumbers = [...numbers].sort((a,b) => a - b)
  let quantNumbers = sortedNumbers.length
  if (quantNumbers % 2 === 1){
    quantNumbers = (quantNumbers + 1) / 2 - 1
    return numbers[quantNumbers]
  }
  else {
    const num1 = numbers[quantNumbers/2]
    const num2 = numbers[quantNumbers/2-1]
    const num = media(num1,num2)
    return Math.floor(num)//metodo Math.floor seve para arredondar o número para baixo
  }
}

console.log(`Mediana --> ${mediana(2,5,4,6,5,7,2,4,6)}`)
console.log(`Mediana --> ${mediana(9,2,5,8,6,2)}`)

const moda = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n ).length
  ])
  quantities.sort((a,b ) => b[1] - a[1])
  return quantities[0][0]
}

console.log(moda(`Moda --> ${2,4,6,4,6,6}`))