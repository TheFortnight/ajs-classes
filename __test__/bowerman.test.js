import Bowerman from '../Bowerman';

test('create character', () => {
  const bowerman = new Bowerman('Al', 'Bowerman');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Al', type: 'Bowerman',
  };
  expect(bowerman).toEqual(correct);
});
