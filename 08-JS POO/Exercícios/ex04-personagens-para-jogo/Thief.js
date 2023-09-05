import { Character } from "./Character.js";

export class Thief extends Character {
  constructor(name, lifePoint, attackPoint, defencePoint){
    super(name, lifePoint, attackPoint, defencePoint)
  }

  attackOtherCharacter(targetCharacter) {
    if (targetCharacter.position === 'defesa'){
      if((targetCharacter.defencePoint + targetCharacter.shield) < this.attackPoint){
        targetCharacter.lifePoint -= (this.attackPoint - (targetCharacter.defencePoint + targetCharacter.shield)) * 2
      }
    }else{
    if (targetCharacter.defencePoint < this.attackPoint){
      targetCharacter.lifePoint -= (this.attackPoint - targetCharacter.defencePoint) * 2
      }
    }
  }
}