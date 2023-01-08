// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description for this project.'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter a table of contents for this project if needed.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give the instructions for users to install this project.'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Give instructions for to use this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use',
        choices: ['The MIT license', 'The GPL license', 'Apache license', 'GNU license', 'N/A']
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for others to contact you about questions.'
    }
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        
        console.log(`Thanks for using my README generator.`);
    });
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
// Function call to initialize app
init();

