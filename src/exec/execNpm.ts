import { exec } from "child_process";
import { createSpinner } from "nanospinner";
import { Choice } from "../types/index.js";
import { InstallType } from "../enums/index.js";

export const execNpm = (choices: Choice[], installType: InstallType) => {
  const npmInstallCommand = `npm ${installType} `;
  const execCode =
    npmInstallCommand +
    choices
      .map(
        (choice) =>
          `@radix-ui${choice}${installType === InstallType.INSTALL ? "@latest -E" : ""}`
      )
      .join(" ");

  const spinner = createSpinner(`${installType === InstallType.INSTALL ? "Installing" : "Uninstalling"} components...`).start();
  exec(execCode, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      spinner.error({ text: "Error" });
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      spinner.warn({ text: "Warn" });
      return;
    }
    spinner.success({
      text: `Components ${installType === InstallType.INSTALL ? "installed" : "uninstalled"} successfully`,
    });
  });
};
