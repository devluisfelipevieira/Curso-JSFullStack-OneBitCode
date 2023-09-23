import { useLoaderData } from "react-router-dom"
import ItemsBar from "../components/ItemsBar"


export default () => {
  const item = useLoaderData()

  return(
    <section>
      <ItemsBar />
      <h2>{item.name.toUpperCase()}</h2>
      <button>Atualizar</button>
      <button>Excluir</button>
      <div>
        <p>Categoria: {item.category}</p>
        <p>Quantidade em estoque: {item.quantity}</p>
        <p>Preço: R$ {item.price}</p>
      </div>
      <p>{`${item.description}`}</p>
      <p>{`Cadastrado em: ${item.date}`}</p>
      <p>{`Atualizado em: ${item.updateDate}`}</p>
    </section>
  )
}