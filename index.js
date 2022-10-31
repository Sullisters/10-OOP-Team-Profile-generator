//Require inquirer and fs//
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern =require('./lib/Intern');
const Employee = require('./lib/Employee');

//User input (team member's name, employee ID, email address, office number)
function askQuestion() {
    inquirer.prompt([
        {
            name: 'question',
            type: 'list',
            choices: ['Add a Team Manager', 'Add an Engineer', 'Add an Intern', 'Generate HTML']
        }
    ]).then(answers => {
        switch (answers.question) {
            case 'Add a Team Manager':
                addManager();
                break;
            
            case 'Add an Engineer':
                addEngineer();
                break;
            
            case 'Add an Intern':
                addIntern();
                break;
            
            case 'Generate HTML':
                genHTML();
                break;
        }
    })
};

function addManager() {
    inquirer.prompt([
        {
        name: 'managerName',
        type: 'input',
        message: 'Enter Team Manager Name:'
        },
        {
        name: 'managerId',
        type: 'input',
        message: 'Enter Team Manager ID:'
        },
        {
        name: 'managerEmail',
        type: 'input',
        message: 'Enter Team Manager Email Address:'
        },
        {
        name: 'managerOfficeNumber',
        type: 'input',
        message: 'Enter Team Manager Office Number:'
        }])
        .then(ans=>{
            const newManager = new Manager(ans.managerName,parseInt(ans.managerId),ans.managerEmail,parseInt(ans.managerOfficeNumber))
            console.log(newManager)
            askQuestion();
        })}
    
        

function addEngineer() {
    inquirer.prompt([
        {
        name: 'engineerName',
        type: 'input',
        message: 'Enter Engineer Name:'
        },
        {
        name: 'engineerId',
        type: 'input',
        message: 'Enter Engineer ID:'
        },
        {
        name: 'engineerEmail',
        type: 'input',
        message: 'Enter Engineer Email Address:'
        },
        {
        name: 'engineerOfficeNumber',
        type: 'input',
        message: 'Enter Engineer Office Number:'
        }])
        .then(ans=>{
            const newEngineer = new Engineer(ans.engineerName,parseInt(ans.engineerId),ans.engineerEmail,parseInt(ans.engineerOfficeNumber))
            console.log(newEngineer)
            askQuestion();
        })}

function addIntern() {
    inquirer.prompt([
        {
        name: 'internName',
        type: 'input',
        message: 'Enter Intern Name:'
        },
        {
        name: 'internId',
        type: 'input',
        message: 'Enter Intern ID:'
        },
        {
        name: 'internEmail',
        type: 'input',
        message: 'Enter Intern Email Address:'
        },
        {
        name: 'internOfficeNumber',
        type: 'input',
        message: 'Enter Intern Office Number:'
        }])
        .then(ans=>{
            const newIntern = new Intern(ans.internName,parseInt(ans.internId),ans.internEmail,parseInt(ans.internOfficeNumber))
            console.log(newIntern)
            askQuestion();
        })}

//Generates HTML
function genHTML() {
    const html =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Team Profile Generator</title>
    </head>
    <body>
        <h1 class="container-fluid text-center" style="background-color: blue; color: white;">My Team</h1>
        <div class="container text-center">
            <div class="row">
              <div class="col border border-dark ">
                <div class="headings" style="background-color: blue; color: white;">
                    <h3>Name: ${Employee.name}</h3>
                    <h4>Role: ${Employee.role}</h4>
                </div>

                <div class="row">
                    <div class="d-grid gap-3 mx-auto">
                        <div class="p-2 bg-light border" style="width: 50vw;">ID: ${Employee.id}</div>
                        <div class="p-2 bg-light border">Email: ${Employee.email}</div>
                         <div class="p-2 bg-light border">Office Number: ${Employee.officeNumber}</div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          
    </body>
    </html>
    
    `
    fs.writeFile(`./teamCards/index.html`,html,(err)=> err ? console.error(err): console.log('created'))
}

askQuestion();