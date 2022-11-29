//Exercise 4

let num = [];
let user = "";

while (user !== 0) {
    user = parseInt(prompt("Enter number. To quit press 0."));
    num.push(user);
}

num.sort((a, b) => b - a);

for (let i = 0; i < num.length; i++) {
    console.log("The entered number from largest to smallest is: " + (num[i]));
}