import { Character } from "./Character.js";

export class Mage extends Character {
  constructor(name, lifePoint, attackPoint, defencePoint, magicPoint){
    super(name, lifePoint, attackPoint, defencePoint)
    this.magicPoint = magicPoint
  }

  attackOtherCharacter(targetCharacter){
    if (targetCharacter.position === 'defesa'){
      if((targetCharacter.defencePoint + targetCharacter.shield) < (this.attackPoint + this.magicPoint)){
        targetCharacter.lifePoint -= (this.attackPoint + this.magicPoint) - (targetCharacter.defencePoint + targetCharacter.shield)
      }
    }else{
      if(targetCharacter.defencePoint < (this.attackPoint + this.magicPoint)){
      targetCharacter.lifePoint -= (this.attackPoint + this.magicPoint) - targetCharacter.defencePoint
    }
    }
  }
  
  healAllied(targetCharacter){
    targetCharacter.lifePoint += this.magicPoint *2
  }
}