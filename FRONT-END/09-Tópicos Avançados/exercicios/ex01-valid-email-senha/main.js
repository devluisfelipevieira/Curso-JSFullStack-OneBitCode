const main = document.querySelector('#main')
const section = document.querySelector('#section')
const senha = document.querySelector('#password')
const email = document.querySelector('#email')


document.querySelector('#validator').addEventListener('click', function(e) {
  e.preventDefault()
  
  if (email.value.match(/@/g)) {
    console.clear()
    if (email.value.match(/.+(?=@)/)){
      if (email.value.match(/(?<=)email.com/)){
        // console.log('email valido')
        if (senha.value.match(/[A-Z]/g)) {
          // console.clear()
          if (senha.value.match(/[a-z]/g)) {
            if (senha.value.match(/[0-9]/g)) {
              if(senha.value.match(/[@!@#$%&*(),;:\.\\/]/g)){
                if(senha.value.match(/\s/g)){
                  console.log('A senha não pode conter espaços')
                }else{
                  console.log('Email e senha válida\nAcesso permitido, você pode ver a 8ª maravilha do mundo')
                  main.classList.add('photo')
                  section.innerHTML = ''
                }
              }else{
                console.log('A senha precisa de pelomenos 1 caractere especial')
                
              }
            }else{
              console.log('A senha precisa de pelomenos um número')
            }
          }else{
            console.log('A senha precisa de pelomenos uma letra minúscula')
          }
        }else{
          // console.clear()
          console.log('A senha precisa de pelomenos uma letra maiúscula')
        }
      
      }else{
        console.log('Email precisa terminar com "email.com"')
      }
    }else{
      console.log('Email precisa de caracteres antes do @')
    }
  }else{
    console.clear()
    console.log('Email precisa de um "@" para ser válido')
  }

})