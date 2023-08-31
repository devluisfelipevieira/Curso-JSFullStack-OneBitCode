function execute() {
  return new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(()=> {
      if (false) {
        reject(false)
      }else {
        console.log('Resolvendo a promise...')
        resolve(42)
      }
    }, 1000 * 2)
  })
}

execute().then((result) => { // then é usado quando é resolvido -> no final
  console.log(`A promise foi resolvida. O resultado foi: ${result}`) //o primeiro parametro do then( result) é o parâmetro passado em "resolve"
}).catch((err) => {
  console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
  console.log('A promise foi finalizada')
})

