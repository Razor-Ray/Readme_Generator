// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      link: https://img.shields.io/badge/Licence-MIT-brightgreen;
      break;
    case "Apache 2.0":
      https://img.shields.io/badge/Licence-APACHE%202.0-brightgreen
      break;
    case "GPL 3.0":
      https://img.shields.io/badge/Licence-GPL%203.0-brightgreen
      break;
    case "BSD 3":
      https://img.shields.io/badge/Licence-BSD%203-brightgreen
      break;
    case "none":
      https://img.shields.io/badge/Licence-None-brightgreen
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {gitHubUserName, emailAddress, projectName, shortDescription, licenceChoice, dependencies, testRun, repoInfo, contribute} = data;
  return `# ${projectName} 
  
  ## Description ${shortDescription}  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  ${dependencies}
  

  ## Usage
  ${repoInfo}

  ## License
  ${licenceChoice}
  
  ## How to Contribute
  ${contribute}

  ## Tests
  To run test, run the following command:
  
  ${testRun}
  
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${emailAddress}. You can find more of my work at [${gitHubUserName}](https://github.com/${gitHubUserName}).`;
}

module.exports = generateMarkdown;
