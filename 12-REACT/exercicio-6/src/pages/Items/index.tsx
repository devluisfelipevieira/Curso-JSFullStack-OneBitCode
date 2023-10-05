import { Link, useLoaderData } from "react-router-dom"
import ItemsBar from "../../components/ItemsBar"
import styles from "./styles.module.css"

export default () => {
  const item = useLoaderData()

  return(
    <section>
      <ItemsBar />
      <div className={styles.itemsAction}>
        <h2>{item.name.toUpperCase()}</h2>
        <Link className={styles.updateBtn} to={`/stock/${item.id}/edit`}>Atualizar</Link>
        <button>Excluir</button>
      </div>
      <div className={styles.attributes}>
        <p>Categoria: {item.category}</p>
        <p>Quantidade em estoque: {item.quantity}</p>
        <p>Preço: R$ {item.price}</p>
      </div>
        <p>{`${item.description}`}</p>
      <div className={styles.dates}>
        <p>{`Cadastrado em: ${item.date}`}</p>
        <p>{`Atualizado em: ${item.updateDate}`}</p>
      </div>
    </section>
  )
}