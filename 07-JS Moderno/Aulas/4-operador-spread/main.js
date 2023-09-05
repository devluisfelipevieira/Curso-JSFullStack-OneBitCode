const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // serara as letras

const townsCopy = towns //os arrays estram juntos por referência. Quando um for alterado o outro também será

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

const townsClone = [...towns] //é feito um clone do array, mas sem referência. Assim, caso um seja alterado o outro não será

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = 'Teste'

console.log({townsObj,townsObjClone})
