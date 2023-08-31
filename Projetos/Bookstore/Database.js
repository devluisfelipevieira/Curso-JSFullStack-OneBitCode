module.exports = class Database {
  #storage = {
    author: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key) {
    return this.#storage[key]
  }

  saveAuthor(author) {
    this.#storage.author.push(author)
  }

  findBookByName(bookName) {
    return this.#storage.books.find(b => b.name === bookName)
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name) // verifica se o livro existe
    if (!bookExists) [
      this.#storage.books.push(book)
    ]
  }

  addBooksToStock (bookName, quantity) {
     const book = this.findBookByName(bookName)
     book?.addToStock(quantity)
  }

  removeBookFromStore(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.removeFromStock(quantity)
  }

  findPosterByName(posterName) {
    return this.#storage.posters.find(p => p.name === posterName)
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name) // verifica se o livro existe
    if (!posterExists) [
      this.#storage.posters.push(poster)
    ]
  }

  addPosterToStock (posterName, quantity) {
     const poster = this.findPosterByName(posterName)
     poster?.addToStock(quantity)
  }

  removePosterFromStore(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    poster?.removeFromStock(quantity)
  }

  saveUser(user) {
    const userExists = this.#storage.user.find(u => u.email === user.email)
    if (!userExists) {
      this.#storage.users.push(user)
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.author)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
}