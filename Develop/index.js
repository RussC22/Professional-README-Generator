// inquirer and fs variables
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// User questions
const questions = [
  {
    type: "input",
    message: "Team members name?",
    name: "Name",
  },
  {
    type: "input",
    message: "What is this team memebers position",
    name: "Position",
  },
  {
    type: "list",
    name: "Contact",
    message: "Choose your email or cell number.",
    choices: ["Email", "Number"],
  },
  {
    type: "input",
    message: "Who is this team members manager?",
    name: "ManagerInfo",
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
    const filename = "./outbound/" + data.title + ".html";
    writeToFile(filename, generateMarkdown(data));
  });
}

init();
