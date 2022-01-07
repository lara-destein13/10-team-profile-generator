const Employee = require('../src/Employee');

test('getName', () => {
  const employee = new Employee('Lara DeStein', '123', 'laradestein13@gmail.com');
  const name = employee.getName();
  expect(name).toBe('Lara DeStein');
});