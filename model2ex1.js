//Model2 Exercise 1
let input = []
for (let i = 0; i < 5; i++){
    input[i] = prompt(`Enter number: `);
}

for (let i = 4; i >= 0; i--){
    console.log("Reversed order: " + input[i]);
}