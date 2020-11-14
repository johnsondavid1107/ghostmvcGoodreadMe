const fs = require('fs');
const inquirer = require('inquirer');

const chosenLicense = [];


const writeFile = (replies) =>
`${chosenLicense}

# Table of Contents for ${replies.name}
# Installation
# Usage
# License
# Contributions
# Tests
# Questions


## Installation
${replies.install}

## Usage
${replies.usage}
Here is a description of this application ${replies.description}.
## License
This application is covered by the ${replies.license} license.
## Contributions
${replies.contribution}
## Tests
${replies.test}
## Questions
Please reach out to me for any questions answered here: https://github.com/${replies.gitHub},
or directly here: ${replies.eMail}.
`;

async function askReadMe() {

    try {
        const askMe = await inquirer.prompt([

            {
                type: "confirm",
                message: "Hello, I am Jarvis, your personal automated assistant.\n  I will be assiting you with creating an automated readme .md file \n however, I will need to ask you a few questions before we begin.\n  Do you accept?",
                name: "acceptance"
            },
            {
                type: "input",
                message: "First, what is the name of the project?",
                name: "name"
            },
            {
                type: "input",
                message: "Let's have an email address..",
                name: "eMail"
            },
            {
                type: "input",
                message: "How about a GitHub Account name",
                name: "gitHub"
    
            },
            {
                type: "input",
                message: "Please enter a description",
                name: "description"
            },
            {
                type: "list",
                message: "Which license would you like to authenticate your product?",
                name: "license",
                choices:["MIT", "Apache 2.0", "GNU"] 
            },
            {
                type: "input",
                message: "How does one install the app?",
                name: "install"
            },
            {
                type: "input",
                message: "How can this application be used?",
                name: "usage"
            },
            {
                type: "input",
                message: "Who currently contributes, and how would you like contributions to be done?",
                name: "contribution"
            },
            {
                type: "input",
                message: "How does one test this application?",
                name: "test"
            },


        ])
        console.log(askMe);

        if(askMe.license == "MIT") {
            chosenLicense.push(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
            console.log(chosenLicense);
        } else if(askMe.license == "Apache 2.0" ){
            chosenLicense.push(`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`)
            console.log(chosenLicense);
        } else {
            chosenLicense.push(`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`)
            console.log(chosenLicense)
        };

        const write = writeFile(askMe);

        fs.writeFileSync(`${askMe.name}.md`, write);
        

        console.log(".md is good");
    } catch (err) {
        console.error(err);
    }



}

askReadMe();
