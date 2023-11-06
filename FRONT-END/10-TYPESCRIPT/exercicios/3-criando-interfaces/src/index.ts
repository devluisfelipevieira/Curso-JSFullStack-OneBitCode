interface GithubUserResponse {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
  message?: "Not Found" //Não obrigatório
}

interface GithubRepoResponse {
  name: string
  description: string
  fork: boolean
  stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user: GithubUserResponse = await response.json()

  if (user.message) {
    console.log('Usuário não encontrado!');
  } else {
    users.push(user)

		console.log(
      `O usuário ${user.login} foi salvo.\n` +
      `\nid: ${user.id}` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}`
    )
  }
}

async function showUser(username: string) {
  const user = users.find(user => user.login === username)

  if (typeof user === 'undefined') {
    console.log('Usuário não encontrado!');
  } else {
    const response = await fetch(user.repos_url)
    const repos: GithubRepoResponse[] = await response.json()

    let message = `id: ${user.id}\n` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}`

    repos.forEach(repo => {
      message += `\nNome: ${repo.name}` +
        `\nDescrição: ${repo.description}` +
        `\nEstrelas: ${repo.stargazers_count}` +
        `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
    })

    console.log(message)
  } 
}

function showAllUsers() {
  let message = `Usuários: \n`

  users.forEach(user => {
    message += `\n- ${user.login}`
  })

  console.log(message)
}

function showReposTotal() {
  const reposTotal = users.reduce((acc, user) => acc + user.public_repos, 0)

  let repoPerUser: string = ''

  users.forEach(user => {
    repoPerUser += `\n Usuário ${user.name} tem ${user.public_repos} repositórios públicos`
  })
  
  console.log(repoPerUser)
  
  console.log(`O total de repositórios dos usuários cadastrados são ${reposTotal}`)
}

function showTopFive() {
  const topFive = users.slice().sort((a,b) => b.public_repos - a.public_repos).slice(0,5)

  let message: string = 'Lista dos 5 usuários com mais repositórios públicos\n'
  
  topFive.forEach((user, index) => {
    message += `\n${index + 1}° - ${user.name} com ${user.public_repos} repositórios públicos`
  })

  console.log(message)
}

async function main() {
  await fetchUser('isaacpontes')
  await fetchUser('julianaconde')
  await fetchUser('pcaldass')
  await fetchUser('lucasqueirogaa')
  await fetchUser('frans203')
  await fetchUser('LeDragoX')

  await showUser('isaacpontes')
  await showUser('julianaconde')

  showAllUsers()
  showReposTotal()
  showTopFive()
}

main()