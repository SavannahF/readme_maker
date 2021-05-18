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