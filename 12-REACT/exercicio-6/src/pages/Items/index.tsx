import { Link, useLoaderData } from "react-router-dom"
import ItemsBar from "../../components/ItemsBar"

export default () => {
  const item = useLoaderData()

  return(
    <section>
      <ItemsBar />
      <h2>{item.name.toUpperCase()}</h2>
      <Link to={`/stock/${item.id}/edit`}>Atualizar</Link>
      <button>Excluir</button>
      <div>
        <p>Categoria: {item.category}</p>
        <p>Quantidade em estoque: {item.quantity}</p>
        <p>Preço: R$ {item.price}</p>
      </div>
      <textarea>{`${item.description}`}</textarea>
      <p>{`Cadastrado em: ${item.date}`}</p>
      <p>{`Atualizado em: ${item.updateDate}`}</p>
    </section>
  )
}