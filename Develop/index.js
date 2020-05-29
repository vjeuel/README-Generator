const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const questionsAsked = require("./utils/questions");
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
   return inquirer.prompt(questionsAsked);
};

function writeToFile(fileName, data) {
   inquirer.prompt(username).then(({ username }) => {
      const queryUrl = `https://api.github.com/users/${username}`;
   
      axios.get(queryUrl).then(res => {
      });      
   });
};
   
async function init() {
   console.log("Hello, helloooo!");
   
   try {
      const answers = await promptUser();

      const md = generateMarkdown(answers);

      await writeFileAsync("../../README.md", md);

      console.log("Congrats, you got a brand new README file!");
      
   } catch (err) {
      console.log(err);
      
   }
};

init();

// generateMarkdown imagetag, style tag to imagetag
//    < img style = "border-radius" >
      