// Include packages needed for this application
// Inquirer, fs, generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What necessary dependencies must be installed to run this app?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage instructions:',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Please select the type of licese:',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide any contributing members.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide testing instructions for this application.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
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
          writeToFile("newREADME.md", generateMarkdown(data))})
        .then(() => console.log("README successfully written."))
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();