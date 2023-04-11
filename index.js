const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information:',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPLv3',
            'ISC License',
            'Mozilla Public License 2.0'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFile("README.md", `# ${answers.title}

## License

[![License: ${answers.license}](https://img.shields.io/badge/${answers.license.replace(/ /g, '-')}-blue.svg)](https://opensource.org/licenses/${answers.license.replace(/ /g, '')})

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license}.

## Questions

For questions or concerns, please contact ${answers.github} at ${answers.email}.
`, (err) => {
            err ? console.error() : console.log("README file created!")
        })
    })

    .catch((error) => {
        console.log(error);
    });

//    Never have to write another README file again! The Professional README Generator does all the hard work for you by adding all of the relevant section headings and it even adds a license badge to you project! Simply run the app, answer the prompts and your README files will be fully professional and fully easy!

//     There is only one dependency required for the README generator, the command to install it is:      npm install inquirer
    
//     To run the README generator, you start by using the command "node <file name> (in this case index.js)" You will then be prompted to answer a series of questions, e.g.     "What is the title of your project?" or "Please provide a description of your project:"    Upon answering all nine of the prompts your professional README file will be generated.
    
//     If you have any questions or suggestions on my code please send them through to the email in the Questions section.
    
//     To test the README generator, simply run the program in the terminal (using the command "node index.js"), answer the prompts and your README file should be generated, with "README file created!" also being logged to the console.
