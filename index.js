// Include packages needed for this application
// Inquirer, fs, generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title for your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What necessary dependencies must be installed to run this app?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide the usage instructions:',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Please select the type of licese:',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please provide any contributing members.'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide testing instructions for this application.'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: "Which email would you like to provide (will be used for inquiries?)",
    }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
        return console.log(error);
    }
    console.log(`${fileName} has been successfully created!`);
})
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
          writeToFile("newREADME.md", generatorMarkdown(data))})
        .then(() => console.log("README successfully written."))
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();