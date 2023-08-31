console.log("Programa iniciado!")

const timeoutId = setTimeout(() => {
  console.log("3 segundos se passaram desde que o programa foi iniciado.")
}, 1000 * 3)

clearTimeout(timeoutId) // anula o tempo de espera do setTimeout e encerra o programa

