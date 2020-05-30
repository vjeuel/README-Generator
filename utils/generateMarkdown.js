function generateMarkdown(answers, data) {
  return `
# ${answers.title}\n
<p align="center">
  <img src="${answers.banner}" height="100%">
</p>

<p align="center" margin="20px">
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

## Contents<br>
**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#License)**</br>
**[Contributors](#Contributors)**<br>
**[Tests](#Tests)**<br>
**[Contact](#Contact)**<br>

## **Installation**<br>
${answers.install}

## **Usage**<br>
${answers.usage}

## **License**<br>
${answers.license}

## **Contributors**<br>
${answers.contributors}

## **Tests**<br>
${answers.tests}


## **Contact**<br>
${answers.username}<br>
${answers.email}<br>
[LinkedIn](${answers.urlLinkedIn})

img[src="${data.avatar_url}"]{
  height: 120px;
  border-radius:50%;
}
// <p>
//   <img src="${data.avatar_url}" height="120" border-radius="20">
// </p>
`;
}

module.exports = generateMarkdown;
