function imc(peso, altura) {
  return new Promise((resolve, reject) => {
  if (typeof(peso) != 'number' || typeof(altura) != 'number')
    reject('O peso e a altura devem ser apenas números')
  else
    resolve((peso / (altura ** 2)).toFixed(1)) //toFixed para arredondar com 1 casa decimal
  })
}

// imc(78, 1.6).then((result) => {
//   console.log(`O IMC é: ${result}`)
// }).catch((err) => {
//   console.log(err)
// }).finally(() => {
//   console.log('Cuide sempre da sua saúde =)')
// })

function showImc(peso, altura) {
  imc(peso, altura)
  .then((result) => {
    console.log(`O resultado do IMC foi de ${result}`)

    if (result < 18.5) console.log('situação: MAGREZA')
    else if (result < 25) console.log('situação: NORMAL')
    else if (result < 30) console.log('situação: SOBREPESO')
    else if (result < 40) console.log('situação: OBESIDADE')
    else console.log('situação: OBESIDADE GRAVE')
  })
  .catch((err) => {
    console.log(err)
  })
  console.log(`calculando o IMC para o peso ${peso}  e altura ${altura}...`)
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, 'texto')
showImc(82, 1.72)
showImc(120, 1.80)
