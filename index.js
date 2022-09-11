const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./generateHtml');
const Manager = require('./Assests/Manager');
const Engineer = require('./Assests/Engineer');
const Intern = require('./Assests/Intern');

const data = {
    manager: null,
    engineers: [],
    interns: []
};

//   will start the app
function team() {
    inquirer.prompt(
        {
            name: "team",
            type: "list",
            choices: ['Add a new team manager', 'Finish building team']
        }
    ).then(
        answer => {
            if (answer.team === 'Add a new team manager') {
                addManager();
            } else {
                console.log("Team complete!");
            }
        }
    )
};

function createManager() {
    ([{
        type: 'input',
        name: 'name',
        mesasge: 'Who is the manager of this team?'
    },
    {
        type: 'input',
        name: 'managerId',
        mesasge: 'Please enter manager\'s id'
    }]).then(answers => {
        data.manager = new Manager(answers.name, answers.managerId)
    },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the manager\'s email.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the manager\'s office number.'
        })
}

function createEngineer() {
    ([{
        type: 'input',
        name: 'name',
        mesasge: 'what\'s the name of the Engineer?'
    },
    {
        type: 'input',
        name: 'managerId',
        mesasge: 'Please enter Engineer\'s id'
    }]).then(answers => {
        data.engineers.push(new Engineer(answers.name, answers.managerId))
    },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Engineer\'s email.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the Engineer\'s Github username.'
        })
}

function createIntern() {
    ([{
        type: 'input',
        name: 'id',
        mesasge: 'Please enter the intern\'s id.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the intern\'s email.'
    },
    {
        type: 'input',
        name: 'school',
        mesasge: 'Please enter the intern\'s school.'
    }]).then(answers => {
        data.manager = new Manager(answers.name, answers.managerId)
    })
};

// this function will add the employees as they are made
function writeToFile(fileName, data) {
    const htmldata = generateHtml(data);
    fs.writeFileSync(fileName, htmldata, (err) => err ? console.log(err) : console.log('File Created!'));
};


