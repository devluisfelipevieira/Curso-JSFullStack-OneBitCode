import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  const[password, setPassword] = useState("")
  const[copyText, setCopyText] = useState("Copiar")
  const[customSize, setCustomSize] = useState(8)
  const[showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8
  
  function generateClick() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password) // copia o texto em ()
    setCopyText("Copiado!")
  }

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput && ( // operador curto circuito
        <div> 
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input 
            passwordSize={customSize}
            setPasswordSize={setCustomSize}
          />
        </div>
      )}
      
      <div className="card">
        <button onClick={() => generateClick()}>
          Gerar senha de {passwordSize} characters!
        </button>
        <button onClick={() => copyToClipboard()}>
          {copyText}
        </button>
      </div>
      <p className="key">
        {password}
      </p>
    </>
  )
}

export default App
