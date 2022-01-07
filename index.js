const Employee = require('./src/Employee');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');
const Manager = require('./src/Manager');
const inquirer = require('inquirer');

class Main {

  constructor() {
    this.employees = [];
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
        default:      
          console.log('No such employee type');
          return;
      }
    }

    console.dir(this.employees);
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
}

const main = new Main();
main.run();

