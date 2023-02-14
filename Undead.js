import Character from'./Character';

export default class Undead extends Character {
  constructor(name, type, health) {
    super(name, type, health);
    this.name;
    this.type;
    this.health;
    this.attack = 25;
    this.defence = 25;
    this.health;
  }
};
