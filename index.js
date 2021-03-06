// TODO: Include packages needed for this application
const { Console } = require('console');
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your GitHub UserName?'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'shortDescription',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'licenceChoice',
        message: 'What kind of licence should your project have?',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'testRun',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'repoInfo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data)=> {
        const fileName = "NodeGeneratedREADME.md";
        writeToFile(fileName, data);
        console.log("Readme Generating...");
        })
}

// Function call to initialize app
init();