import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default () => {
  return(
    <>
      <div className={styles.wrapper}>
        <span>REACT STORE</span>
        <div className={styles.navbar}>
          <Link to={'/'}>Início</Link>
          <Link to={'/stock'}>Itens</Link>
        </div>
      </div>
    </>
  )
}