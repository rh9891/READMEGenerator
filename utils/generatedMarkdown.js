function generatedMarkdown(generatedREADMEInput) {
    let READMEbadge = "";
    if (generatedREADMEInput.License == "BDL") {
        READMEbadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    if (generatedREADMEInput.License == "MIT") {
        READMEbadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (generatedREADMEInput.License == "GPL") {
        READMEbadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    };

    return `
# ${generatedREADMEInput.Title}

${READMEbadge}

## Description
${generatedREADMEInput.Description}

## Table of Contents
*  [Description](#Description)
*  [Installation](#Installation)
*  [Usage](#Usage)
*  [Collaborators](#Collaborators)
*  [License](#License)
*  [Contributing](#Contributing)
*  [Tests](#Tests)
*  [Questions](#Questions)
*  [Acknowledgements](#Acknowledgements)

## Installation
The application requires the following dependencies and/or package managers:
~~~
${generatedREADMEInput.Installation}
~~~

## Usage
~~~
${generatedREADMEInput.Usage}
~~~

## Collaborators
${generatedREADMEInput.Collaborators}

## License
The content of this application and the underlying source code used to format and display that content is licensed under the ${generatedREADMEInput.License} license.

## Contributing
${generatedREADMEInput.Contributing}

## Tests
${generatedREADMEInput.Tests}

## Questions
If you have any questions, comments, or issues regarding this application, please don't hesitate to contact me either through [Github](https://github.com/${generatedREADMEInput.Github}) or by email at <${generatedREADMEInput.Email}>.

## Acknowledgements
I would like to acknowledge and thank the following person(s) for their inspiration and/or helpful code: ${generatedREADMEInput.Acknowledgements}
`;

};

module.exports = generatedMarkdown;