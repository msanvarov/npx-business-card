import boxen, { BorderStyle } from "boxen";
import chalk from "chalk";
import clear from "clear";
import cliSpinners from "cli-spinners";
import fs from "fs";
import inquirer from "inquirer";
import open from "open";
import ora from "ora";
import path from "path";
import request from "request";

clear();

const questions: Array<inquirer.ListQuestion> = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      {
        name: `Reach out via ${chalk.green.bold("email")}?`,
        value: async () => {
          await open("mailto:msalanvarov@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Download Sal's ${chalk.magentaBright.bold("CV")}?`,
        value: async () => {
          const loader = ora({
            text: " Downloading...",
            spinner: cliSpinners.material,
          }).start();
          const pipe = request("https://sal-anvarov.com/api/cv").pipe(
            fs.createWriteStream("./sal-cv.html")
          );

          pipe.on("finish", () => {
            const downloadPath = path.join(process.cwd(), "sal-cv.html");
            console.log(`\CV Downloaded at ${downloadPath} \n`);
            open(downloadPath);
            loader.stop();
          });
        },
      },
      {
        name: `Book a ${chalk.redBright.bold("Meeting")}?`,
        value: async () => {
          await open("https://calendly.com/msalanvarov/30min");
          console.log("\nCan't wait to meet!\n");
        },
      },
      {
        name: "Quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

const main = async () => {
  const prompts = {
    name: chalk.bold.green("             Sal Anvarov"),
    handle: chalk.white("@msanvarov"),
    occupation: `${chalk.white("Full Stack Software Engineer")}`,
    github: chalk.gray("https://github.com/") + chalk.green("msanvarov"),
    linkedin:
      chalk.gray("https://linkedin.com/in/") + chalk.blue("sal-anvarov"),
    web: chalk.cyan("https://sal-anvarov.com"),
    npx: chalk.red("npx") + " " + chalk.white("sal"),

    labelOccupation: chalk.white.bold("       Occupation:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
  };

  const me = boxen(
    [
      `${prompts.name}`,
      ``,
      `${prompts.labelOccupation}  ${prompts.occupation}`,
      ``,
      `${prompts.labelGitHub}  ${prompts.github}`,
      `${prompts.labelLinkedIn}  ${prompts.linkedin}`,
      `${prompts.labelWeb}  ${prompts.web}`,
      ``,
      `${prompts.labelCard}  ${prompts.npx}`,
      ``,
      `${chalk.italic(
        "I open to discuss opportunities for consulting or development,"
      )}`,
      `${chalk.italic(
        "open to chat via Calendly or email. Whether you have a"
      )}`,
      `${chalk.italic("question or want to say hello, I promise I'll try ")}`,
      `${chalk.italic("to get back to you!")}`,
    ].join("\n"),
    {
      margin: 1,
      float: "center",
      padding: 1,
      borderStyle: BorderStyle.Single,
      borderColor: "green",
    }
  );

  console.log(me);
  const tip = [
    `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
    "",
  ].join("\n");
  console.log(tip);

  const { action } = await inquirer.prompt(questions);
  await action();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
