
class Employee {
    constructor (name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
    }
  
    getEmail() {
      return this.email;
    }
    
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getRole() {
      return this.role;
    }
  }
  
  module.exports = Employee;