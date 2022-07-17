const inquirer = require('inquirer');
const fs = require('fs');
function generateLicense(l){
    if(l=="Unlicensed"){
        return""
    }
    else{
        return `[![License:${l} ](https://img.shields.io/badge/License-${l}-blue.svg)](https://opensource.org/licenses/${l})`
    }
};

const readMe = ({Description,Usage,Installation,License,Test,Questions}) => {
   return `
# ${Description}  

## Table Of Contents
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Test](#test)
* [Questions](#questions)
    
## Usage
    
${Usage}

## Installation

${Installation}

## License

${generateLicense(License)}

## Test

${Test}

## Questions

${Questions} `
};

function init(){
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
        type:'rawlist',
        message:'Please choose your license.',
        name:'License',
        choices:['ISC','MIT','PDDL','Unlicensed'],
    },
    {
        type:'input',
        message:'Please enter test instructions',
        name:'Test',
    },
    {
        type: 'input',
        message: 'What is the purpose of the application?',
        name:'Usage',
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
    {
        type:'input',
        message:'Add additional information for viewers to reach you with questions ',
        name: 'Questions',
    },

]).then((data) => {
    const info = readMe(data);

    fs.writeFile('README.md', info, (err) =>
    err ? console.log(err) : console.log('Success!'));
});
};


init();