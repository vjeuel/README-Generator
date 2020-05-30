function generateMarkdown(answers, data) {
  return `
# ${answers.title}\n
<p align="center">
  <img src="${answers.banner}" height="100%">
</p>

[![forthebadge](https://forthebadge.com/images/badges/approved-by-george-costanza.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/no-ragrets.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/as-seen-on-tv.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

<p align="center">
  <a>
    <img src="https://img.shields.io/badge/contributor-my%20grandma-green" /></a>
  <a>
    <img src="https://img.shields.io/badge/approved by-Arya%20Stark-red" /></a>
  <a>
    <img src="https://img.shields.io/badge/powered%20by-lack%20of%20sleep-orange" /></a>
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
${answers.username}
${data.email}
<p>
  <img src="${data.avatar_url}" height="120" style="border-radius:50%">
</p>
`;
}

module.exports = generateMarkdown;
