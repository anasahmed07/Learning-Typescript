import inquirer from "inquirer";
let answer= await inquirer.prompt(
[
    {
        name:"q1",
        message:"what is your name?",
        type:"input"
    },
    {
        name:"q2",
        message:"what is your name?",
        type:"list",
        choices:["male","female"],
    }
]
)
console.log(`Welcome ${answer.q1}. your gender is ${answer.q2}`);