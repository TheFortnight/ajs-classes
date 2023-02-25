import Magician from '../Magician';

test('create character', () => {
  const magician = new Magician('Al', 'Magician');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Al', type: 'Magician',
  };
  expect(magician).toEqual(correct);
});
