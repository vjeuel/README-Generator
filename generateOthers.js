const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const questionsAsked = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
   return inquirer.prompt(questionsAsked);
};
   
async function init() {
   console.log("Hello, helloooo!");
   
   try {
      const answers = await promptUser();

      let github = await axios.get(`https://api.github.com/users/${answers.username}`)

      const md = generateMarkdown(answers, github.data);

      await writeFileAsync("README2.md", md);

      console.log("Congrats, you got a brand new README file!");
      
   } catch (err) {
      console.log(err);
      
   }
};

init();