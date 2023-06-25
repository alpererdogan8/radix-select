import { exec } from "child_process";
import { createSpinner } from "nanospinner";

export const execNpm = (choices: string[], type: string) => {
  const npmCommmandsInstall: string = `npm ${type} `;
  const execCode: string =
    npmCommmandsInstall +
    choices
      .map(
        (choice: string) =>
          `@radix-ui${choice}${type === "install" ? "@latest -E" : ""}`
      )
      .join(" ");

  const spinner = createSpinner("Loading...").start();
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
      text: `${type.charAt(0).toUpperCase() + type.slice(1)} success`,
    });
  });
};
