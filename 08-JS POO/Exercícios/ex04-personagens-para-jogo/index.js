import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

const kayba = new Thief('Kayba', 1000, 400, 150)

const yugi = new Warrior('Yugi', 750, 300, 100, 250)

const patolino = new Mage('Patolino', 800, 200, 200, 300)

yugi.attackOtherCharacter(patolino)

console.log(patolino)

