class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity){
    this.inStock += quantity
  }

  calculateDiscount(percent) {
    return this.price * ((100 - percent)/100)
  }
}

const picanha = new Product('picanha', 'carne bovina', 72)

picanha.addToStock(5)
const priceWhithDiscount = picanha.calculateDiscount(4)

console.log(picanha)
console.log(`Com desconto sai a: ${priceWhithDiscount}`)