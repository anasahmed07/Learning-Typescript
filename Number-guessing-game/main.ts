#! /usr/bin/env node
import inquirer from "inquirer";
// code logic
// generate a random number
// ask user to guess the number
// if user guess is correct, print "You won"
// else print "You lost"
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Welcome to the guessing game");
const answers: {
    userGuess: number;
} = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your guess b/w 1 to 10: "
    }
]);
if (answers.userGuess === randomNumber) {
    console.log("proud moment You win");
} else {
    console.log("ohh you lost");
}
console.log("the random number is:"+""+randomNumber);
