#! /usr/bin/env node
import inquirer from "inquirer";
function selectBox() {
    console.log("start game level 1 are you ready");
    inquirer
        .prompt([
        {
            type: "list",
            name: "selectedBox",
            message: "select a one box:",
            choices: [
                { name: "green box", value: "option1" },
                { name: "blue box", value: "option2" },
                { name: "yellow box", value: "option3" },
            ],
        },
    ])
        .then((answer) => {
        let check = Math.floor(Math.random() * 7) + 1;
        if (check === 1) {
            console.log("you win!");
        }
        else if (check === 3) {
            console.log("you saved!");
        }
        else if (check === 7) {
            console.log("good job!");
        }
        else {
            console.log("you lose!");
        }
    });
}
selectBox();
