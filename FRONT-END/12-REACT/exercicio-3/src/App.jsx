import { useState } from 'react'
import Profile from './components/Profile'

function App() {
  return (
    <>
    <h1>Exercício 3</h1>
    <Profile
    name="Luis Felipe Vieira"
    bio="Developer JavaScript in progress"
    phone="+55(24)99220-4099"
    email="luis.felipe.vieira@outlook.com"
    githubUrl="https://github.com/luisnascimentovieira"
    linkedinUrl="https://www.linkedin.com/in/luis-felipe-vieira-79823b22a/"
    />
    </>
  )
}

export default App