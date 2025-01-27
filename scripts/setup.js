#!/usr/bin/env node
/*
  scripts/setup.js
  ---------------------------------------------------------------------------------
  A script to help new users rename this project and optionally set a new Git remote.
  It replaces:
    - "CambridgeMonorail" with the new Org name
    - "react-weapons-of-choice" with a machine-readable app name
    - "React Weapons of Choice" with a human-readable app name
    - "rwoc" with a short abbreviation
  ---------------------------------------------------------------------------------
*/

import fs from 'fs';
import path from 'path';

// List of files or globs where we want to do replacements
// Adjust or expand as needed to reflect your actual file structure.
function getFilesToReplace() {
  return [
    '.github/workflows/**', 
    '**/.env', 
    'apps/client/**', 
    'libs/**/package.json', 
    'libs/**/README.md', 
    'libs/storybook-host/**/*.ts', // Include .ts files in libs/storybook-host
    'libs/shell/**/*.tsx', // Include .tsx files in libs/shell
    'package.json',
    'README.md',
  ];
}

function validateInput(input, regex, errorMessage) {
  if (!regex.test(input)) {
    return errorMessage;
  }
  return true;
}

async function deleteDirectoryContents(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      fs.unlinkSync(filePath);
    }
    console.log(`Deleted contents of directory: ${directoryPath}`);
  } catch (error) {
    console.error(`Failed to delete contents of directory: ${directoryPath}`, error);
  }
}

(async function main() {
  try {
    console.log("Welcome to the setup script! Let's get started.\n");

    // Dynamically import inquirer and child_process
    const inquirer = await import('inquirer');
    const { execSync } = await import('child_process');

    // 1. Prompt the user for new values
    const answers = await inquirer.default.prompt([
      {
        type: 'input',
        name: 'newOrgName',
        message: 'Enter your new GitHub Org name (replacing "CambridgeMonorail"):',
        default: 'my-new-org',
        validate: (input) => validateInput(input, /^[a-zA-Z0-9-_]+$/, 'Invalid org name. Use only letters, numbers, hyphens, and underscores.'),
      },
      {
        type: 'input',
        name: 'newAppNameMachine',
        message: 'Enter a machine-readable app name (replacing "react-weapons-of-choice"):',
        default: 'my-awesome-app',
        validate: (input) => validateInput(input, /^[a-zA-Z0-9-_]+$/, 'Invalid app name. Use only letters, numbers, hyphens, and underscores.'),
      },
      {
        type: 'input',
        name: 'newAppNameHuman',
        message: 'Enter a human-readable app name (replacing "React Weapons of Choice"):',
        default: 'My Awesome App',
        validate: (input) => validateInput(input, /^[a-zA-Z0-9\s]+$/, 'Invalid app name. Use only letters, numbers, and spaces.'),
      },
      {
        type: 'input',
        name: 'newAbbreviation',
        message: 'Enter a short abbreviation (replacing "rwoc"):',
        default: 'maa',
        validate: (input) => validateInput(input, /^[a-zA-Z0-9]+$/, 'Invalid abbreviation. Use only letters and numbers.'),
      },
      {
        type: 'confirm',
        name: 'updateGitRemote',
        message: 'Would you like to set a new Git remote?',
        default: true,
      },
      {
        type: 'input',
        name: 'newGitUrl',
        message: 'Enter the new Git remote URL:',
        when: (answers) => answers.updateGitRemote,
        default: 'https://github.com/my-new-org/my-awesome-app.git',
        validate: (input) => validateInput(input, /^(https?|git):\/\/[^\s/$.?#].[^\s]*$/, 'Invalid URL. Please enter a valid Git remote URL.'),
      },
      {
        type: 'confirm',
        name: 'deleteLighthouseBadges',
        message: 'Would you like to delete the contents of the lighthouse-badges directory?',
        default: true,
      },
    ]);

    const {
      newOrgName,
      newAppNameMachine,
      newAppNameHuman,
      newAbbreviation,
      updateGitRemote,
      newGitUrl,
      deleteLighthouseBadges,
    } = answers;

    console.log("\nStarting the setup process...\n");

    // 2. Perform text replacements
    const filesToReplace = getFilesToReplace();

    try {
      console.log("Replacing text in files...");
      const { replaceInFile } = await import('replace-in-file');
      const result = await replaceInFile({
        files: filesToReplace,
        from: [
          /CambridgeMonorail/g,         // old GitHub Org
          /react-weapons-of-choice/g,   // old machine-readable name
          /React Weapons of Choice/g,   // old human-readable name
          /rwoc/g                       // old abbreviation
        ],
        to: [
          newOrgName,        // new GitHub Org
          newAppNameMachine, // new machine-readable name
          newAppNameHuman,   // new human-readable name
          newAbbreviation,   // new abbreviation
        ],
      });
      console.log('Replacements complete!');
      result.forEach((fileResult) => {
        if (fileResult.hasChanged) {
          console.log(`Modified: ${fileResult.file}`);
        }
      });
    } catch (error) {
      console.error('Error occurred while replacing text:', error);
      process.exit(1);
    }

    // 3. Optionally update Git remote
    if (updateGitRemote && newGitUrl) {
      try {
        console.log("Updating Git remote...");
        // Remove old origin if it exists
        execSync('git remote remove origin', { stdio: 'ignore' });
      } catch (err) {
        // If there's no existing 'origin', ignore
      }

      try {
        execSync(`git remote add origin ${newGitUrl}`);
        console.log(`\nNew remote origin set to: ${newGitUrl}`);
      } catch (err) {
        console.error('Failed to set new remote:', err.message);
      }

      try {
        // Attempt an initial push
        execSync('git push -u origin main', { stdio: 'inherit' });
      } catch (err) {
        console.error('\nCould not push to the new remote:', err.message);
      }
    }

    // 4. Optionally delete contents of lighthouse-badges directory
    if (deleteLighthouseBadges) {
      const lighthouseBadgesPath = path.join(process.cwd(), 'lighthouse-badges');
      await deleteDirectoryContents(lighthouseBadgesPath);
    }

    // 5. Final instructions
    console.log(`
--------------------------------------------------------------------------------
Setup Complete!

1. References to:
   - "CambridgeMonorail"    --> "${newOrgName}"
   - "react-weapons-of-choice" --> "${newAppNameMachine}"
   - "React Weapons of Choice"  --> "${newAppNameHuman}"
   - "rwoc"                --> "${newAbbreviation}"

2. Next Steps:
   - Verify changes, especially in README and package.json.
   - Install dependencies: pnpm install
   - Run the prepare script: pnpm run prepare

Happy coding!
--------------------------------------------------------------------------------
    `);

  } catch (error) {
    console.error('Setup script failed:', error);
    process.exit(1);
  }
})();
