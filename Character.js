export default class Character {
  constructor(name, type) {
    const types = ['bowerman', 'swordsman', 'magician', 'daemon', 'zombie'];
    if (name.length < 2 || name.length > 10) throw new Error('Name length should be 2-10 symbols!');
    if (!types.includes(type.toLowerCase())) throw new Error('Wrong character type entered!');
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack;
    this.defence;
  };

  levelUp = function () {
    if (this.health <= 0) return;
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  };

  damage = function (points) {
    if (this.health < 0) return;
    this.health -= points * (1 - this.defence / 100);
  };
};
