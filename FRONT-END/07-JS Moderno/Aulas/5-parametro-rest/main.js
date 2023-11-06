function sum(param,...numbers){ //o rest parameter deve ser sempre o último parâmetro
  return numbers.reduce((accum,num) => accum + num, 0)
}

console.log(sum(1,1))
console.log(sum(2,2,2,2,2,2))
console.log(sum(4,25,46,12))