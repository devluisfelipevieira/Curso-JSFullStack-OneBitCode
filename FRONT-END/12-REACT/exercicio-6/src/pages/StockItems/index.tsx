import { Link } from 'react-router-dom'
import ItensBar from '../../components/ItemsBar'
import items from '../../database.json'
import styles from './styles.module.css'


export default () => {

  return(
    <>
      <ItensBar />
      <section className={styles.allItems}>
        <div className={styles.titles}>
          <h3 className={styles.title}>ID</h3>
          <h3 className={styles.title}>Nome</h3>
          <h3 className={styles.title}>Em Estoque</h3>
          <h3 className={styles.title}>Categoria</h3>
          <h3 className={styles.title}>Ações</h3>
        </div>
          {items.map((item) => (
            <div className={styles.itemsDetails}>
              <span className={styles.detail}>{item.id}</span>
              <span className={styles.detail}>{item.name}</span>
              <span className={styles.detail}>{item.quantity}</span>
              <span className={`${styles.category} ${styles.detail}`}>{item.category}</span>
              <div className={`${styles.detail} ${styles.action}`}>
                <Link to={`${item.id}`} className={`${styles.seeBtn} ${styles.actionBtn}`}>Ver</Link>
                <Link to={`/stock/${item.id}/edit`} className={`${styles.actionBtn}`}>Atualizar</Link>
                <button className={`${styles.deleteBtn} ${styles.actionBtn}`}>Excluir</button>
              </div>
            </div>
          ))}
      </section>
    </>
  )
}