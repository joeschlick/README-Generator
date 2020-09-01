// function to generate markdown for README
function projectURL(github, title) {
  const caseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${caseTitle}`;
}

//Creates license badge
function licenseBadge(license, github, title) {
  if (license !== "none") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${projectURL(github, title)})`;
  }
  return "";
}

//Adds license info to License section
function licenseSection(license) {
  if (license !== "none") {
    return `## License:
      
      This project is licensed under ${license}.`;
  }
  return "";
}

//Creates the README content
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license, data.github, data.title)}

## Description:

${data.description}

## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Links](#links)
* [Media](#media)

## Installation:

To install necessary dependancies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage:

${data.usage}

${licenseSection(data.license)}

## Contributing:

${data.contributing}

## Tests:

To run tests run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions:

If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.

## Links:

Repository link: ${data.url}

Deployed application link: ${data.deployed}

## Media:

Screenshot: ${data.screenshot}

Video: ${data.video}

GIF: ${data.gif}
`;
}

//Makes code accessible in other files
module.exports = generateMarkdown;
