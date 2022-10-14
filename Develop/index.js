// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Input the title of your project.",
        default: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter a project name');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: ",
        default: '',
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install the project.",
        default: '',
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.", 
        default: '',
    },
    {
        type: "input",
        name: "contributing",
        message: "If you have collaborators, input their GitHub profiles.",
        default: '',
    },
    {
        type: "input",
        name: "tests",
        message: "Link test files.", 
    {
        type: "confirm",
        name: "license",
        message: "Does your GitHub apppliation have a license? (ReadMe Generator will find it)",
        default: false,
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "repo",
        message: "Input your GitHub repository name.",
        default: '',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('You must enter your GitHub repository name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Input your email.",
        default: '',
   ];

function writeToFile(fileName, data) {}


function init() {}

init();
