#! /usr/bin/env node



import inquirer  from "inquirer";
// Type alias define 
type ansType = {
    userGuess: number
}
const randomNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber);
const answer : ansType =  await inquirer.prompt([{
    type: "number",
    name: "userGuess",
    message: "Guess a number between 1 and 10"
}]);
console.log( answer );

const { userGuess } = answer;
if ( userGuess === randomNumber ) {
    console.log(userGuess,"User guess",randomNumber);
    
    console.log(` Your answer is correct" \nYou are win"`);
}
else{
    console.log(  `Your answer is incorrect \n"please try again"`);
    
}