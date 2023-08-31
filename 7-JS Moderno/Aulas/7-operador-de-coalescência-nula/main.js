let a = 0

let b = 0 || 42 // o operador ou(||) converte valores vazios como 0 para false e o ignora

console.log({a,b})

b = 0 ?? 42 // o operador de coalência nula apenas não considera NULL e UNDEFINED

console.log({a,b})

let c = false ?? 42 // até o próprio FALSE é considerado no operador de coalência nula

console.log({c})