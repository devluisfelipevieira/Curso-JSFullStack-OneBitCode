import { Link } from 'react-router-dom'
import ItensBar from '../components/ItemsBar'
import items from '../database.json'

export default () => {
  return(
    <>
      <ItensBar />
      <div>
        <h3>ID</h3>
        <h3>Nome</h3>
        <h3>Em Estoque</h3>
        <h3>Categoria</h3>
        <h3>Ações</h3>
      </div>
        {items.map((item) => (
          <div>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.category}</span>
            <Link to={`${item.id}`}>Ver</Link>
            <button>Atualizar</button>
            <button>Excluir</button>
          </div>
        ))}
    </>
  )
}