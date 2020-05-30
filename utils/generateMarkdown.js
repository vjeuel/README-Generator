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

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![GitHub commit activity the past week, 4 weeks](https://img.shields.io/github/commit-activity/y/eslint/eslint.svg?style=flat)]()
[![GitHub commits since](https://img.shields.io/github/commits-since/tterb/playmusic/v1.2.0.svg)]() 

[![LinkedIn][linkedin-shield]][linkedin-url]

[![forthebadge](https://forthebadge.com/images/badges/approved-by-george-costanza.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/no-ragrets.svg)](https://forthebadge.com)

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

### License
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
