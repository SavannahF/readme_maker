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
