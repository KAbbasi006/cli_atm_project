#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000;
let myPin = 4321;
const pinCode = await inquirer.prompt([
    {
        message: "enter your pin code",
        type: "number",
        name: "myPinCode"
    }
]);
if (pinCode.myPinCode === myPin) {
    console.log(`Correct pin code!`);
    let operations = await inquirer.prompt([
        {
            message: "please select option ",
            type: "list",
            name: "operator",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operations.operator === "withdraw") {
        let amount = await inquirer.prompt([
            {
                message: "enter your amount",
                type: "number",
                name: "amount_withdraw"
            }
        ]);
        if (amount.amount_withdraw > myBalance) {
            console.log(`You have insufficient balance`);
        }
        else {
            console.log("Your remaining balance is: ", myBalance -= amount.amount_withdraw);
        }
    }
    else if (operations.operator === "check balance") {
        console.log(`Your balance is:  ${myBalance}`);
    }
    else if (operations.operator === "fast cash") {
        let cash = await inquirer.prompt([
            {
                message: "Please select amount",
                type: "list",
                name: "fastCashAmount",
                choices: ["5000", "10000", "15000", "20000", "25000", "50000"]
            }
        ]);
        if (cash.fastCashAmount > myBalance) {
            console.log(`You have insufficient balance!`);
        }
        else {
            console.log(`Your balance is: ${myBalance -= cash.fastCashAmount}`);
        }
    }
}
else {
    console.log(`Incorrect pin code!`);
}
