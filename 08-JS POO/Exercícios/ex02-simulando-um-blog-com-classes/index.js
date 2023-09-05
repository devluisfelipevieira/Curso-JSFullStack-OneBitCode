const Author = require("./Author.js")

const jhon = new Author("Jhon Doe")

const post = jhon.writePost("Titulo do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Luis", "É isso aí")
post.addComment("Felipe", "Texto profundo, com grande saberoria")

console.log(jhon)
console.log(post)