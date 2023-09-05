export class Character {
  constructor(name, lifePoint, attackPoint, defencePoint){
    this.name = name
    this.lifePoint = lifePoint
    this.attackPoint = attackPoint
    this.defencePoint = defencePoint
  }

  attackOtherCharacter(targetCharacter){ // método para fazer um personagem atacar outro
    if (targetCharacter.position === 'defesa'){
      if((targetCharacter.defencePoint + targetCharacter.shield) < this.attackPoint){
        targetCharacter.lifePoint -= this.attackPoint - (targetCharacter.defencePoint + targetCharacter.shield)
      }
    }else{
      if (targetCharacter.defencePoint < this.attackPoint){
        targetCharacter.lifePoint -= this.attackPoint - targetCharacter.defencePoint
        }
      }
  }
}