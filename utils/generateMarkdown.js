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
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ${}

  ## Instulation Instructions

  ${}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributions

  ${data.contributions}

  ## Test

  To run tests:

  \`\`\`js
  npm run tests
  \`\`\`

  ## Questions
  GitHub repository and email: ${data.userName} ${data.email}
`;
}

module.exports = generateMarkdown;
