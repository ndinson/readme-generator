// Function that returns a license badge based on which license is passed in.
// If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`
  }
  return "";
}

// Function that returns the license link.
// If there is no license, return an empty string.
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[MIT License](https://mit-license.org/)`
  }
  if (license == "Apache_2.0") {
    return `[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  }
  if (license == "GPLv3") {
    return `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.txt)`
  }
  if (license == "BSD_3") {
    return `[BSD-3 License](https://opensource.org/license/bsd-3-clause/)`
  }
  else return "";
}

// Function that returns the license section of README.
// If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    Licensed under the ${license} license.`

  }
  return "";
}

// Function to generate markdown for README.
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  Name: ${data.name} \n
  GitHub: [${data.github}](https://github.com/${data.github}) \n
  Email: [${data.email}](mailto:${data.email})
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
