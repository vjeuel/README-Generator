const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
   {
      message: "Enter your GitHub username",
      name: "username"
   },
   {
      message: "What Badge would you like to use?",
      name: "badge"
   },
   {
      message: "What is the Title of your project?",
      name: "title"
   },
   {
      message: "Please provide a description of your project",
      name: "description"
   },
   {
      message: "Table of contents?",
      name: "contents"
   },
   {
      message: "Installation?",
      name: "install"
   },
   {
      message: "Usage",
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
      message: "Tests",
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
];


function writeToFile(fileName, data) {
   inquirer.prompt(username).then(({ username }) => {
         const queryUrl = `https://api.github.com/users/${username}/repos?per_page=50`;
   
         axios.get(queryUrl).then(res => {
            const repoNames = res.data.map(repo => {
               return repo.name
            });

            
            
            
            
         });
      });
};

   
   
   function init() {
      const repoNamesStr = repoNames.join(",\n");
      
   fs.writeFile("README.md", repoNamesStr, err => {
      if (err) {
         throw err;
      }

   })
};


init();