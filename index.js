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
    })
  }

  function createEngineer() {
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
        data.engineers.push(new Engineer(answers.name, answers.managerId))
    })
  }

  function createIntern() {
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
    })
  }