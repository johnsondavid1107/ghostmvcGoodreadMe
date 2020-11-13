const fs = require('fs');
const inquirer = require('inquirer');


const writeFile = (replies) =>
    `
    Table of Contents
    Installation
    ${replies.install}

    Usage
    ${replies.usage}
    License
    ${replies.license}
    Contributions
    ${replies.contribution}
    Tests
    ${replies.test}
    Questions
    ${replies.question}


    
    
    
    
    
    
    This project was created by ${replies.name}.  
    They can be contacted by email at ${replies.eMail}.
    The GitHub Account information is ${replies.gitHub}.
    Here is a description of this application ${replies.description}.
    You like these foods! ${replies.food}
    
    
    
    
    
    
    
    
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
                message: "Which one of these do you like best?",
                name: "food",
                choices:["Pizza", "Hamburgers", "Fries"] 
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


        ])
        console.log(askMe);

        const write = writeFile(askMe);

        fs.writeFileSync(`${askMe.name}.md`, write);

        console.log(".md is good");
    } catch (err) {
        console.error(err);
    }



}

askReadMe();