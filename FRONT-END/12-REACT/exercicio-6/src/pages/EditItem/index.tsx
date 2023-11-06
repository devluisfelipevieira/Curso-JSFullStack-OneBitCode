import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import ItemsBar from "../../components/ItemsBar"
import items from '../../database.json'
import dayjs from "dayjs"
import styles from './styles.module.css'

export default () => {

  const item = useLoaderData()

  const [name, setName] = useState(item.name)
  const [quantity, setQuantity] = useState(item.quantity)
  const [price, setPrice] = useState(item.price)
  const [category, setCategory] = useState(item.category)
  const [description, setDescription] = useState(item.description)

  const hundleSubmit = (ev: any) => {
    ev.preventDefault()

    item.id = items.length + 1,
    item.name = name,
    item.description = description,
    item.quantity = quantity,
    item.category = category,
    item.price = price,
    item.updateDate = dayjs().format('DD/MM/YYYY')

  }

  return(
    <>
      <ItemsBar />
      <form onSubmit={hundleSubmit} className={styles.container}>
      <div className={styles.topInfo}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} onChange={(ev) => setName(ev.target.value)}/>
        </div>
        <div>
          <label htmlFor="quantity">Quantidade:</label>
          <input type="number" id="quantity" value={quantity} onChange={(ev) => setQuantity(Number(ev.target.value))}/>
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input type="number" id="price" value={price} onChange={((ev) => setPrice(Number(ev.target.value)))}/>
        </div>
        <div>
          <label htmlFor="category">Categoria:</label>
          <input type="text" id="category" value={category} onChange={(ev) => setCategory(ev.target.value)}/>
        </div>
      </div>
      <div className={styles.description}>
        <label htmlFor="description">Descrição:</label>
        <textarea id="description" cols="120" rows="10" value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea>
      </div>
      <button className={styles.saveBtn}>Salvar</button>
    </form>
    </>
  )

}