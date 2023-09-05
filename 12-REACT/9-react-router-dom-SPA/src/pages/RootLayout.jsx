import { Outlet } from "react-router-dom" // ecaixa as pages "children" na página 
import Header from "../components/Header"

export default () => {
  return(
    <>
      <Header />
      <main>
        <p>Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada rota.</p>
        <hr />
        <Outlet /> 
        <hr />
        <footer>
          <p>Feito com React Router DOM</p>
        </footer>
      </main>
    </>
  )
}