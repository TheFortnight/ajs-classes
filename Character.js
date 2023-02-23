module.exports = class Character{
    constructor(name, type) {

        const types = ['bowerman', 'swordsman', 'magician', 'daemon', 'zombie'];

        if(name.length < 2 || name.length > 10) {
          throw new Error('Name length should be 2-10 symbols!');
        };

        if(!types.includes(type.toLowerCase())) {
          throw new Error('Wrong character type entered!');
        };

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if(this.health <= 1) {
          throw new Error('Нельзя повысить уровень умершего');
        };
        this.level ++;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
        this.health = 100;
    }

    damage(points) {
        if(this.health < 0) return;
        this.health -= points * (1 - this.defence/100);
    }
}