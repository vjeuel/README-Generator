function generateMarkdown(answers) {
  return `
<p align="center">
  <img src="${answers.banner}" height="100%">
</p>
# ${answers.title}\n
// Badge\n
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
