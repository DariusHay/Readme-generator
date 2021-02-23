const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) => `## Project Title

${answers.title}

## Description

${answers.description}

## Table of Content

1. [Installation requirements](#installation)
2. [Usage info](#usage)
3. [Contributions](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation

${answers.installations}

## Usage

${answers.usage}

## Contributing

${answers.contribution}

## Tests

${answers.test}

## License

![License badge](https://img.shields.io/badge/${answers.license}-2.0-green.svg)

## Questions

If you have any additional questions about this project, you can find me on GitHub at ${answers.github} https://github.com/${answers.github}, or you can email me at ${answers.email}, thank you.`;

inquirer
    .prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a short description of your project.'
    },
    {
        type: 'input',
        name: 'installations',
        message: 'What installations did you use to create this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give a bit of usage information about your application.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Give some contribution guidelines about your application.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for this app?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license for the app',
        choices: ["MIT","Apache", 'GPL', 'BSD', 'MPL']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    }])
    .then((answers) => {
        const readmeContent = generateReadme(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('successfully created README.md file')
        );
    });