// The function that returns a license badge based on which license is passed in terminal
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return " ";
  }
}
// The function that returns the license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  }
  return " ";
}

// The function that returns the license section of README
function renderLicenseSection(license) {
  console.log("error");
  if (license !== "None") {
    return `## License
  this project is licensed under the ${license} License
    `;
  }
  return " ";
}
// The function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  ${renderLicenseBadge(data.license)}
# Description
  ${data.Description}
## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${renderLicenseLink(data.license)}
* [Tests](#tests)
* [Questions](#questions)
## Installation
  - The following
  ${
    data.Installation
  } is necessary dependencies must be installed to run the application.
## Usage
  - In order to use this app, ${data.Usage} license.
## Contributing
  - Contributors: ${data.Contributing}
${renderLicenseSection(data.license)}
## Tests
  - The following is needed to run the test: ${data.Tests}
## Questions
  - If you have any questions about the repo, open an issue or contact ${
    data.Email
  }
  - You can see more of my work at [${data.Username}](https://github.com/${
    data.Username
  }
)`;
}

module.exports = generateMarkdown;
