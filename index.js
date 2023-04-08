const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./library/manager');
const engineer = require('./library/engineer');
const intern = require('./library/intern');
// const generateTeamHTML = require('./generateTeamHTML');

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'managerID',
      message: "What is the team manager's employee ID?",
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the team manager's email address?",
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is the team manager's office number?",
    },
  ]);

  async function newUser() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'managerID',
        message: "What is the team manager's employee ID?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?",
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?",
      },
    ]);


  const myManager = new manager(
    answers.managerName,
    answers.managerID,
    answers.managerEmail,
    answers.managerOfficeNumber
  );

  const team = [];

  let addEmployee = true;

  while (addEmployee) {
    const { employeeType } = await inquirer.prompt({
      type: 'list',
      name: 'employeeType',
      message: 'Which type of employee do you want to add?',
      choices: ['manager', 'engineer', 'intern', 'Finish building my team'],
    });
  
    if (employeeType === 'Finish building my team') {
      addEmployee = false;
      break;
    } else {
      let employee;
  
      if (employeeType === 'engineer') {
        employee = await promptUser();
      } else if (employeeType === 'intern') {
        employee = await newUser();
      } else if (employeeType === 'manager') {
        employee = await createManager();
      } else {
        
        throw new Error(`Invalid employee type: ${employeeType}`);
      }
  
      team.push(employee);
    }
  }
  const html = generateTeamHTML(manager, team);

  fs.writeFileSync('team.html', html, (err) => {
    if (err) throw err;
    console.log('Team HTML file generated!');
  });
}
}

// addEmployee();

promptUser();
