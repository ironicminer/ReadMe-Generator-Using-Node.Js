//
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { type: input, name: projectTitle, message: "What is the project title?" },
  { type: input, name: description, message: "Please enter a description of the project" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) throw error;
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions[0]).then((answers) => {
    console.log(questions[0]);
    console.log(answers);
  });
}

// function call to initialize program
init();

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```

//links = screencastify and GitHub repository

//create a .gitignore files (npm modules/mode_modles bin build .DS_Store *.exe, node.gitignore)
