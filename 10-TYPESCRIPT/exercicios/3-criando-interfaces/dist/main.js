let gitUser;
gitUser = 'devluisfelipevieira';
const listUser = [];
// async function userGithub(findUser:string) {
//     const response = await fetch(`http://api.github.com/users/${findUser}`)
//     const user = await response.json()
//     if (user.message === "Not Found") {
//       console.log('Usuário não encontrado')
//     }else {
//       console.log(
//         `Dados do usuário ${user.name}:
//         id: ${user.id}
//         login: ${user.login}
//         bio: ${user.bio}
//         Número de repositórios públicos ${user.public_repos}
//         Repositórios: ${user.repos_url}`
//       )
//       listUser.push(user.login)
//       // return user.login
//     }
// }
// userGithub(gitUser)
// // let userLogin = userGithub(gitUser)
async function userRepository() {
    const response = await fetch(`http://api.github.com/users/${gitUser}/repos`);
    const repos = await response.json();
    console.log(repos);
}
userRepository();
