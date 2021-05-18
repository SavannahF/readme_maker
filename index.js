// Include packages needed for this application
// Inquirer, fs, generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

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

// END OF DEVELOP INDEX


// Input variables/modules will go up here

// Array of Questions, prompted for input
// GitHub username
// email
// Project Title
// Project Description
// Installation steps
// Project Notes or other instruction
// Instructions
// License Options--list *done*
// Contributors

const questions = [
  {
    type: "input",
    name: "",
    message: "",
  },
  {
    type: "input",
    name: "",
    message: "",
  },
  // one will be list for license choices
  {
    type: "list",
    name: "",
    message: "",
    choices: ["Apache", "IBM", "MIT", "Perl"],
  },
];

// Function to create new README file skeleton, awaiting input

// Function to run program, take input, show success or error
