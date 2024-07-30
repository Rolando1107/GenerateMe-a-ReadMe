function renderLicenseBadge(license) {
    if (license === 'None') {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${license.replace(' ', '_')}-blue.svg)`;
  }
  
  function renderLicenseLink(license) {
    if (license === 'None') {
      return '';
    }
    return `- [License](#license)`;
  }
  
  function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    }
    return `## License
  
  This project is licensed under the ${license} license.`;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about the project, you can contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).
  `;
  }
  
  export default generateMarkdown;
  