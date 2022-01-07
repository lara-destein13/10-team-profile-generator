const Intern = require('../src/Intern');

test('getSchool', () => {
  const intern = new Intern('Lara DeStein', '123', 'laradestein13@gmail.com', 'Vanderbilt');
  const school = intern.getSchool();
  expect(school).toBe('Vanderbilt');
});