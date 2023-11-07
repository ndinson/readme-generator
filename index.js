// Installed packages needed for this application.
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Instructions to guide user through application.
console.log('This is a README generator. Please answer the following questions to create a README file for your project.')

// Array of questions for user input.
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
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
    message: 'Provide a short description of your application.',
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
    choices: ['MIT', 'Apache_2.0', 'GPLv3', 'BSD_3', 'None'],
  }
];

// Function to write README file.
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app.
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      console.log("README.md file is now being generated!")
    writeToFile('./utils/README.md', generateMarkdown(responses))
  })
}

// Function call to initialize app.
init();
