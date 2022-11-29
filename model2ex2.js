//Exercise 2

let number = prompt("Enter number of Participants:");
let name = [];

const ol = document.createElement("ol")

for (let i = 0; i < number; i++) {
    name[i] = prompt(`Participant name:`);
    ol.innerHTML += `<li>${name[i]}</li>`;
}

document.body.appendChild(ol);