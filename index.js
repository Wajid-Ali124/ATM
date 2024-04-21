#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin: ",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
    let operationsAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    if (operationsAnswer.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("you have insufficient balance!");
        }
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationsAnswer.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                message: "Choose amount to be withdrawn",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        if (myBalance >= fastCash.cash) {
            myBalance -= fastCash.cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("you have insufficient balance");
        }
    }
    else if (operationsAnswer.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Invalid Pin!");
}
