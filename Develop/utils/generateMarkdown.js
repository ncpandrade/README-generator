// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (obj) => {
  /**
   * We know that data is a JSON Object that looks like this: 
   * 
   * {
    "title": "nadine",
    "description": "ndae",
    "installation": "ndaf",
    "usage": "fjasd",
    "contributing": "fasf",
    "tests": "sfds",
    "license": "MIT",
    "Username": "fs",
    "email": "fsdf"
  }
   * 
  
  
  We need a String that represents the markdown.
  
  
  We could take that object and use a forEach loop
  and for each property in that object, we use a callback 
  that takes the key and outs it as the argument of a switch statement
  and for different keys we concatenate different markdown syntax.
   * 
   */
  //const obj = JSON.parse(data);
  
  let md = ``;
  
  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
    switch (property) {
      case "title":

        md = md.concat(`# ${obj[property]}`);
        break;
      case "description":
        md = md.concat(`## Description: ${obj[property]} \n`)
        break;
      case "installation":
        md = md.concat(`## Installation: ${obj[property]} \n `)
        break;
      case "usage":
        md = md.concat(`## usage: ${obj[property]} \n`)
        break;
      case "contributing":
        md = md.concat(`## contributing: ${obj[property]} \n`)
        break;
      case "tests":
        md = md.concat(`## tests: ${obj[property]} \n`)
        break;
      case "username":
        md = md.concat(`## Questions: [${obj[property]}](https://www.github.com/${obj[property]})`);
        break;
      case "email":
        md = md.concat(` ### For questions please email me at: ${obj[property]} \n`)
      default:

    }
  }
  return md;

  //return `# ${data.title}
}

//module.exports = generateMarkdown;
export default generateMarkdown;