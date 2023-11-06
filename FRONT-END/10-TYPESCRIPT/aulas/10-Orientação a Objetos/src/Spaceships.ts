class Spaceship {
  private _name: string // só pode ser acessado na própria classe. Não pode nem nas suas subclasses
  protected captain: string // pode ser acessado na própria classe e nas suas subclasses
  protected speed: number

  get name() {
    return this._name // |            acsses
                      // V
  }

  set name(name) {
    this._name = name // dessa forma tranforma o método em propriedade e assim é possivel modificar seu valor
  }

  constructor(name: string, captain:string) {
    this.name = name
    this.captain = captain
    this.speed = 0
  }

  public accelerate(rate: number, time:number) {
    this.speed = rate * time
  }
}

class Fighter extends Spaceship {
  weapons: number // se não declarar nada, automaticamente é public -> pode ser acessado de qualquer lugar
  constructor(name, captain, weapons) {
    super(name, captain)
    this.weapons = weapons
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }

  erase() {
    this.captain = ''
  }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 10)

ship.accelerate(50, 10)

ship.weapons = 20

ship.name = 'VieiraShip'
