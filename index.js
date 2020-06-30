const inquirer = require("inquirer");
const fs = require("fs");
const generatedMarkdown = require("./utils/generatedMarkdown");

inquirer.prompt([
  {
    type: "input",
    name: "Title",
    message: "Generating a purposeful README is important to every project. A good README has a descriptive title that is self-explaining. What would you like the title of your README to be?"
  },
  {
    type: "input",
    name: "Description",
    message: "Every good README needs a short description explaining the what, why, and how of your application. Please provide a short description of your project."
  },
  {
    type: "input",
    name: "Installation",
    message: "Listing specific steps helps get people to use your application in a timely manner. Does your program have any dependencies or package managers (e.g. npm, yarn, bower) that need to be installed? Please list them.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please provide examples of usage for your application. (Like the project description, this section can display examples of code used in your application to give the user a better idea of what your application does.)",
  },
  {
    type: "list",
    name: "License",
    message: "Which license would you like to include in your README?",
    choices: [
      "BSD",
      "MIT",
      "GPL"
    ]
  },
  {
    type: "input",
    name: "Contributing",
    message: "Create guidelines to communicate how people should contribute to your project.",
  },
  {
    type: "input",
    name: "Collaborators",
    message: "List your collaborators (if any). If you have no collaborators, please write 'N/A'.",
  },
  {
    type: "input",
    name: "Tests",
    message: "Explain how to run tests for your application. Explain what these tests do and why they are important.",
  },
  {
    type: "input",
    name: "Email",
    message: "Those using your application should have a way to contact you in case they have any questions or comments. Please enter your email address."
  },
  {
    type: "input",
    name: "Github",
    message: "Please enter your Github username.",
  },
  {
    type: "input",
    name: "Acknowledgements",
    message: "Please list your inspirations or shout out to person whose code that you used. If you don't have a person to thank or idea to refer to, please write 'None'.",
  }
]).then(function(generatedREADMEInput) {
    fs.writeFile("goodREADME.md", generatedMarkdown(generatedREADMEInput), function(err) {
        if (err) throw err;
        console.log("Congratulations! You have successfully generated a good ReadMe.");
    })
});