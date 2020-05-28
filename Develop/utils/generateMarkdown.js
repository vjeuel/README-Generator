function generateMarkdown(answers) {
  return `
# ${answers.title}
// Badge
## Description
${answers.description}
<hr/>
## Contents
${answers.contents}
<hr/>
## Install
${answers.install}
<hr/>
## Usage
${answers.usage}
<hr/>
## License
${answers.license}
<hr/>
## Contributors
${answers.contributors}
<hr/>
## Tests
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
