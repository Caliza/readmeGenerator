// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage of the application?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can someone contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run the tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Successfully created README.md'));
};

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers, err) => {
        if (err) {
            console.log(err);
        }
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
