// The function that returns a license badge based on which license is passed in terminal
function renderLicenseBadge(license) {
  if (license == "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
  if (license == "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0`
    }
    else (license == 'err')
    {
      return 'error! Try again!'
    }
}
// The function that returns the license link
function renderLicenseLink(license) {
  if (license == "MIT"){
    return `https://choosealicense.com/licenses/mit/#`
    }
  if (license == "APache 2.0"){
    return `https://opensource.org/licenses/Apache-2.0`
    }
    else (license == 'err')
    {
      return 'error! Try again!'
    }
}

// The function that returns the license section of README
function renderLicenseSection(license) {
  if(license == "MIT"){
    return `MIT License

      Copyright (c) [year] [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`
    }
  if (license == "Apache 2.0") {
    return `Copyright <YEAR> <COPYRIGHT HOLDER>

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    }
    else (license == 'err')
    {
      return 'error! Try again!'
    }

// The function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.Username}/${data.title}
  # Description
    ${data.Description}

  ## Table of contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Test](#tests)
    *[Questions](#questions)
  ## License
    ${renderLicenseBadge(data.Badge)}
    ${renderLicenseLink(data.Link)}
    ${renderLicenseSection(data.license)}
  ## Installation
    - The following necessary dependencies must be installed to run the application.
  ## Usage
    - In order to use this app, ${data.Usage} license.
  ## Contributing
    - Contributors: ${data.Contributing} 
  ## Tests
    - The following is needed to run the test: ${data.Tests}
  ## Questions
    - If you have any questions about the repo, open an issue or contact ${data.Usage}
`
 }
}
module.exports = generateMarkdown;

