const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./generateHtml');
const Manager = require('./Assests/Manager');
const Engineer = require('./Assests/Engineer');
const Intern = require('./Assests/Intern');

const data = {
    manager: null,
    engineers: [],
    interns: null
};

//   will start the app
function team() {
    inquirer.prompt(
        {
            name: "team",
            type: "list",
            choices: ['Add a new team manager', 'Finish building team']
        }
    ).then(answers => {
        if (answers.team === 'Add a new team manager') {
            createManager();
        } else {
            console.log('Team Generated!');
        }
    });
};

function createManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        mesasge: 'Who is the manager of this team?'
    },
    {
        type: 'input',
        name: 'managerId',
        mesasge: 'Please enter manager\'s id'
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
    }]).then(answers => {
        data.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(newManager);

        if (answers.addEmployee === 'Add a new team member!') {
            newEmployee();
        } else if (answers.addEmployee === 'Finish with team') {
            console.log('Team is complete!');
            writeToFile('index.html', team);
        }
    });
}

function newEmployee() {
    inquirer.prompt([
        {
            name: 'new employee',
            type: 'list',
            choices: ['Add a engineer', 'Add an intern', 'Finish with team']
        }
    ]).then(answers => {
        if (answers.addEmployee === 'Add a engineer') {
            createEngineer();
        } else if (answers.addEmployee === 'Add an intern') {
            createIntern();
        } else {
            console.log('Team is complete!');
            writeToFile('index.html', team);
        }

    });
}

function createEngineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        mesasge: 'what\'s the name of the Engineer?'
    },
    {
        type: 'input',
        name: 'id',
        mesasge: 'Please enter Engineer\'s id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the Engineer\'s email.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the Engineer\'s Github username.'
    }]).then(answers => {
        data.engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        team.push(newEngineer);
        if (answers.addEmployee === 'Add a new team member') {
            addEmployee();
        } else if(answers.addEmployee === 'Finish with team') {
            console.log('Team is complete!');
            writeToFile('index.html', team);
            return;
        }
    });
}

function createIntern() {
    inquirer.prompt([{
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
        data.intern = new Intern(answers.name, answers.id, answers.school);
        team.push(newIntern);
        if(answers.addEmployee === 'Add a new team member') {
            addEmployee();
        } else if(answers.addEmployee === 'Finish building team') {
            console.log('Team is complete!');
            writeToFile('index.html', team);
            return;
        }
    });
};

// this function will add the employees as they are made
function writeToFile(fileName, data) {
    const htmldata = generateHtml(data);
    fs.writeFileSync(fileName, htmldata, (err) => err ? console.log(err) : console.log('File has been created!'));
};

team();