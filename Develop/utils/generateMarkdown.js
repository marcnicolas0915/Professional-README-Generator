// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const badgeImg = `https://img.shields.io/badge/license-${license}-green`;
  return `![License](${badgeImg})`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const licenseLink = `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  return `[${license}](${licenseLink})`

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

    This project is licensed under the ${renderLicenseLink(license)} license.
    
    ${renderLicenseBadge(license)}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tocItems = answers.tableOfContents.split(',').map((item) => item.trim());
  const tocMarkdown = tocItems.map((item) => {
    const link = item;
    return `* [${item}](#${link})`;
  })
    .join('\n');
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  
  ${tocMarkdown}
  
## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about this project, please contact me at ${data.email}. You can also visit my [GitHub profile](https://github.com/${data.username}) to view my other projects.
  `;
};

module.exports = generateMarkdown;
