// TODO: Include packages needed for this application

import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
// const questions = [];
// Prompt the user
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What do you want the user to know about your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can the user install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can a user contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can your project be tested?'
    },
    {
      type: 'list',
      message: 'What is the license for your project?',
      name: 'license',
      choices: ['MIT', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'Username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
])
  
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
  //.then((answer) => answer.json())
    .then((answer) =>{
  console.log("typeof: " + typeof answer);
      fs.writeFile('README.md', generateMarkdown(answer), function(err) {
        if (err) {
          return console.log(err);
        }})
        console.dir(answer);
    
    });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
// init();
