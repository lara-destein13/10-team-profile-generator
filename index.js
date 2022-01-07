const Employee = require('./src/Employee');

console.log("Hello");

const employee = new Employee('Lara DeStein', '123', 'laradestein13@gmail.com');

console.log(`name:  ${employee.getName()}`);
console.log(`email: ${employee.getEmail()}`);
console.log(`id:    ${employee.getId()}`);
console.log(`role:  ${employee.getRole()}`);