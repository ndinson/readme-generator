// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your gitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your application.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'List your collaborators.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Include tests for your aapplication and provide examples on how to run them.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application.',
    choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSD-3', 'None'],
  }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(res => {
    //console.log(res)
    const data = generateMarkdown()
    //console.log(template)

writeToFile();    
})
}

// Function call to initialize app
init();
