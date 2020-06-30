# README Generator

[![npm version](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://badge.fury.io/js/%40angular%2Fcore)

## Table of Contents
*  [Description](#Description)
*  [Links](#Links)
*  [Installation](#Installation)
*  [Usage](#Usage)
*  [License](#License)
*  [Contributing](#Contributing)
*  [Questions](#Questions)

## Description
This is a command line interface application that allows the user to create a new README by answering a series of questions about their repository.

## User Story
~~~
AS A user   
I WANT to create a thorough, high-quality, professional README documentation  
SO THAT I can provide a description and demonstration of my application to my users.
~~~

## Features of the Application:
~~~
GIVEN a command-line application that accepts user input  
WHEN I am prompted for information about my application repository  
THEN a README file is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
~~~

## Preview GIF of README Generator

The following animation demonstrates the application functionality:

![README Generator](https://github.com/rh9891/READMEGenerator/blob/master/assets/images/README-Generator.gif)

# Links

1. [Deployed Application](https://rh9891.github.io/READMEGenerator)

2. [Github Repository](https://github.com/rh9891/READMEGenerator)

## Installation

The application requires the following dependencies and/or package managers:
~~~
npm install inquirer
~~~

## Usage

An example of usage of the function writing the user inputs into a README file:
~~~
(function(generatedREADMEInput) {
    fs.writeFile("goodREADME.md", generatedMarkdown(generatedREADMEInput), function(err) {
        if (err) throw err;
        console.log("Congratulations! You have successfully generated a good ReadMe.");
        })
~~~

## License

This application does not currently have any licenses, so the user is not permitted to use, modify, or share any parts of it. Though the code for this application is hosted on Github, where you are allowed to view and fork the code, this does not imply that the user is permitted to use, modify, or share the contents of this application for any purpose.

## Contributing

If you would like to contribute to this repository, please let me know of any changes that you would like to make by contacting me via Github or email.

## Questions

If you have any questions, comments, or issues regarding this command line interface application, please don't hesitate to contact me either through [Github](https://github.com/rh9891) or by email at <romie.hecdivert@gmail.com>.
