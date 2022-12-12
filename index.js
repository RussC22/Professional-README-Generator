// inquirer, fs, util, and markdown
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./util/generateMarkdown')

// User questions
inquirer
    .createPromptModule([
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