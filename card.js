#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Say Hi?`,
                value: () => {
                    open("https://twitter.com/artsofbaniya");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/adityag2511/meeting');
                    console.log("\n See you at the meeting \n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta Luego.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Aditya Agarwal"),
    handle: chalk.white("@vintageplayer"),
    work: `${chalk.white("Tech Founder")} ${chalk
        .hex("#2b82b2")
        .bold("FootLoose Labs")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("artsofbaniya"),
    github: chalk.gray("https://github.com/") + chalk.green("vintageplayer"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("adityag2511"),
    web: chalk.cyan("https://artsofbaniya.com"),
    npx: chalk.red("npx") + " " + chalk.white("artsofbaniya"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${chalk.italic(
            "         Always building or learning."
        )}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("Primarily enjoy strategy, game theory & arbitrage.")}`,
        `${chalk.italic("Generalist Techie is just playing to my strengths.")}`,
        `${chalk.italic("My inbox is always open. Whether you want to")}`,
        `${chalk.italic(
            "brainstorm or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
