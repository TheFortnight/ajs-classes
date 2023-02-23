import Bowerman from "../Bowerman";
import Character from "../Character";

test('name error', () => {
    
    expect(() => new Character('A', "Bowerman")).toThrow(new Error('Name length should be 2-10 symbols!'));
})

test('type error', () => {
    
    expect(() => new Character('Al', "Bowermann")).toThrow(new Error('Wrong character type entered!'));
})

test('create character', () => {
    let bowerman = new Bowerman('Al', 'Bowerman');
    let correct = {
        attack: 25, defence: 25, health: 100, level: 1, name: 'Al', type: 'Bowerman'
    };
    expect(bowerman).toEqual(correct);
})

test('damage', () => {
    const bowerman = new Bowerman('al', 'Bowerman');
    bowerman.damage(10);
    expect(bowerman.health).toBe(100 - 10 * (1 - 25 / 100));
})

test('levelUp', () => {
    const bowerman = new Bowerman('al', 'Bowerman');
    bowerman.levelUp();
    expect(bowerman.level).toBe(2);
})

test('levelUp of the dead', () => {
    const bowerman = new Bowerman('al', 'Bowerman');
    bowerman.health = 0;
    
    expect(() => bowerman.levelUp()).toThrow(new Error('Нельзя повысить уровень умершего'));
})

