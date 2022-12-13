// TODO: Include packages needed for this application
// inquirer and fs variables
const inquirer = require('inquirer');
const fs = require('fs');


// const generateMarkdown = require('./util/generateMarkdown')


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
        else {console.log('success!')}
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.Prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data)); console.log(data)
        })
}



