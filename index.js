// TODO: Include packages needed for this application
const importMarkdown = require('./generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {question: 'Your project title?'},
    {question: 'What is your description?'},
    {question: 'What is your table of contents?'},
    {question: 'How do you install the application?'},
    {question: 'Usage of the application/screenshot?'},
    {question: 'Credits/collaborators?'},
    {question: 'Licenses?'},
    {question: 'What is your gitHub repository name?'},
    {question: 'What is your email?'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, importMarkdown.generateMarkdown(data), (err) => err ? console.log(err) : console.log('Successfully created README.md'));
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
