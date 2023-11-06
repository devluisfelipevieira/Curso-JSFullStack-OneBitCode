// Um array vai ser usado para salvar as naves de forma mais simplificada
const spaceships = [];
/**
 * Funções Principais
 */
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => {
        return ship.name === name;
    });
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado à tripulação. Limite atingido.`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado à tripulação da ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} já está em missão.`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} precisa de no mínimo ${Math.floor(spaceship.crewLimit / 3)} passageiros para decolar.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada para missão com sucesso!`);
    }
}
function firstMenuOption() {
    const name = prompt('Qual é o nome da nave a ser registrada?');
    const pilot = prompt(`Qual o nome do piloto da nave ${name}`);
    const crewLimit = Number(prompt(`Qual o limite de passageiros da nave ${name}`));
    const confirmation = confirm(`Deseja registrar a nave ${name}\n Piloto: ${pilot}\n Com capacidade de ${crewLimit} passageiros`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const nameCrew = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Qual a nave que ${nameCrew} irá ingressar?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja adicionar ${nameCrew} à ${spaceship.name}`);
        if (confirmation) {
            addCrewMember(nameCrew, spaceship);
        }
    }
    else {
        alert('Nave não encontrada');
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Deseja enviar ${spaceship.name} para uma missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas: \n';
    spaceships.forEach((spaceship) => {
        list += `
    Nave: ${spaceship.name}
    Piloto: ${spaceship.pilot}
    Limite de passageiros: ${spaceship.crewLimit}
    Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
    Tripulantes: ${spaceship.crew.length}
    `;
        spaceship.crew.forEach(member => {
            list += `    -${member}\n`;
        });
    });
    alert(list);
}
/**
 * Menu
 */
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
