function generateMarkdown(answers) {
  return `
#${answers.title}\n
<p align="center">
  <img src="${answers.banner}" height="100%">
</p>
// Badge\n
You can access the app [here](${answers.appLink})\n
### Description\n
${answers.description}
<hr/>
### Contents\n
${answers.contents}
<hr/>
### Install\n
${answers.install}
<hr/>
### Usage\n
${answers.usage}
<hr/>
### License\n
${answers.license}
<hr/>
### Contributors\n
${answers.contributors}
<hr/>
### Tests\n
${answers.tests}
<hr/>
${answers.picture}
<hr/>
${answers.email}
<hr/>
${answers.username}
`;
}

module.exports = generateMarkdown;
