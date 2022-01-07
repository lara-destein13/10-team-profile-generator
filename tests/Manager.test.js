const Manager = require('../src/Manager');

test('getOfficeNumber', () => {
  const manager = new Manager('Lara DeStein', '123', 'laradestein13@gmail.com', '222');
  const officeNumber = manager.getOfficeNumber();
  expect(officeNumber).toBe('222');
});