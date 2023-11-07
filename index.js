// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Instructions to guide user through application.
console.log('This is README generator. Please answer the following questions to create a README file for your project.')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
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
    message: 'Include tests for your application and provide examples on how to run them.',
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
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      console.log("README.md file is now being generated!")
    writeToFile('./utils/README.md', generateMarkdown(responses))
  })
}


// Function call to initialize app
init();
