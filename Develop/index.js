// inquirer and fs variables
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// User questions
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project about? The more details the better!",
    name: "Description",
  },
  {
    type: "input",
    message: "Table of contents.(*Installation,*Usage,*License, *Contributing, *Test,*Questions,ect..)",
    name: "Content",
  },
  {
    type: "input",
    message: "What do you need to install this application?",
    name: "Installation",
  },
  {
    type: "input",
    message: "How is this application used?",
    name: "Usage",
  },
  {
    type: "list",
    name: "license",
    message: "Which lisences would you like to use? (MIT & Apache)",
    choices: ["MIT", "Apache"],
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "What commands are needed to test this application?",
    name: "Tests",
  },
  {
    type: "input",
    message: "What technology is used for your application? ",
    name: "Technologies",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
];

// The function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  });
}

// The function to initialize app & save app in outbound folder
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    const filename = "./outbound/" + data.title + ".md";
    writeToFile(filename, generateMarkdown(data));
  });
}

init();
