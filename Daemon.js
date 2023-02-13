let Character = require ("./Character");
module.exports = class Daemon extends Character{
    constructor(name, type, health){
        super(name, type, health);
        this.name;
        this.type;
        this.health;
        this.attack = 10;
        this.defence = 40;
        this.health;
    }
}