let Bowerman = require ("./Bowerman");

let bowerman = new Bowerman('al', 'bowerman');
console.log(bowerman.health);
bowerman.damage(10);
console.log('after damage: '+bowerman.health);
bowerman.levelUp();
console.log('after levelup - health: '+bowerman.health+', level: '+bowerman.level);