const person = {
  name: 'Luke',
  job: 'Farmer',
  parents: ['Anakin', 'Padme']
}

const name = person.name // modo tradicional

const {job, parents} = person // desestruturando Objects(pode passar mais de um parâmetro de uma vez só)

console.log(name,job,parents)

const [father, mother] = parents // desestruturando Arrays

console.log(father, mother)

function createUsers({name, job, parents}){ // desetruturando Functions
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const Luke = createUsers(person)
console.log(Luke)