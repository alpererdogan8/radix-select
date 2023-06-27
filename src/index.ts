#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { choices } from "./data/choices.js";
import { execNpm } from "./exec/execNpm.js";
import { InstallType } from "./enums/index.js";
import { Choice } from "./types/index.js";

const answer = await inquirer.prompt<{ installType: InstallType, choices: Choice[] }>([
  {
    type: "list",
    name: "installType",
    message: "Would you like to install or uninstall components?",
    choices: Object.values(InstallType),
  },
  {
    type: "checkbox",
    loop: false,
    name: "choices",
    message: (answers) => `Select RadixUI components to ${answers.installType} 🔽  \n  Read more at ${chalk.green(
      "https://www.radix-ui.com"
    )} \n `,
    choices: choices,
    validate(answers) {
      if (answers.length < 1) {
        return "You must select at least one option.";
      }
      return true;
    },
  },
]);

execNpm(answer.choices, answer.installType);
