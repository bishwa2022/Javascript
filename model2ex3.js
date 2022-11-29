//Exercise 3

let dog_name = [];

const ul = document.createElement("ul");

for (let i = 0; i < 6; i++) {
    dog_name.push(prompt(`Enter dog name:`));
}

dog_name.reverse();

for (let i = 0; i < 6; i++) {
    ul.innerHTML += `<li>${dog_name[i]}</li>`;
}
document.body.appendChild(ul);