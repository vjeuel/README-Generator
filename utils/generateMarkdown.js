function generateMarkdown(answers, data) {
  return `
# ${answers.title}\n
<p align="center">
  <img src="${answers.banner}" height="100%">
</p>

<p align="center">
  <a>
    <img src="https://img.shields.io/badge/contributor-my%20grandma-green?style=for-the-badge" /></>
  <a>
    <img src="https://img.shields.io/badge/approved%20by-Arya%20Stark-red?style=for-the-badge" /></a>
  <a>
    <img src="https://img.shields.io/badge/powered%20by-lack%20of%20sleep-orange?style=for-the-badge" /></a>
</p>

You can access the app [here](${answers.appLink})\n

## Description\n

${answers.description}
<hr/>

## Contents<br>
**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#License)**</br>
**[Contributors](#Contributors)**<br>
**[Tests](#Tests)**<br>
**[Contact](#Contact)**<br>

${answers.contents}
<hr/>

## **Installation**<br>
${answers.install}
<hr/>

## **Usage**<br>
${answers.usage}
<hr/>

## **License**<br>
${answers.license}
<hr/>

## **Contributors**<br>
${answers.contributors}
<hr/>

## **Tests**<br>
${answers.tests}
<hr/>


## **Contact**<br>
${answers.username}<br>
${answers.email}
<p>
  <img src="${data.avatar_url}" height="120" style="border-radius:50">
</p>
`;
}

module.exports = generateMarkdown;
