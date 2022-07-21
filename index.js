// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", //Type of question
        name: "title", //Variable name
        message: "What is the title?" //Prompt

    },
    {
        type: "list",
        name: "license",
        message: "What License?",
        choices: ["MIT", "Apache 2.0", "GPL"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, "/sample/", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
