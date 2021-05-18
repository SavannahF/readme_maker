// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // What about this all-in-one function option? Now that I see it, I can't unsee it...or figure out the top three functions split up
// function addLicenseBadge(license) {
//   if (license === "GNU GPL v2") {
//     return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
//   }
//   else if (license === "GNU GPL v3") {
//     return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
//   }
//   else if (license === "GNU LGPL v3") {
//     return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
//   }
//   else if (license === "MIT") {
//     return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
//   }
//   else (license === "No License") 
//     return ( ``)
// }

//   function writeLicenseInfo(license) {
//     return (`## License Info
// This is licensed with the ${license} license.`)
// }

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#Description)

  * [Installation](#Installation-Instructions)

  * [Usage Instructions](#Usage-Instructions)

  * [License](#License)

  * [Contributing Members](#Contributing-Members)

  * [Testing](#Testing) 
    
  * [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation Instructions 
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing Members
  ${data.contributors}

  ## Testing 
   ${data.test}

  ## Questions

  I am open for questions and feedback on this repository, please contact me directly at ${data.email}. 
  For other projects I've worked on, see [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
