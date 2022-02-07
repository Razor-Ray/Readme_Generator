# Readme Generator

  ![MIT](https://img.shields.io/badge/Licence-MIT-brightgreen)

  ## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

  ## Description
  The Readme_Generator app is created in a node.js environment to generate quality readme using various user inputs. Key learning with this application was to use modules and importance of gitIgnore. In this application we have used the inquirer module to capture user entry.
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  ```
  npm i
  ```
  
  ## Usage
  In order to use this applciation node.js needs to be installed in the terminal.
  ```
  node index.js
  ```
  Above command should be run to iniate the application in a terminal environment.

  ## App Demo

  ![Alt Text](./assets/AppDemo.gif)

  You can view a quality demo video from [Youtube](https://www.youtube.com/watch?v=xR7aR2gFqe0)



  ## License
  MIT
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at surajshrestha121@hotmail.com. You can find more of my work at [razor-ray](https://github.com/razor-ray).