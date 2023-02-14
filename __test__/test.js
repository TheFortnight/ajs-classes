import Bowerman from "../Bowerman";

const bowerman = new Bowerman('al', 'bowerman');

test('bowerman', ()=>{    
    expect(bowerman.health).toBe(100);
    //console.log(bowerman.health);
})

test('damage', ()=>{
    bowerman.damage(10);
    expect(bowerman.health).toBe(100 - 10 * (1 - 25 / 100));
})

test('levelUp', ()=>{
    bowerman.levelUp();
    expect(bowerman.level).toBe(2);
})

    //console.log(`after damage: ${bowerman.health}`);
    
    //console.log(`after levelup - health: ${bowerman.health}, level: ${bowerman.level}`);