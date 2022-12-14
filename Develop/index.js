// TODO: Include packages needed for this application
// inquirer and fs variables
const inquirer = require('inquirer');
const fs = require('fs');

// var generateMarkdown = require('./utils/generateMarkdown');


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
            message: 'Table of contents.(Installation,Usage,License, ect....)',
            name: "Content Table"
        },
        {
            type: "input",
            message: 'What do you need to install this application?',
            name: "Installation"
        },
        {
            type: "input",
            message: 'How is this application used?',
            name: "Usage"
        },
        {
            type: "list",
            name: "License",
            message: 'Which lisences would you like to use? (MIT & Apache)',
            choices: ['MIT','Apache']

        },
        {
            type: "input",
            message: 'Who contributed to this project?',
            name: "Contributing"
        },
        {
            type: "input",
            message: 'What commands are needed to test this application?',
            name: "Tests"
        },
        {
            type: "input",
            message: 'What technology is used for your application? ',
            name: "Technologies"
        },
        {
            type: "input",
            message: 'What is your Github username?',
            name: "Username"
        },
        {
            type: "input",
            message: 'What is your email address?',
            name: "Email"
        },
        
    ])

// The function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName,data, function(err){
    console.log(fileName), console.log(data)
        if(err){return console.log(err)}
        else {console.log('success!')}
})
}

// The function to initialize app
function init() {
    inquirer.Prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data)); console.log(data)
        })
}

