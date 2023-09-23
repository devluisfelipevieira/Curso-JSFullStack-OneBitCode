import ItemsBar from "../components/ItemsBar"

export default () => {
  return(
    <>
      <ItemsBar />
      <form>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name"/>
      <label htmlFor="quantity">Quantidade:</label>
      <input type="number" id="quantity"/>
      <label htmlFor="price">Preço:</label>
      <input type="number" id="price"/>
      <label htmlFor="category">Categoria:</label>
      <input type="text" id="category"/>
      <br />
      <label htmlFor="description">Descrição:</label>
      <textarea id="description" cols="120" rows="10"></textarea>
      <button>Salvar</button>
    </form>
    </>
  )
}