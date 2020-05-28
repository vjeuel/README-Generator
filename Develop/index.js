const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
   {
      message: "What is the Title of your project?",
      name: "title"
   },
   {
      message: "What Badge would you like to use?",
      name: "badge"
   },
   {
      message: "Please provide a description of your project",
      name: "description"
   },
   {
      message: "What is your Table of Contents?",
      name: "contents"
   },
   {
      message: "WHat command should be used to Install?",
      name: "install"
   },
   {
      message: "Can can this repo be used for?",
      name: "usage"
   },
   {
      message: "What License would you like to use?",
      name: "license"
   },
   {
      message: "Who contributed to this project?",
      name: "contributors"
   },
   {
      message: "Run any Tests?",
      name: "tests"
   },
   {
      message: "Would you like to post your picture to this project?",
      name: "picture"
   },
   {
      message: "What is your GitHub email?",
      name: "email"
   },
   {
      message: "Enter your GitHub username",
      name: "username"
   },
];

function promptUser() {
   return inquirer.prompt(questions);
};

function generateMarkdown() {
   fs.readFile("./utils/generateMarkdown.js", "utf8", (err, data) => {
      if (err) {
         return console.log(err);
      }
   });
};

function writeToFile(fileName, data) {
   inquirer.prompt(username).then(({ username }) => {
      const queryUrl = `https://api.github.com/users/${api}`;
   
      axios.get(queryUrl).then(res => {
      });      
   });
};

   
   
async function init() {
   console.log("Hello, helloooo");
   
   try {
      const answers = await promptUser();

      const md = generateMarkdown();

      await writeFileAsync("README.md", md);

      console.log("Congrats, you got a brand new README file!");
      
   } catch (err) {
      console.log(err);
      
   }
};

init();