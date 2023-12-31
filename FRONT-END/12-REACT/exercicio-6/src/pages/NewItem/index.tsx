import { useState } from "react"
import ItemsBar from "../../components/ItemsBar"
import items from '../../database.json'
import dayjs from "dayjs"
import styles from "./styles.module.css"

export default () => { 

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0.00)
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const hundleSubmit = (ev: any) => {
    ev.preventDefault()

    const newItem = {
      id: items.length + 1,
      name: name,
      description: description,
      quantity: quantity,
      date: dayjs().format('DD/MM/YYYY'),
      category: category,
      price: price,
      updateDate: dayjs().format('DD/MM/YYYY')
    }

    items.push(newItem)

    setName('')
    setQuantity(0)
    setPrice(0)
    setCategory('')
    setDescription('')

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