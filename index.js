// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description explaining the what, why, and how of your application.'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your application?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.'
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'List your collaborators.'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Include tests for your aapplication and provide examples on how to run them.'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a license for your application.',
    choices: ['MIT']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
