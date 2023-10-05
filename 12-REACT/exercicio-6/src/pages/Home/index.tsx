import dayjs from 'dayjs'
import items from '../../database.json'
import { Link } from 'react-router-dom'
const totalItem = items.reduce((acc, item) => acc + item.quantity, 0)
const lastItems = items.slice().reverse().filter((item) => item.date === dayjs().format('DD/MM/YYYY')) // reverse usado para que os items sejam mostrados primeiro o útimo que foi adicionado, o dayjs é usado para trazer a data de hoje e o slice para não modificar o original
const endingItems = items.filter((item) => item.quantity <= 2)
import styles from './styles.module.css'

export default () => {
  
  return(
    <>
      <h1>Dashboard</h1>
      <section className={styles.itemsInfo}>
        <div className={styles.infoContainers}>
          <span>Diversidade de Itens: </span>
          <p>{items.length}</p>
        </div>
        <div className={styles.infoContainers}>
          <span>Inventário Total: </span>
          <p>{totalItem}</p>
        </div>
        <div className={styles.infoContainers}>
          <span>Itens Recentes: </span>
          <p>{lastItems.length}</p>
        </div>
        <div className={styles.infoContainers}>
          <span>Itens Acabando: </span>
          <p>{endingItems.length}</p>
        </div>
      </section>
      <section className={styles.itemsDetails}>
        <div>
          <div className={styles.titlesDetails}>
            <h2>Itens Recentes</h2>
            <h2>Ação</h2>
          </div>
            {lastItems.map((item) => (
              <div className={styles.contentDetails}>
                <span>{item.name}</span>
                <Link to={`stock/${item.id}`} className={styles.seeBtn}>Ver</Link>
              </div>
            ))
            }
        </div>
        <div>
        <div className={styles.titlesDetails}>
            <h2>Itens acabando: </h2>
            <h2>Qtd.</h2>
            <h2>Ação</h2>
          </div>
            {endingItems.map((item) => (
              <div className={styles.contentDetails}>
                <span className={styles.itemName}>{item.name}</span>
                <span>{item.quantity}</span>
                <Link to={`stock/${item.id}`} className={styles.seeBtn}>Ver</Link>
              </div>
            ))
            }
        </div>
      </section>
    </>
  )
}