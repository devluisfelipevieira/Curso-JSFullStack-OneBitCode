import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default () => {
  return(
    <>
      <h1>Stock Items</h1>
      <div className={styles.buttonBar}>
        <Link to={'/stock'}>Todos os Itens</Link>
        <Link to={'/newItem'}>Novo Item</Link>
      </div>
    </>
  )
}