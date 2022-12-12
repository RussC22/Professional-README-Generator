// TODO: Include packages needed for this application
// inquirer, fs, util, and markdown
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// const generateMarkdown = require('./util/generateMarkdown')
// TODO: Create an array of questions for user input
// User questions
inquirer
    .prompt([
        {
            type: "input",
            message: 'What is the title of your project?',
            name: "title"
        },
        {
            type: "input",
            message: 'What is your project about? The more details the better!',
            name: "Description"
        },
        {
            type: "input",
            message: 'What is the name of your project?',
            name: "title"
        },
        {
            type: "input",
            message: 'What is the name of your project?',
            name: "title"
        },
        {
            type: "input",
            message: 'What is the name of your project?',
            name: "title"
        },
        {
            type: "input",
            message: 'What is the name of your project?',
            name: "title"
        },


    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName,data, function(err){
    console.log(fileName), console.log(data)
        if(err){return console.log(err)}
        else {console.log('sucess!')}
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.Prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data)); console.log(data)
        })
}


// Function call to initialize app
init()



