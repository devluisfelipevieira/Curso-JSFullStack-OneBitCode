// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante
var sun = {
    name: "Sol",
    mass: 1.989 * (Math.pow(10, 30)),
    age: 4.603 * (Math.pow(10, 9)),
    planets: []
};
// Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
var MilkyWayPlanet = /** @class */ (function () {
    function MilkyWayPlanet(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    MilkyWayPlanet.prototype.createSatellite = function (name) {
        // ...
    };
    return MilkyWayPlanet;
}());
// O mesmo é válido para implementação usando um Type de objeto
var BigAsteroid = /** @class */ (function () {
    function BigAsteroid(name, mass, size) {
        this.name = name;
        this.mass = mass;
        this.size = size;
    }
    return BigAsteroid;
}());
var earth = {
    name: "Terra",
    mass: 5.972 * Math.pow(10, 24),
    population: 8000000000,
    createSatellite: function (name) {
        // ...
    },
    orbitedStar: sun
};
// O mesmo não é possível com Types
// O código abaixo gera um erro
// type Planet = {
//   satellites: string[]
// }
