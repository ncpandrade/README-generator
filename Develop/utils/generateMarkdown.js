// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => { 
  console.log(license);
  let licenseChoice = license;
  let licenseBadge = ''
if (licenseChoice === 'MIT') {
  licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (licenseChoice === 'GNU GPLv3') {
  licenseBadge =  `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else
  licenseBadge = ''

return licenseBadge;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => { 
let licenseChoice = license;
let licenseLink = ''
if (licenseChoice === 'MIT') {
licenseLink = `[License: MIT](https://www.mit.edu/~amini/LICENSE.md)`
} else if (licenseChoice === 'GNU GPLv3') {
licenseLink =  `![GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html)`
} else
licenseLink = ''

return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (obj) => {

  //licensebadge

  let md = ``;

  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
    switch (property) {
      case "title":
        md = md.concat(`# ${obj[property]} \n `);
        break;
      case "description":
        md = md.concat(`## Description: ${obj[property]} \n`)
        break;
      case "installation":
        md = md.concat(`## Installation: ${obj[property]} \n `)
        break;
      case "usage":
        md = md.concat(`## Usage: ${obj[property]} \n`)
        break;
      case "contributing":
        md = md.concat(`## Contributing: ${obj[property]} \n`)
        break;
      case "license":
        md = md.concat(`## License: ${renderLicenseBadge(obj[property])} ${renderLicenseLink(obj[property])} \n`);
        break;
      case "tests":
        md = md.concat(`## Tests: ${obj[property]} \n`)
        break;
      case "Username":
        md = md.concat(`## Questions: [${obj[property]}](https://www.github.com/${obj[property]}) \n`);
        break;
      case "email":
        md = md.concat(` ### For questions please email me at: ${obj[property]} \n`)
      default:
    }

  }
  return md;

}

//module.exports = generateMarkdown;
export default generateMarkdown;