const questionsAsked = [
   {
      message: "What is the Title of your project?",
      name: "title"
   },
   {
      message: "Would you like a banner? (If yes, add image link): ",
      name: "banner"
   },
   // {
   //    message: "Lets add a website badge, what is your url?",
   //    name: "badge"
   // },
   {
      message: "Would you like to add a link to the app? (If yes, add link): ",
      name: "appLink"
   },
   {
      message: "Please provide a description of your project",
      name: "description"
   },
   // {
   //    message: "What is your Table of Contents?",
   //    name: "contents"
   // },
   {
      message: "What command should be used to Install?",
      name: "install"
   },
   {
      message: "What License would you like to use?",
      name: "license",
      type: "list",
      choices: ["mit", "gpl", "apache-2.0", "other", "none"]
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
      message: "What is your GitHub email?",
      name: "email"
   },
   {
      message: "Enter your GitHub username",
      name: "username"
   },
];

module.exports = questionsAsked;