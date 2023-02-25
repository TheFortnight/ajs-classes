import Swordsman from '../Swordsman';

test('create character', () => {
  const swordsman = new Swordsman('Al', 'Swordsman');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Al', type: 'Swordsman',
  };
  expect(swordsman).toEqual(correct);
});
