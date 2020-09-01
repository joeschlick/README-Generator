// function to generate markdown for README
function projectURL(github, title) {
  const caseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${caseTitle}`;
}

function licenseBadge(license, github, title) {
  if (license !== "none") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${projectURL(github,title)})`;
  }
  return "";
}

function licenseSection(license) {
  if (license !== "none") {
    return `## License:
      
      This project is licensed under ${license}.`;
  }
  return "";
}

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

If you have any questions about the repo, open an issue or contact [${data.github}](${data.URL}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
