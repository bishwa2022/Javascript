//Exercise 5

let numList = [], num = 0; user = "";

do {
    numList.push(user);
    user = parseInt(prompt('Enter number. If repeated, program stops.'));
    num++;
}
while (numList.includes(user) === false);
window.alert("Sorry, the number you entered already exist.")
numList.sort((a, b) => a - b);
for(let number of numList){
    console.log(number);
}