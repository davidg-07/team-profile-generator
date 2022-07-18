const Manager = require('./Manager') 
const data = {
   manager: null,
   engineers: [],
   interns: []
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
    }]) .then(answers => {
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
    }]) .then(answers => {
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
    }]) .then(answers => {
        data.manager = new Manager(answers.name, answers.managerId)
    })
  };