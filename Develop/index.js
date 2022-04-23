// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
"What is the title of your project?", 
"Please describe your application.",
"Please describe the installation instructions for your application.",
"Please describe usage information for your application.",
"Please choose a license for your project.",
"What is your GitHub username?"
];

const data = `
# ${answers.title}

## Description

## Installation Instructions

## Usage Information

## License

## Questions

If you have any questions, you can contact me via:
| :memo:  [GitHub](https://github.com/${answers.gitname})   |
|-----------------------------------------------------------|

| :memo:  [Email](mailto:${answers.email})                  |
|-----------------------------------------------------------|

`
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
