function calculate(){
  const resultInput = document.getElementById('result'); 
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value) // o EVAL lê a string passada no parâmatro e roda como código (PERIGOSO CASO O PROJETO TENHA BACK-END)
  resultInput.value = result
  resultInput.classList.remove('error')
}

export default calculate