#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { choices } from "./data/choices.js";
import { execNpm } from "./exec/execNpm.js";
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "install_type",
        message: "Would you like to add or remove components?",
        choices: ["install", "uninstall"],
    },
    {
        type: "checkbox",
        loop: false,
        name: "choices",
        message: `Select RadixUI components to install on uninstall 🔽  \n  Read more at ${chalk.green("https://www.radix-ui.com")} \n `,
        choices: choices,
        validate(answers) {
            if (answers.length < 1) {
                return "You should select at least one option.";
            }
            return true;
        },
    },
]);
execNpm(answer.choices, answer.install_type);
