//Exercise 7

let dice_roll;
dice_roll = num => Math.floor(Math.random() * num + 1);

let choice;
const ul = document.createElement("ul");

num = prompt("How many sides the dice should have?");

do {
    choice = dice_roll(num);
    ul.innerHTML += `<li>${choice}</li>`;
} while (choice != num);

document.body.appendChild(ul);