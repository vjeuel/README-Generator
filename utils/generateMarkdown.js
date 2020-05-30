function generateMarkdown(answers, data) {
  return `
# ${answers.title}\n
<p align="center">
  <img src="${answers.banner}" height="100%">
</p>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

You can access the app [here](${answers.appLink})\n

### Description\n

####### ${answers.description}
<hr/>

### Contents\n
####### ${answers.contents}
<hr/>

### Install\n
####### ${answers.install}
<hr/>

### Usage\n
####### ${answers.usage}
<hr/>

### License\n
####### ${answers.license}
<hr/>

### Contributors\n
####### ${answers.contributors}
<hr/>

### Tests\n
####### ${answers.tests}
---

### Contact
${answers.username}
####### ${data.email}
<p>
  <img src="${data.avatar_url}" height="120" style="border-radius:50%">
</p>
`;
}

module.exports = generateMarkdown;
