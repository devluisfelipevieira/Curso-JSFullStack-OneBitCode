import { Character } from "./Character.js";

export class Warrior extends Character {
  constructor(name, lifePoint, attackPoint, defencePoint, shield){
    super(name, lifePoint, attackPoint, defencePoint)
    this.shield = shield
    this.position = 'ataque'
  }
  
  attackOtherCharacter(targetCharacter){
    if (targetCharacter.defencePoint < this.attackPoint && this.position === 'ataque'){
      super.attackOtherCharacter(targetCharacter)
    }else{
      console.log(`${this.name} não pode atacar enquanto está em modo de defesa`)
    }
  }

  switchPosition(position){
    if (this.position === 'ataque'){
      this.position = 'defesa'
    }else{
      this.position = 'ataque'
    }
  }
}