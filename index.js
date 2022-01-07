const Employee = require('./src/Employee');
const inquirer = require('inquirer');

class Main {
  async run() {

    while (true) {
      const employeeType = await this.getEmployeeType();
      switch (employeeType) {
        case 'Done':
          return;
        case 'Engineer':
          console.log('She is an Engineer');
          break;
        case 'Intern':
          console.log('She is an Intern');
          break;
        case 'Intern':
          console.log('She is a Manager');
          break;
        default:      
          console.log('No such employee type');
      }
    }
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
}

const main = new Main();
main.run();

