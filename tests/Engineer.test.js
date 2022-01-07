const Engineer = require('../src/Engineer');

test('getGithub', () => {
  const engineer = new Engineer('Lara DeStein', '123', 'laradestein13@gmail.com','lara-destein13');
  const github = engineer.getGithub();
  expect(github).toBe('lara-destein13');
});