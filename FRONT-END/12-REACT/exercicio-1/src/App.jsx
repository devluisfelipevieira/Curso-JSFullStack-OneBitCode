export default function App() {
  return (
    <div className="app">
      <img src="../public/image.png" alt="logo-react" height={100}/>
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas.</p>
      <div>
        <button>Aprenda React</button>
        <button>Referência da API</button>
      </div>
      <hr />
      <h1>Crie interfaces de usuário de componentes</h1>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados de componentes.</p>
      <hr />
      <h1>Escreva componentes com código e marcação</h1>
      <p>Componentes React são funções JavaScript.A sintaxe de marcação é chamada de JSX.É uma extensao da sintaxe JavaScript popularizada pelo React</p>
      <hr />
      <h1>Próximos passos</h1>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  )
}