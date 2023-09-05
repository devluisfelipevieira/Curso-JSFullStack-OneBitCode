import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: "João",
    email: "joao@email.com"
  }
  return(
    <>
      <UserContext.Provider value={user}>
        {/* para funcionar tem que estar dentro do "Provider" */}
        <Header/>
        <h1>Usando Contexto</h1>
        <Container>
        </Container>
      </UserContext.Provider>
      <div>
        {/* nao há acesso ao Contexto */}
      </div>
    </>
  )
}