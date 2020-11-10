const fs = require('fs');
const inquirer = require('inquirer');

const writeFile = (replies) => 

    `This project was created by ${replies.name}.  
    They can be contacted by email at ${replies.eMail}.
    The GitHub Account information is ${replies.gitHub}.`



;


async function askReadMe() {

    try {
        const askMe = await inquirer.prompt([

            {
                type: "confirm",
                message: "Hello, I am Jarvis, your personal automated assistant.\n  I will be assiting you with creating an automated readme .md file, \n however I will need to ask you a few questions before we begin.\n  Do you accept?" ,
                name: "acceptance"
            },
            {
                type: "input",
                message: "First, what is the name of the project" ,
                name: "name"
            },
            {
                type: "input",
                message: "Let's have an email address" ,
                name: "eMail"
            },
            {
                type: "input",
                message: "How about a GitHub Account name",
                name: "gitHub"
            },


        ])

const write = writeFile(replies);

        fs.writeFileSync(`${askMe.name}.md`, write);

        console.log(".md is good");
    } catch(err) {
        console.error(err);
     }



}

askReadMe();