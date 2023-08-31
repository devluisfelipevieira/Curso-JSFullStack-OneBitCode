document.getElementById('sessionBtn').addEventListener('click', function(){
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
  const info = sessionStorage.getItem('info')
  alert(`a informação salva é ${info}`)
})

document.getElementById('localBtn').addEventListener('click', function(){
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
  const text = localStorage.getItem('text')
  alert(`O texto salvo no Local Storage é ${text}`)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
  const input = document.getElementById('cookie')
  // cookieName=value=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,0,10) + ';'
  const path = 'path=/;' // o path é o ca caminho para o cookie. Colocando "/", quer dizer que ele estará disponível em todo o site
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click',function(){
  const input = document.getElementById('cookie2')
  // cookieName=value=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,0,10) + ';'
  const path = 'path=/;' // o path é o ca caminho para o cookie. Colocando "/", quer dizer que ele estará disponível em todo o site
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})