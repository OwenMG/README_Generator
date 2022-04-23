// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Please describe your application."
},
{
    type: "input",
    name: "installinfo",
    message: "Please describe the installation instructions for your application."
},
{
    type: "input",
    name: "usageinfo",
    message: "Please describe usage information for your application."
},
{
    type: "input",
    name: "gitname",
    message: "Please enter your GitHub username"
},
{
    type: "input",
    name: "email",
    message: "Please enter your contact email"
},
{
    type: "list",
    name: "license",
    message: "Please choose a license for your project.",
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'GPL 2.0', 'BSD 3', "None"]
},
{
    type: "input",
    name: "contributing",
    message: "Please describe how others can contribute to your project."
},
{
    type: "input",
    name: "tests",
    message: "Please describe how to run any included tests for your project"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const pagedata = generateMarkdown(data)
    console.log(pagedata);
    fs.writeFile(fileName, pagedata, (err) => 
    err ? console.error(err) : console.log ("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile("README.md",data);
    })
}

// Function call to initialize app
init();
