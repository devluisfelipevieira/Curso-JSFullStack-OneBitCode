import { useState } from "react"

export default function App() {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [comments, setComments] = useState([])
  
  const hundleSubmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }

    setComments((state) => [newComment, ...state])
    setAuthor("")
    setContent("")
  }
  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={hundleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
          type="text" 
          id="author" 
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)} />
        <label htmlFor="content">Comentário</label>
        <textarea 
          id="content" 
          cols="30" 
          rows="6"
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          ></textarea>
        <button>Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
                </div>
            ))
          ) : (
            <p>Seja o primeiro a comentar!</p> 
          )}
      </section>
    </div>
  )
}
