/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true; // can't see
const hasMap = false; // must rely on memory
const hasACowToSell = true // meets a peddler outside the town
const gullibleButLucky = true //convinced to buy; beans are indeed magical
const hasHungryMother = true //has a hungry mother to care for

console.log("\nYou see two paths: one leads to the mountains, the other to the village.");
const choice1 = readline.question("\nDo you go to the 'mountains' or the 'village'?");

if (choice1 === "mountains" && hasTorch) {
  console.log("\nYou start walking toward the mountains, but then suddenly remember that your mother told you sell the cow you have with you. You backtrack and take the road to the village.");
} else if (choice1 === "mountains" && !hasTorch) {
  console.log("\nIt's too dark to proceed. You decide to turn back.");
} else if (choice1 === "village" || hasMap) {
  console.log("\nYou walk toward the distant lamplight and find your way to the village.");
} else {
  console.log("\nBad choice. You get lost and wander aimlessly.");
}

console.log("\nUpon approaching the town, you spot an old merchant peddling wares. Something is odd about him, but you can't put your finger on exactly what.");
const choice2 = readline.question("\nDo you 'ignore' or 'greet' him?");

if (choice2 === "ignore" && hasACowToSell) {
  console.log("\nYou try to ignore him, but you've a cow to sell, and your family is dying of hunger, so you relent to his entreaties.");
} else if (choice2 === "ignore" && !hasACowToSell) {
  console.log("\nYou ignore the odd merchant. You've no reason to be bothered with such riffraff.");
} else if (choice2 === "greet" && hasACowToSell) {
  console.log("\nYou greet the merchant. Perhaps he can give you a fair price for your cow.");
} else {
  console.log("\nYou greet the merchant, but all he has for sale are some \'magic beans\' and you move along to the central market in search of other vendors.");
};

console.log("\nHe offers you \'magic beans\' in exchange for your cow.");
const choice3 = readline.question("\nDo you 'accept' or 'refuse' his offer?");

if (choice3 === "accept" && gullibleButLucky) {
  console.log("\nYou've been swindled before, but something in the merchant's eyes has you convinced about the beans. You make the trade.");
} else if (choice3 === "accept" && !gullibleButLucky) {
  console.log("\nYou agree to the trade, yet just before you shake on it a raging bear comes out of the forest and devours both of you. Poor luck.");
} else if (choice3 === "refuse" && hasHungryMother) {
  console.log("\nAll you can think of is your starving mother. After some haggling, you get the merchant to throw a skin of wine, a wheel of cheese, some chicken broth, and a leg of mutton into the bargain.\nAs you finalize the trade, you feel content that, while you won't have the money your mother asked you to retrieve, at least you can enjoy one last meal with your poor mother, with her favorite side dish: watery bean soup.");
} else {
  console.log("\nYou refuse the offer, not wishing to be swindled out of your hard-earned money.");
};

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/