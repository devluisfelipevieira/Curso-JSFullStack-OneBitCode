const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`Planeta ${name} salvo no banco de dados.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false; // caso não encontre nada retorna "false"
}
function updadadeSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`Satélite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = Number(prompt("Informe a situação do planeta: \n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado"));
        switch (situationInput) {
            case 1:
                situation = "Habitado";
                validSituation = true;
                break;
            case 2:
                situation = "Habitável";
                validSituation = true;
                break;
            case 3:
                situation = "Inabitável";
                validSituation = true;
                break;
            case 4:
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert('Opção inválida');
        }
    }
    return situation;
}
// function firstMenuOption() {
//   const name = prompt(`Qual o nome do planeta?`)
//   const north = Number(prompt(`Coordenada Norte:`))
//   const south = Number(prompt(`Coordenadas Sul`))
//   const east = Number(prompt(`Coordenadas Leste`))
//   const west = Number(prompt(`Coordenadas Oeste`))
//   const coordinates = [north,south,east,west]
//   const situation = (prompt(`Situação do planeta:`))
//   const confirmation = confirm(`Deseja registrar o planeta ${name} com as cordenadas ${coordinates} e a situação ${situation}?`)
//   if (confirmation) {
//     savePlanet(name, [north,south,east,west], situation)
//   }
// }
// function secondMenuOption() {
//   const planetName = prompt('Qual planeta você deseja mudar a situação?')
//   PlanetSituation(planetName)
// }
// let userOption = 0
// while (userOption !==5){
//   const menu = `Painel de Principal
//   1 - Registrar planeta
//   2 - Atualizar situação do planeta`
//   userOption = Number(parseInt(prompt(menu)))
//   switch (userOption) {
//     case 1:
//       firstMenuOption()
//       break
//     case 2:
//       secondMenuOption()
//     case 5:
//       alert('Encerrando o sistema...')
//       break
//     default:
//       alert('Opção inválida! Retornando ao painel principal...')
//       break
//   }
// }
