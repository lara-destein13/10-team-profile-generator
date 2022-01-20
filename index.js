const fs = require('fs');
const Employee = require('./src/Employee');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');
const Manager = require('./src/Manager');
const inquirer = require('inquirer');

const css = `
<style>
.employee {
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  float: left;
  width: 300px;
  height: 400px;
  margin-left: 10px;
  line-height: 50px;
  border: 2px solid #3895D3;
}
.employeeHeader {
  background-color: #3895D3;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.header {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #072F5F;
  color: white;
  font-size: 50px;
  text-align: center;
  pading-top: 50px;
  padding-bottom: 25px;
  margin: 10px;
}
</style>
`;

const template = `
    <div class="employee">
        <div class="employeeHeader">
            <div class="name">_NAME_</div>
            <div class="role">_ROLE_</div>
        </div>
        <div class="employeeDetails">
            <div class="id">ID: _ID_</div>
            <div class="email">Email: _EMAIL_</div>
            <div class="other">_KEY_: _VALUE_</div>
        </div>
    </div>
`;

class Main {

  constructor() {
    this.employees = [];
    this.filename = 'employees.html';
    fs.writeFileSync(this.filename, '');
  }
  
  async run() {

    let done = false;

    while (!done) {
      const employeeType = await this.getEmployeeType();
      switch (employeeType) {
        case 'Done':
          done = true;
          break;
        case 'Engineer':
          console.log('She is an Engineer');
          await this.getEngineer();
          break;
        case 'Intern':
          console.log('She is an Intern');
          await this.getIntern();
          break;
        case 'Manager':
          console.log('She is a Manager');
          await this.getManager();
          break;
      }
    }

    this.generateHTML();
  }

  async getEmployeeType() {
    const questions = [
      {
        type: 'list',
        name: 'type',
        message: 'Please select the employee type',
        choices: [ 'Done', 'Engineer', 'Intern', 'Manager' ],
      },
    ];
    
    const promise = new Promise((resolve) => {
      inquirer.prompt(questions)
        .then((answers) => {
          resolve(answers);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    });

    const answers = await promise;
    return answers['type'];
  }

  async getEngineer() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Id: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email: ',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Github: ',
      },
    ];
    
    const promise = new Promise((resolve) => {
      inquirer.prompt(questions)
        .then((answers) => {
          resolve(answers);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    });

    const answers = await promise;
    const email = answers['email'];
    const github = answers['github'];
    const id = answers['id'];
    const name = answers['name'];
    const engineer = new Engineer(name, id, email, github);
    this.employees.push(engineer);
  }

  async getIntern() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Id: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email: ',
      },
      {
        type: 'input',
        name: 'school',
        message: 'School: ',
      },
    ];
    
    const promise = new Promise((resolve) => {
      inquirer.prompt(questions)
        .then((answers) => {
          resolve(answers);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    });

    const answers = await promise;
    const email = answers['email'];
    const school = answers['school'];
    const id = answers['id'];
    const name = answers['name'];
    const intern = new Intern(name, id, email, school);
    this.employees.push(intern);
  }

  async getManager() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Name: ',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Id: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email: ',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number: ',
      },
    ];
    
    const promise = new Promise((resolve) => {
      inquirer.prompt(questions)
        .then((answers) => {
          resolve(answers);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    });

    const answers = await promise;
    const email = answers['email'];
    const officeNumber = answers['officeNumber'];
    const id = answers['id'];
    const name = answers['name'];
    const manager = new Manager(name, id, email, officeNumber);
    this.employees.push(manager);
  }

  generateHTML() {
    this.emit('<html>');
    this.emit(css);
    this.emit('<body>');
    this.emit('<header class="header">My Team</header>');

    for (let i = 0; i < this.employees.length; i += 1) {
      const employee = this.employees[i];
      const html = this.generateEmployeeHTML(employee);
      this.emit(html);
    }
    
    this.emit('</body>');
    this.emit('</html>');
  }
  
  generateHeader(header) {
    console.log(header);
  }

  generateEmployeeHTML(employee) {
    console.dir(employee);

    let html = template;
    html = html.replace('_NAME_', employee.getName());
    html = html.replace('_ROLE_', employee.getRole());
    html = html.replace('_ID_', employee.getId());
    html = html.replace('_EMAIL_', employee.getEmail());
    let key = '';
    let value = '';
    switch(employee.getRole()) {
      case 'Engineer':
        key = 'GitHub';
        value = employee.getGithub();
        break;
      case 'Intern':
        key = 'School';
        value = employee.getSchool();
        break;
      case 'Manager':
        key = 'Office number';
        value = employee.getOfficeNumber();
        break;
    }
    html = html.replace('_KEY_', key);
    html = html.replace('_VALUE_', value);
    return html;
  }
  
  emit(line) {
    fs.appendFileSync(this.filename, line + '\n');
  }
}

const main = new Main();
main.run();
