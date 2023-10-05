import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'

export default () => {
  const {pathname} = useLocation() // retorna o valor da página atual
  return(
    <>
      <h1>Stock Items</h1>
      <div className={styles.buttonBar}>
        <Link to={'/stock'} className={`${pathname === "/stock" ? styles.active : styles.tab }`}>Todos os Itens</Link>
        <Link to={'/newItem'} className={`${pathname === "/newItem" ? styles.active : styles.tab }`}>Novo Item</Link>
      </div>
    </>
  )
}