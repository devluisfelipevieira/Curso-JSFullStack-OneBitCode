import { Link } from "react-router-dom"
import Products from "./Products"

export default () => {
  const { productId }


  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>descrição do produto</p>
      <p>R$ 00,00</p>
      <button>Comprar</button>
    </section>
  )
}