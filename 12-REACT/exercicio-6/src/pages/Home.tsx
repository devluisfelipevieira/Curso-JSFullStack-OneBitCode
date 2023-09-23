import dayjs from 'dayjs'
import items from '../database.json'
import { Link } from 'react-router-dom'
const totalItem = items.reduce((acc, item) => acc + item.quantity, 0)
const lastItems = items.reverse().filter((item) => item.date === dayjs().format('DD/MM/YYYY')) // reverse usado para que os items sejam mostrados primeiro o útimo que foi adicionado e o dayjs é usado para trazer a data de hoje
const endingItems = items.filter((item) => item.quantity <= 2)

export default () => {

  return(
    <div>
      <h1>Dashboard</h1>
      <div>
        <span>Diversidade de Itens: </span>{items.length}
      </div>
      <div>
        <span>Inventário Total: </span>{totalItem}
      </div>
      <div>
        <span>Itens Recentes: </span>{lastItems.length}
      </div>
      <div>
        <span>Itens Acabando: </span>{endingItems.length}
      </div>
      <div>
        <h2>Itens Recentes: </h2>
        <ul>
          {lastItems.map((item) => (
            <li key={item.id}>
              <hr />
              <span>Produto: {item.name}</span>
              <Link to={`stock/${item.id}`}>Ver</Link>
            </li>
          ))
          }
        </ul>
      </div>
      <div>
        <h2>Itens acabando: </h2>
        <ul>
          {endingItems.map((item) => (
            <li key={item.id}>
              <hr />
              <span>Produto: {item.name}</span>
              <p>Quantidade {item.quantity}</p>
              <Link to={`stock/${item.id}`}>Ver</Link>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}