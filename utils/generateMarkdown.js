// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "https://img.shields.io/badge/Licence-MIT-brightgreen";
      break;
    case "APACHE 2.0":
      return "https://img.shields.io/badge/Licence-APACHE-brightgreen";
      break;
    case "GPL 3.0":
      return "https://img.shields.io/badge/Licence-GPL-brightgreen";
      break;
    case "BSD 3":
      return "https://img.shields.io/badge/Licence-BSD-brightgreen";
      break;
    case "None":
      return "https://img.shields.io/badge/Licence-None-brightgreen";
      break;
  }
}

function renderCommandLine(command){
  return "```\n"+ command +"\n```"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {gitHubUserName, emailAddress, projectName, shortDescription, licenceChoice, dependencies, testRun, repoInfo, contribute} = data;
  return `# ${projectName}

  ![${licenceChoice}](${renderLicenseBadge(licenceChoice)})

  ## Description
  ${shortDescription}  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  ${renderCommandLine(dependencies)}
  
  ## Usage
  ${repoInfo}

  ## License
  ${licenceChoice}
  
  ## How to Contribute
  ${contribute}

  ## Tests
  To run test, run the following command:
  ${renderCommandLine(testRun)}
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${emailAddress}. You can find more of my work at [${gitHubUserName}](https://github.com/${gitHubUserName}).`;
}

module.exports = generateMarkdown;
