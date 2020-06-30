// Function that generates the README file and inputs the user's information based on their answers.
function generatedMarkdown(generatedREADMEInput) {
// Variable for the README badge.
    let READMEbadge = "";
// If the user chooses the BDL license option for their repository, the corresponding badge is rendered at the top of the README.
    if (generatedREADMEInput.License == "BDL") {
        READMEbadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
// If the user chooses the MIT license option for their repository, the corresponding badge is rendered at the top of the README.
    if (generatedREADMEInput.License == "MIT") {
        READMEbadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
// If the user chooses the GPL license option for their repository, the corresponding badge is rendered at the top of the README.
    if (generatedREADMEInput.License == "GPL") {
        READMEbadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    };

// Using the inputted answers of the the user from the index.js, the appropriate information is generated into the README file.
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

// Instruction that tells Node which functions, objects, variables, and strings to refer to from a given file so that this file is allowed to access the code (the user input information).
module.exports = generatedMarkdown;