const inquirer = require('inquirer');
const fs = require('fs');

const readMe = ({Description,Usage,Installation,License,Test,Questions}) => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Creat A ReadMe</title>
    </head>
    <h1>${Description}  </h1>
    
    <body>
        <div>
            <ul> Table Of Contents</ul>
            <li>Usage</li>
            <li>Installation</li>
            <li>License</li>
            <li>Test</li>
            <li>Questions</li>
        </div>
        <div>
            <p>${Usage}</p>
        </div>
        <div>
            <p>${Installation}</p>
        </div>
        <div>
            <p>${License}</p>
        </div>
        <div>
            <p>${Test}</p>
        </div>
        <div>
            <p>${Questions}</p>
        </div>
    </body>
    </html>`
};

inquirer
.prompt([
    {
    type: 'input',
    message: 'What is the task for this project?',
    name: 'Description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions.',
        name: 'Installation',
    },
    {
        type:'rawList',
        message:'Please choose your license.',
        name:'License',
    },
    {
        type:'input',
        message:'Please enter test instructions',
        name:'Test',
    },
    {
        type: 'input',
        message: 'Enter Github url here.',
        name:'Questions',
    },
    {
        type: 'input',
        message:'Enter email here.',
        name: 'Questions',
    },

]).then((data) => {
    const info = readMe(data);

    fs.writeFile('index.html', generateHtml, (err) =>
    err ? console.log(err) : console.log('Success!'));
});

function init() {}

init();