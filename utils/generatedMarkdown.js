function generatedMarkdown(generatedREADMEInput) {

return `
# ${generatedREADMEInput.Title}

## Description
${generatedREADMEInput.Description}

## Badges
${READMEbadge}

## Table of Contents
*  [Description](#Description)
*  [Installation](#Installation)
*  [Usage](#Usage)
*  [Credits](#Credits)
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