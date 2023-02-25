import Zombie from '../Zombie';

test('create character', () => {
  const zombie = new Zombie('Al', 'Zombie');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Al', type: 'Zombie',
  };
  expect(zombie).toEqual(correct);
});
