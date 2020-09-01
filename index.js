const markDown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the project title"
    },

    {
        type: "input",
        name: "description",
        message: "Enter a description of the project"
    },

    {
        type: "input",
        name: "URL to Project",
        message: "the URL to your project?"
    },

    {
        type: "input",
        name: "installation",
        message: "Enter user installation instructions"
    },

    {
        type: "input",
        name: "usage",
        message: "Enter user instructions for the project",
    },

    {
        type: "list",
        name: "license",
        message: "Select the type of license the project is covered under",
        choices: [
            "none",
            "Apache 2.0",
            "BSD 3",  
            "GPL v3",
            "ISC",
            "MIT",
            "Mozilla",
        ],
    },

    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines",
    },

    {
        type: "input",
        name: "tests",
        message: "Enter test instructions",
    },

    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username",
    },

    {
        type: "input",
        name: "email",
        message: "Enter your email address",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", markDown({...response}))
    });
}   

// function call to initialize program
init();

