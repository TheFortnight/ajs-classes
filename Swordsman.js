let Character = require ("./Character");
module.exports = class Swordsman extends Character{
    constructor(name, type, health){
        super(name, type, health);
        this.name;
        this.type;
        this.health;
        this.attack = 40;
        this.defence = 10;
        this.health;
    }
}