import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default () => {
  return(
    <>
      <div className={styles.wrapper}>
        <Link to={"/"} className={styles.title}>REACT STORE</Link>
        <div className={styles.navbar}>
          <Link className={styles.nav} to={'/'}>Início</Link>
          <Link className={styles.nav} to={'/stock'}>Itens</Link>
        </div>
      </div>
    </>
  )
}