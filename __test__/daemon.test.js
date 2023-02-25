import Daemon from '../Daemon';

test('create character', () => {
  const daemon = new Daemon('Al', 'Daemon');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Al', type: 'Daemon',
  };
  expect(daemon).toEqual(correct);
});
